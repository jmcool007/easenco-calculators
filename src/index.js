export function clampPercent(value) {
  return Math.min(99, Math.max(0, value));
}

export function calculateRate(input) {
  const income = Math.max(0, input.targetIncome);
  const costs = Math.max(0, input.annualBusinessCosts);
  const reserve = clampPercent(input.taxReservePercent) / 100;
  const days = Math.max(0, input.billableDays);
  const hours = Math.max(0, input.hoursPerDay);
  const grossNeeded = reserve < 1 ? (income + costs) / (1 - reserve) : 0;
  const dayRate = days > 0 ? grossNeeded / days : 0;
  return {
    grossNeeded,
    dayRate,
    hourlyRate: hours > 0 ? dayRate / hours : 0,
    billableDays: days,
    taxReservePercent: reserve * 100,
  };
}

export function calculateBudget(input) {
  const prep = Math.max(0, input.prep);
  const creative = Math.max(0, input.creative);
  const production =
    (Math.max(0, input.crew) + Math.max(0, input.kit) + Math.max(0, input.locations)) *
    Math.max(0, input.productionDays);
  const travel = Math.max(0, input.travel);
  const post = Math.max(0, input.post);
  const licensing = Math.max(0, input.licensing);
  const deliverables = Math.max(0, input.deliverables);
  const additionalCosts = (input.additionalCosts ?? []).reduce(
    (sum, value) => sum + Math.max(0, value),
    0,
  );
  const subtotal =
    prep + creative + production + travel + post + licensing + deliverables + additionalCosts;
  const contingency = (subtotal * clampPercent(input.contingencyPercent)) / 100;
  const costBase = subtotal + contingency;
  const productionFee = (costBase * Math.min(100, Math.max(0, input.feePercent))) / 100;
  return {
    prep,
    creative,
    production,
    travel,
    post,
    licensing,
    deliverables,
    additionalCosts,
    subtotal,
    contingency,
    costBase,
    productionFee,
    clientTotal: costBase + productionFee,
  };
}

export function calculateOvertime(input) {
  const people = Math.max(0, input.crewCount);
  const dayRate = Math.max(0, input.baseDayRate);
  const included = Math.max(0, input.includedHours);
  const multiplier = Math.max(1, input.multiplier);
  const baseHourly =
    (input.baseHourlyOverride ?? 0) > 0
      ? input.baseHourlyOverride
      : included > 0
        ? dayRate / included
        : 0;
  const exactOvertime = Math.max(0, input.actualHours - included);
  const increment = Math.max(0, input.billingIncrement ?? 0);
  const overtimeHours =
    increment > 0 && exactOvertime > 0
      ? Math.ceil(exactOvertime / increment - 1e-9) * increment
      : exactOvertime;
  const billedEnd = included + overtimeHours;
  const secondStart =
    (input.secondTierAfter ?? 0) > 0 ? Math.max(included, input.secondTierAfter) : Infinity;
  const goldenStart =
    (input.goldenAfter ?? 0) > 0 ? Math.max(included, input.goldenAfter) : Infinity;
  const secondEnd = Math.min(goldenStart, billedEnd);
  const firstTierHours = Math.max(0, Math.min(billedEnd, secondStart, goldenStart) - included);
  const secondTierHours = Math.max(0, secondEnd - secondStart);
  const goldenHours = Math.max(0, billedEnd - goldenStart);
  const secondMultiplier = Math.max(1, input.secondMultiplier ?? multiplier);
  const goldenMultiplier = Math.max(1, input.goldenMultiplier ?? secondMultiplier);
  const perPerson =
    baseHourly *
    (firstTierHours * multiplier +
      secondTierHours * secondMultiplier +
      goldenHours * goldenMultiplier);
  const laborOvertime = perPerson * people;
  const kitOvertime = Math.max(0, input.kitOvertime) * overtimeHours;
  return {
    overtimeHours,
    exactOvertime,
    baseHourly,
    firstTierHours,
    secondTierHours,
    goldenHours,
    perPerson,
    laborOvertime,
    kitOvertime,
    total: laborOvertime + kitOvertime,
  };
}

export function calculateRevisions(input) {
  const extraRounds = Math.max(0, input.requestedRounds - input.includedRounds);
  const editHours = extraRounds * Math.max(0, input.hoursPerRound);
  const labor = (editHours + Math.max(0, input.pmHours)) * Math.max(0, input.editorHourlyRate);
  const expenses = Math.max(0, input.expenses);
  const cost = labor + expenses;
  const margin = clampPercent(input.marginPercent) / 100;
  const price = margin < 1 ? cost / (1 - margin) : 0;
  return {
    extraRounds,
    editHours,
    labor,
    expenses,
    cost,
    price,
    marginPercent: margin * 100,
  };
}

export function calculateQuote(input) {
  const direct = Math.max(0, input.directCosts);
  const days = Math.max(0, input.days);
  const budget = Math.max(0, input.projectBudget);
  const margin = clampPercent(input.desiredMarginPercent) / 100;
  const preTaxPrice = margin < 1 ? direct / (1 - margin) : 0;
  const tax = (preTaxPrice * clampPercent(input.taxPercent)) / 100;
  const clientTotal = preTaxPrice + tax;
  const profit = preTaxPrice - direct;
  return {
    preTaxPrice,
    tax,
    clientTotal,
    directCosts: direct,
    profit,
    actualMarginPercent: preTaxPrice > 0 ? (profit / preTaxPrice) * 100 : 0,
    pricePerDay: days > 0 ? preTaxPrice / days : 0,
    budgetHeadroom: budget - clientTotal,
    overBudget: clientTotal > budget,
  };
}

function normalQuantile(probability) {
  const a = [
    -39.6968302866538, 220.946098424521, -275.928510446969, 138.357751867269,
    -30.6647980661472, 2.50662827745924,
  ];
  const b = [
    -54.4760987982241, 161.585836858041, -155.698979859887, 66.8013118877197,
    -13.2806815528857,
  ];
  const c = [
    -0.00778489400243029, -0.322396458041136, -2.40075827716184, -2.54973253934373,
    4.37466414146497, 2.93816398269878,
  ];
  const d = [0.00778469570904146, 0.32246712907004, 2.445134137143, 3.75440866190742];
  const lowerTail = 0.02425;
  const upperTail = 1 - lowerTail;

  if (probability < lowerTail) {
    const q = Math.sqrt(-2 * Math.log(probability));
    return (
      (((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) /
      ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1)
    );
  }
  if (probability > upperTail) {
    const q = Math.sqrt(-2 * Math.log(1 - probability));
    return (
      -(((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) /
      ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1)
    );
  }

  const q = probability - 0.5;
  const r = q * q;
  return (
    ((((((a[0] * r + a[1]) * r + a[2]) * r + a[3]) * r + a[4]) * r + a[5]) * q) /
    (((((b[0] * r + b[1]) * r + b[2]) * r + b[3]) * r + b[4]) * r + 1)
  );
}

export function calculateSEMSampleSize(input) {
  const effectSize = Math.min(0.999999, Math.max(0.000001, Math.abs(input.effectSize)));
  const power = Math.min(0.999999, Math.max(0.5, input.power));
  const alpha = Math.min(0.5, Math.max(0.000001, input.alpha));
  const latentVariables = Math.max(2, Math.floor(input.latentVariables));
  const observedVariables = Math.max(1, Math.floor(input.observedVariables));
  const indicatorRatio = observedVariables / latentVariables;
  const structureExact = 50 * indicatorRatio ** 2 - 450 * indicatorRatio + 1100;
  const structureMinimum = Math.ceil(structureExact);

  const rho = effectSize;
  const latentPairs = (latentVariables * (latentVariables - 1)) / 2;
  const correctedAlpha = -Math.expm1(Math.log1p(-alpha) / latentPairs);
  const beta = 1 - power;
  const criticalDifference = normalQuantile(1 - correctedAlpha / 2) - normalQuantile(beta);
  const h = (effectSize / criticalDifference) ** 2;
  const a = 1 - rho ** 2;
  const b = rho * Math.asin(rho / 2);
  const c = rho * Math.asin(rho);
  const d = a / Math.sqrt(3 - a);
  const leadingTerm = a * (Math.PI / 6 - b + d) + h;
  const radicand =
    leadingTerm ** 2 + 4 * a * h * (Math.PI / 6 + Math.sqrt(a) + 2 * b - c - 2 * d);
  const effectExact = (leadingTerm + Math.sqrt(Math.max(0, radicand))) / (2 * h);
  const effectMinimum = Math.ceil(effectExact);

  return {
    effectMinimum,
    structureMinimum,
    recommendedMinimum: Math.max(effectMinimum, structureMinimum),
    effectExact,
    structureExact,
    correctedAlpha,
    latentPairs,
    indicatorRatio,
  };
}

export function calculateProjectReview(input) {
  const revenue = input.originalFee + input.extraFee;
  const plannedRate = (input.originalFee - input.plannedCosts) / input.plannedHours;
  const actualRate = (revenue - input.actualCosts) / input.actualHours;
  const targetPrice = input.actualCosts + input.actualHours * input.targetRate;
  return {
    revenue,
    plannedRate,
    actualRate,
    targetPrice,
    targetGap: revenue - targetPrice,
    hoursVariance: input.actualHours - input.plannedHours,
  };
}
