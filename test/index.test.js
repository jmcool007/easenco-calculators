import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateBudget,
  calculateOvertime,
  calculateProjectReview,
  calculateQuote,
  calculateRate,
  calculateRevisions,
  calculateSEMSampleSize,
} from '../src/index.js';

test('calculateRate converts target take-home, costs and reserve to day and hourly rates', () => {
  const result = calculateRate({
    targetIncome: 60000,
    annualBusinessCosts: 12000,
    taxReservePercent: 25,
    billableDays: 180,
    hoursPerDay: 8,
  });
  assert.equal(result.grossNeeded, 96000);
  assert.equal(result.dayRate, 533.3333333333334);
  assert.equal(result.hourlyRate, 66.66666666666667);
});

test('calculateBudget includes per-day costs, additional costs, contingency and fee', () => {
  const result = calculateBudget({
    prep: 100,
    creative: 200,
    crew: 600,
    kit: 150,
    locations: 50,
    travel: 100,
    productionDays: 2,
    post: 500,
    licensing: 80,
    deliverables: 120,
    contingencyPercent: 10,
    feePercent: 20,
  });
  assert.equal(result.subtotal, 2700);
  assert.equal(result.contingency, 270);
  assert.equal(result.clientTotal, 3564);
});

test('calculateOvertime handles multi-tier multipliers and billing blocks', () => {
  const r = calculateOvertime({
    crewCount: 2,
    baseDayRate: 600,
    includedHours: 10,
    actualHours: 15,
    multiplier: 1.5,
    kitOvertime: 0,
    secondTierAfter: 12,
    secondMultiplier: 2,
    goldenAfter: 14,
    goldenMultiplier: 2.5,
  });
  assert.equal(r.firstTierHours, 2);
  assert.equal(r.secondTierHours, 2);
  assert.equal(r.goldenHours, 1);
  assert.equal(r.total, 1140);
});

test('calculateRevisions and calculateQuote compute margin-based selling prices', () => {
  const rev = calculateRevisions({
    editorHourlyRate: 75,
    includedRounds: 2,
    requestedRounds: 4,
    hoursPerRound: 1.5,
    pmHours: 1,
    expenses: 50,
    marginPercent: 25,
  });
  assert.equal(rev.extraRounds, 2);
  assert.equal(rev.price, 466.6666666666667);

  const quote = calculateQuote({
    projectBudget: 5000,
    directCosts: 3100,
    days: 5,
    desiredMarginPercent: 30,
    taxPercent: 0,
  });
  assert.ok(Math.abs(quote.preTaxPrice - 3100 / 0.7) < 1e-9);
});

test('calculateSEMSampleSize matches Westland lower bounds', () => {
  const result = calculateSEMSampleSize({
    effectSize: 0.1,
    power: 0.8,
    latentVariables: 2,
    observedVariables: 10,
    alpha: 0.05,
  });
  assert.equal(result.effectMinimum, 947);
  assert.equal(result.structureMinimum, 100);
  assert.equal(result.recommendedMinimum, 947);
});

test('calculateProjectReview compares planned vs actual hourly rate', () => {
  const r = calculateProjectReview({
    originalFee: 3000,
    extraFee: 300,
    plannedCosts: 400,
    actualCosts: 600,
    plannedHours: 30,
    actualHours: 45,
    targetRate: 80,
  });
  assert.equal(r.revenue, 3300);
  assert.equal(r.actualRate, 60);
  assert.equal(r.targetPrice, 4200);
});
