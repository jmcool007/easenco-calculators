export type RateInputs = {
  targetIncome: number;
  annualBusinessCosts: number;
  taxReservePercent: number;
  billableDays: number;
  hoursPerDay: number;
};

export type BudgetInputs = {
  prep: number;
  creative: number;
  crew: number;
  kit: number;
  locations: number;
  travel: number;
  productionDays: number;
  post: number;
  licensing: number;
  deliverables: number;
  contingencyPercent: number;
  feePercent: number;
  additionalCosts?: number[];
};

export type OvertimeInputs = {
  crewCount: number;
  baseDayRate: number;
  baseHourlyOverride?: number;
  includedHours: number;
  actualHours: number;
  multiplier: number;
  kitOvertime: number;
  secondTierAfter?: number;
  secondMultiplier?: number;
  goldenAfter?: number;
  goldenMultiplier?: number;
  billingIncrement?: number;
};

export type RevisionInputs = {
  editorHourlyRate: number;
  includedRounds: number;
  requestedRounds: number;
  hoursPerRound: number;
  pmHours: number;
  expenses: number;
  marginPercent: number;
};

export type QuoteInputs = {
  projectBudget: number;
  directCosts: number;
  days: number;
  desiredMarginPercent: number;
  taxPercent: number;
};

export type SEMSampleSizeInputs = {
  effectSize: number;
  power: number;
  latentVariables: number;
  observedVariables: number;
  alpha: number;
};

export type ProjectReviewInputs = {
  originalFee: number;
  extraFee: number;
  plannedCosts: number;
  actualCosts: number;
  plannedHours: number;
  actualHours: number;
  targetRate: number;
};

export function clampPercent(value: number): number;
export function calculateRate(input: RateInputs): {
  grossNeeded: number;
  dayRate: number;
  hourlyRate: number;
  billableDays: number;
  taxReservePercent: number;
};
export function calculateBudget(input: BudgetInputs): {
  prep: number;
  creative: number;
  production: number;
  travel: number;
  post: number;
  licensing: number;
  deliverables: number;
  additionalCosts: number;
  subtotal: number;
  contingency: number;
  costBase: number;
  productionFee: number;
  clientTotal: number;
};
export function calculateOvertime(input: OvertimeInputs): {
  overtimeHours: number;
  exactOvertime: number;
  baseHourly: number;
  firstTierHours: number;
  secondTierHours: number;
  goldenHours: number;
  perPerson: number;
  laborOvertime: number;
  kitOvertime: number;
  total: number;
};
export function calculateRevisions(input: RevisionInputs): {
  extraRounds: number;
  editHours: number;
  labor: number;
  expenses: number;
  cost: number;
  price: number;
  marginPercent: number;
};
export function calculateQuote(input: QuoteInputs): {
  preTaxPrice: number;
  tax: number;
  clientTotal: number;
  directCosts: number;
  profit: number;
  actualMarginPercent: number;
  pricePerDay: number;
  budgetHeadroom: number;
  overBudget: boolean;
};
export function calculateSEMSampleSize(input: SEMSampleSizeInputs): {
  effectMinimum: number;
  structureMinimum: number;
  recommendedMinimum: number;
  effectExact: number;
  structureExact: number;
  correctedAlpha: number;
  latentPairs: number;
  indicatorRatio: number;
};
export function calculateProjectReview(input: ProjectReviewInputs): {
  revenue: number;
  plannedRate: number;
  actualRate: number;
  targetPrice: number;
  targetGap: number;
  hoursVariance: number;
};
