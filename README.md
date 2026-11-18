# easenco-calculators

[![Website](https://img.shields.io/badge/web-easenco.com-df6121)](https://www.easenco.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

Open-source, zero-dependency calculation helpers powering core tools at **[Easenco](https://www.easenco.com)** — plus a complete directory of **78 free browser-local calculators** and **42 practical guides** across 7 categories.

- **Web App:** [https://www.easenco.com](https://www.easenco.com)
- **GitHub Pages Directory:** [https://jmcool007.github.io/easenco-calculators/](https://jmcool007.github.io/easenco-calculators/)

## Installation (npm)

```bash
npm install easenco-calculators
```

## Quick Start

```js
import {
  calculateSEMSampleSize,
  calculateRate,
  calculateBudget,
  calculateOvertime,
  calculateQuote,
} from "easenco-calculators";

// 1. A priori SEM sample size (Westland lower bounds)
const sem = calculateSEMSampleSize({
  effectSize: 0.2,
  power: 0.8,
  latentVariables: 4,
  observedVariables: 16,
  alpha: 0.05,
});
console.log(sem.recommendedMinimum); // 342 (effect) vs 100 (structure)

// 2. Freelance / videographer day rate floor
const rate = calculateRate({
  targetIncome: 65000,
  annualBusinessCosts: 14000,
  taxReservePercent: 25,
  billableDays: 150,
  hoursPerDay: 8,
});
console.log(rate.dayRate.toFixed(2)); // 702.22

// 3. Multi-tier crew overtime (1.5x, 2x, 2.5x golden time)
const ot = calculateOvertime({
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
console.log(ot.total); // 1140
```

## Exported Functions

| Function | Purpose | Online Interactive Tool |
|---|---|---|
| `calculateSEMSampleSize` | Westland a priori SEM sample size lower bounds | [SEM Sample Size Calculator](https://www.easenco.com/tools/sem-sample-size-calculator/) |
| `calculateRate` | Annual take-home + overhead + tax reserve → day/hourly rate | [Freelance Video Day Rate Calculator](https://www.easenco.com/tools/freelance-video-day-rate-calculator/) |
| `calculateBudget` | Phase-based production budget + contingency + fee | [Video Production Budget Calculator](https://www.easenco.com/tools/video-production-budget-calculator/) |
| `calculateOvertime` | Multi-tier overtime + golden time + billing blocks | [Video Shoot Overtime Calculator](https://www.easenco.com/tools/video-shoot-overtime-calculator/) |
| `calculateRevisions` | Out-of-scope editing rounds with target margin | [Video Editing Revision Cost Calculator](https://www.easenco.com/tools/video-editing-revision-cost-calculator/) |
| `calculateQuote` | Target margin vs. client budget headroom | [Video Project Margin Check](https://www.easenco.com/tools/video-project-margin-check/) |
| `calculateProjectReview` | Planned vs. realized hourly earnings | [Freelance Project Hourly Rate Calculator](https://www.easenco.com/tools/freelance-project-hourly-rate-calculator/) |

### Interactive SEM Scenarios (Open with Prefilled Parameters)

- [Small effect (δ = 0.10, 2 latent, 10 observed)](https://www.easenco.com/tools/sem-sample-size-calculator/?effectSize=0.1&power=0.8&latentVariables=2&observedVariables=10&alpha=0.05)
- [Medium model (δ = 0.20, 4 latent, 16 observed)](https://www.easenco.com/tools/sem-sample-size-calculator/?effectSize=0.2&power=0.8&latentVariables=4&observedVariables=16&alpha=0.05)
- [Larger model (δ = 0.30, 5 latent, 15 observed)](https://www.easenco.com/tools/sem-sample-size-calculator/?effectSize=0.3&power=0.8&latentVariables=5&observedVariables=15&alpha=0.05)

---

## Complete Online Calculator Directory (78 Tools)

All calculators run locally in the browser with no sign-up required, transparent formulas, and shareable scenario URLs.

### [Business analytics](https://www.easenco.com/categories/business-analytics/) (3)

Explore SaaS customer acquisition payback and revenue retention using your own cohort assumptions, and estimate the running cost of AI model APIs.

- **[LLM API cost calculator](https://www.easenco.com/tools/llm-api-cost-calculator/)** — Estimate large language model API costs per request, per 1,000 requests and per month from input and output tokens, words or characters, with prompt caching and batch discounts.
- **[SaaS CAC payback calculator](https://www.easenco.com/tools/saas-cac-payback-calculator/)** — Compare simple SaaS CAC payback with a transparent monthly churn scenario using your own acquisition cost, revenue and gross margin.
- **[SaaS net and gross revenue retention calculator](https://www.easenco.com/tools/saas-revenue-retention-calculator/)** — Calculate gross and net revenue retention for the same starting customer cohort, with clear treatment of lost and expanded recurring revenue.

### [Business finance](https://www.easenco.com/categories/business-finance/) (3)

Work out the real cost of payment terms and short-term business financing before you agree to them.

- **[Early payment discount calculator](https://www.easenco.com/tools/early-payment-discount-calculator/)** — Convert payment terms such as 2/10 net 30 into a simple and compounded annual rate, compare with your borrowing cost and decide whether to take the discount.
- **[Factor rate to APR calculator](https://www.easenco.com/tools/factor-rate-to-apr-calculator/)** — Convert a factor rate such as 1.3 into an APR using the actual daily, weekly or monthly repayment schedule and upfront fees, and see why the simple estimate is far too low.
- **[Invoice factoring cost calculator](https://www.easenco.com/tools/invoice-factoring-cost-calculator/)** — Calculate invoice factoring fees, the advance, the rebate and the annualized cost on the money you actually receive, with daily or 30-day fee billing.

### [Business & freelance](https://www.easenco.com/categories/business-freelance/) (12)

Price your work, test a price increase, and explore project earnings, payment milestones and the sales needed to cover costs.

- **[Billable utilization and effective rate calculator](https://www.easenco.com/tools/billable-utilization-calculator/)** — Calculate billable utilization, annual revenue and your effective rate across all hours worked, plus the billable hours or rate needed to reach a profit target.
- **[Break-even and target profit calculator](https://www.easenco.com/tools/break-even-target-profit-calculator/)** — Calculate break-even units, a target profit sales volume, and estimated profit at planned sales using fixed costs, unit costs and selling fees.
- **[Photo and video usage change worksheet](https://www.easenco.com/tools/creative-usage-change-worksheet/)** — Compare current and requested creative usage terms, rights and open decisions in a browser-local worksheet.
- **[Freelance hourly rate calculator](https://www.easenco.com/tools/freelance-hourly-rate-calculator/)** — Calculate a minimum freelance hourly and day rate from your take-home target, business costs, tax reserve and realistic billable hours, with formula and examples.
- **[Freelance project hourly rate calculator](https://www.easenco.com/tools/freelance-project-hourly-rate-calculator/)** — Compare planned and actual earnings before income tax per project hour after direct costs, and see the price needed to meet your target. Free browser-local calculator for freelancers.
- **[Late payment interest calculator](https://www.easenco.com/tools/late-payment-interest-calculator/)** — Work out simple interest and late fees on an overdue invoice using an annual or monthly rate, with the formula, examples and notes on UK, EU and US rules.
- **[Markup and margin calculator](https://www.easenco.com/tools/markup-margin-calculator/)** — Find a selling price from cost and a target margin or markup, or convert between markup and margin. Includes formulas, a conversion table and cost-plus pricing notes.
- **[Photo licensing fee calculator](https://www.easenco.com/tools/photo-licensing-fee-calculator/)** — Prepare a photo licensing fee estimate with your own prices, image count and usage terms.
- **[Photography pricing calculator](https://www.easenco.com/tools/photography-pricing-calculator/)** — Calculate your minimum photography session price and cost of doing business (CODB) from annual overhead, income goal, tax reserve, bookings and shoot costs.
- **[Price increase calculator](https://www.easenco.com/tools/price-increase-calculator/)** — Calculate the share of customers you can lose after a price increase while keeping gross profit or revenue unchanged. Includes formula, worked example and table.
- **[Project payment schedule calculator](https://www.easenco.com/tools/project-payment-schedule-calculator/)** — Split a freelance project fee across editable milestones and compare the first payment with expected upfront project costs.
- **[Retainer pricing calculator](https://www.easenco.com/tools/retainer-pricing-calculator/)** — Set a monthly retainer fee from your hourly rate, included hours, account management time, commitment discount and pass-through costs, with overage and contract value.

### [E-commerce](https://www.easenco.com/categories/e-commerce/) (2)

Test whether a discount will pay off and estimate packaging supply costs for orders of different sizes.

- **[Discount break-even calculator](https://www.easenco.com/tools/discount-break-even-calculator/)** — Find the sales increase a discount needs to keep gross profit unchanged, with your margin, discount and expected uplift. Includes formula, examples and a lookup table.
- **[Packaging cost per order calculator](https://www.easenco.com/tools/packaging-cost-per-order-calculator/)** — Estimate packaging cost per order and per item, convert bulk supply prices, and compare three order sizes using your own costs.

### [Personal finance](https://www.easenco.com/categories/personal-finance/) (1)

Explore how extra payments change the payoff schedule for a fixed-rate loan.

- **[Fixed-rate loan extra payment calculator](https://www.easenco.com/tools/fixed-rate-loan-extra-payment-calculator/)** — Compare a fixed-rate loan with monthly, annual and one-time extra principal payments, including a month-by-month payoff schedule.

### [Research](https://www.easenco.com/categories/research/) (39)

Plan and report research: power analysis, SEM sample size and power, effect sizes, p-values, multiple comparison corrections, interaction probing, meta-analysis, intraclass correlation, Cronbach's alpha, chi-square tests, proportions, McNemar's test, weighted kappa, Tukey HSD, Cochran's Q, correlation comparisons, mediation, model fit and reliability, plus survey sample size, inter-coder agreement and reliability sample size, keyness, word dispersion, lexical diversity, readability and historical calendar conversion.

- **[Case-by-theme matrix builder](https://www.easenco.com/tools/case-theme-matrix-builder/)** — Build a qualitative case-by-theme matrix with summaries, quotes, source locations and contrasting accounts. Save and restore a browser-local file.
- **[Chi-square test and Cramér's V calculator](https://www.easenco.com/tools/chi-square-cramers-v-calculator/)** — Enter a contingency table of counts for the chi-square test of independence, Cramér's V, G², expected counts and adjusted residuals; for 2 × 2 tables also φ, Fisher's exact test, odds ratio and relative risk with CIs.
- **[Chi-square difference test calculator](https://www.easenco.com/tools/chi-square-difference-test-calculator/)** — Compare two nested structural equation models with the chi-square difference test, or the Satorra–Bentler scaled difference for MLM and MLR estimates, plus ΔCFI for invariance testing.
- **[Cochran's Q test calculator](https://www.easenco.com/tools/cochrans-q-test-calculator/)** — Test whether the proportion of yes outcomes differs across three or more related conditions with Cochran's Q, and follow up with pairwise exact McNemar tests adjusted by Holm's method.
- **[Compare two correlations calculator](https://www.easenco.com/tools/compare-correlations-calculator/)** — Test the difference between two Pearson correlations from independent samples with Fisher's z, or from one sample sharing a variable with Williams' t, Steiger's Z and Meng's Z, with Zou's confidence interval.
- **[Composite reliability and AVE calculator](https://www.easenco.com/tools/composite-reliability-calculator/)** — Paste factor loadings to calculate composite reliability (CR / omega), average variance extracted (AVE), coefficient H and Fornell–Larcker validity checks.
- **[Cronbach's alpha calculator](https://www.easenco.com/tools/cronbach-alpha-calculator/)** — Paste Likert or test item responses to get Cronbach's alpha with a Feldt confidence interval, standardized alpha, alpha if item deleted and corrected item–total correlations, with reverse-scored items.
- **[Effect size converter](https://www.easenco.com/tools/effect-size-converter/)** — Convert one effect size into Cohen's d, Hedges' g, r, r², eta squared, Cohen's f, f² and the odds ratio, with group sizes, Cohen's labels and the probability of superiority.
- **[Effect size from t or F calculator](https://www.easenco.com/tools/effect-size-from-t-and-f-calculator/)** — Convert a reported t or F statistic into Cohen's d, dz, Hedges' g, r, partial eta squared, omega squared and Cohen's f, with exact confidence intervals from the noncentral t and F distributions.
- **[Historical OCR comparison and character error rate](https://www.easenco.com/tools/historical-ocr-comparison/)** — Compare a checked transcription with OCR text and review character differences and key terms.
- **[Intraclass correlation (ICC) calculator](https://www.easenco.com/tools/icc-calculator/)** — Paste ratings (subjects × raters) to get all six intraclass correlation forms, one-way, two-way random and two-way mixed, single and average measures, with F tests, 95% confidence intervals and Koo and Li guidelines.
- **[Intercoder overlap and missing ratings checker](https://www.easenco.com/tools/intercoder-overlap-checker/)** — Check shared units across coder pairs and find missing ratings before calculating inter-coder reliability.
- **[Inter-coder reliability calculator (Krippendorff's alpha)](https://www.easenco.com/tools/intercoder-reliability-calculator/)** — Paste coding data from a spreadsheet to get Krippendorff's alpha (nominal, ordinal, interval or ratio, missing values allowed), Cohen's kappa, Scott's pi, Fleiss' kappa and percent agreement.
- **[Julian–Gregorian calendar converter](https://www.easenco.com/tools/julian-gregorian-calendar-converter/)** — Convert a date between the Julian and Gregorian calendars for any year from 1 to 9999, with the day of the week, Julian Day Number and the number of days between the calendars.
- **[Keyness and log-likelihood calculator](https://www.easenco.com/tools/keyness-log-likelihood-calculator/)** — Compare how often a word occurs in two corpora: log-likelihood (G²) with p-value, frequencies per million, and the effect sizes %DIFF, Log Ratio, Bayes factor (BIC) and ELL.
- **[Lexical diversity calculator (TTR, MATTR, MTLD, HD-D)](https://www.easenco.com/tools/lexical-diversity-calculator/)** — Paste a text to measure lexical diversity: type-token ratio, moving-average TTR, MTLD, HD-D, Guiraud's R, Herdan's C, Maas and Yule's K, computed in your browser.
- **[McNemar test calculator](https://www.easenco.com/tools/mcnemar-test-calculator/)** — Test whether a yes/no outcome changed between two measurements on the same people or matched pairs: exact, mid-p and chi-square McNemar p-values, the change in proportion with a confidence interval and the conditional odds ratio.
- **[Meta-analysis calculator](https://www.easenco.com/tools/meta-analysis-calculator/)** — Pool effect sizes from several studies with fixed-effect and random-effects meta-analysis (DerSimonian–Laird or Paule–Mandel), Hartung–Knapp interval, Q, I², τ², prediction interval and a forest plot. Handles odds and risk ratios.
- **[Multiple comparisons correction calculator](https://www.easenco.com/tools/multiple-comparisons-correction-calculator/)** — Paste p-values to calculate Holm-Bonferroni, Bonferroni, Šidák and Benjamini–Hochberg (FDR) adjusted p-values side by side, matching R's p.adjust function.
- **[P-value from test statistic calculator](https://www.easenco.com/tools/p-value-from-test-statistic-calculator/)** — Calculate exact one- or two-tailed p-values and critical values from t, z, F, chi-square or correlation (r) statistics, with copy-ready APA 7th reporting.
- **[Power analysis calculator](https://www.easenco.com/tools/power-analysis-calculator/)** — Calculate the sample size needed for 80% or 90% power, the power of a planned study, or the smallest detectable effect for t tests, correlations, multiple regression and one-way ANOVA. Results match G*Power.
- **[Proportion confidence interval calculator](https://www.easenco.com/tools/proportion-confidence-interval-calculator/)** — Calculate the confidence interval for a proportion or percentage with the Wilson, Clopper–Pearson (exact), Jeffreys, Agresti–Coull and Wald methods side by side, and test it with an exact binomial test.
- **[Qualitative codebook builder](https://www.easenco.com/tools/qualitative-codebook-builder/)** — Build, download and restore a qualitative codebook and its manually entered change log.
- **[Qualitative coding disagreement worksheet](https://www.easenco.com/tools/qualitative-coding-disagreement-worksheet/)** — Identify differing codes and record discussion notes for fixed qualitative coding units.
- **[Questionnaire missing-item score checker](https://www.easenco.com/tools/questionnaire-missing-item-score-checker/)** — Check reverse scoring, completed items and user-selected missing-item scoring for a questionnaire scale.
- **[Readability calculator (Flesch, Fog, SMOG)](https://www.easenco.com/tools/readability-calculator/)** — Paste English text to get Flesch Reading Ease, Flesch–Kincaid grade level, Gunning Fog, SMOG, Coleman–Liau and ARI, with syllable counts from the CMU Pronouncing Dictionary.
- **[Reliability sample size calculator (Krippendorff's alpha and kappa)](https://www.easenco.com/tools/reliability-sample-size-calculator/)** — Find how many units to double-code for an inter-coder reliability check: Krippendorff's sample size for a minimum alpha (Bloch and Kraemer formula) and the units needed for a Cohen's kappa confidence interval of a chosen width.
- **[RMSEA and fit index calculator](https://www.easenco.com/tools/rmsea-calculator/)** — Calculate RMSEA with its 90% confidence interval and the test of close fit from a model's chi-square, degrees of freedom and sample size, and CFI and TLI from the baseline model.
- **[SEM power analysis calculator (RMSEA)](https://www.easenco.com/tools/sem-power-analysis-calculator/)** — Calculate RMSEA statistical power and minimum sample size (N) for structural equation models (close, not-close and exact fit, MacCallum et al. method).
- **[A priori sample size calculator for structural equation models (SEM)](https://www.easenco.com/tools/sem-sample-size-calculator/)** — Calculate minimum a priori sample size for structural equation models (SEM) from effect size, power, latent and observed variables using Westland's bounds.
- **[Simple slopes and Johnson–Neyman calculator](https://www.easenco.com/tools/simple-slopes-calculator/)** — Probe a two-way interaction in regression from its coefficients and covariance: simple slopes with standard errors, t, p and confidence intervals at the mean and ±1 SD, and the Johnson–Neyman region of significance.
- **[Sobel test calculator](https://www.easenco.com/tools/sobel-test-calculator/)** — Calculate Sobel, Aroian and Goodman mediation test statistics, p-values and a Monte Carlo confidence interval from path coefficients and standard errors.
- **[Survey sample size calculator](https://www.easenco.com/tools/survey-sample-size-calculator/)** — Work out how many completed survey responses you need for a given margin of error and confidence level, correct for a small population, and see how many people to invite at your response rate.
- **[One-way ANOVA and Tukey HSD calculator](https://www.easenco.com/tools/tukey-hsd-calculator/)** — Run a one-way ANOVA and Welch's ANOVA from each group's n, mean and standard deviation, then compare all pairs with Tukey–Kramer HSD or Games–Howell, with adjusted p-values and simultaneous confidence intervals.
- **[Two proportions calculator](https://www.easenco.com/tools/two-proportions-calculator/)** — Compare two independent proportions or conversion rates: the difference with Newcombe and Wald intervals, two-proportion z test, Fisher's exact test, relative risk, odds ratio, Cohen's h and number needed to treat.
- **[Weighted kappa calculator](https://www.easenco.com/tools/weighted-kappa-calculator/)** — Calculate linear and quadratic weighted Cohen's kappa, unweighted kappa, standard errors and 95% confidence intervals for two raters on an ordinal scale.
- **[Word dispersion calculator (DP, Juilland's D, KLD)](https://www.easenco.com/tools/word-dispersion-calculator/)** — Paste corpus part sizes and word frequencies to get Gries' DP and corrected DPnorm, Kullback–Leibler divergence, Juilland's D, Carroll's D2, Rosengren's S and adjusted frequency for many words at once.
- **[Word frequency across documents checker](https://www.easenco.com/tools/word-frequency-across-documents/)** — Compare occurrence counts, normalized frequencies and concentration across documents.
- **[Word in context viewer](https://www.easenco.com/tools/word-in-context-viewer/)** — Explore keyword-in-context results with literal matching and configurable surrounding text.

### [Video production](https://www.easenco.com/categories/video-production/) (18)

Plan a production from your day rate and project budget through shoot schedules, footage storage and editing changes.

- **[AI video generation cost calculator](https://www.easenco.com/tools/ai-video-generation-cost-calculator/)** — Estimate paid AI video generation attempts and editing costs using your own model prices and shot plan.
- **[AI video shot planner](https://www.easenco.com/tools/ai-video-shot-planner/)** — Plan an AI video shot with subject, action, camera, references and continuity notes.
- **[Film call time calculator](https://www.easenco.com/tools/film-call-time-calculator/)** — Work backward from first shot to estimate crew and talent call times, then calculate an estimated wrap, including breaks and wrap-out.
- **[Freelance video day rate calculator](https://www.easenco.com/tools/freelance-video-day-rate-calculator/)** — Work back from the income you need to a day rate that accounts for non-billable days, business costs and a tax reserve. Free, private, browser-local calculator for freelance video producers and small production teams.
- **[Meal penalty calculator](https://www.easenco.com/tools/meal-penalty-calculator/)** — Calculate film and TV meal penalties from call, meal and wrap times. Counts each 30-minute period or fraction late, first and second meals, and your own penalty rates.
- **[Old video update cost calculator](https://www.easenco.com/tools/old-video-update-cost-calculator/)** — Price retrieval, project restoration, editing and per-version delivery as separate tasks.
- **[Raw footage delivery cost calculator](https://www.easenco.com/tools/raw-footage-delivery-cost-calculator/)** — Compare cloud and drive delivery using your transfer costs, active labor and measured upload speed.
- **[Script page eighths calculator](https://www.easenco.com/tools/script-page-eighths-calculator/)** — Paste a scene list with page counts in eighths (3/8, 1 2/8) to get the exact total, a first-pass day-by-day plan at your pages-per-day pace, the longest scenes and an estimated screen time.
- **[Turnaround and forced call calculator](https://www.easenco.com/tools/turnaround-calculator/)** — Paste a week of call and wrap times to find every short turnaround between shoot days, including wraps after midnight and days off, and price the rest lost per hour or per violation with your own rates.
- **[Video deliverables matrix builder](https://www.easenco.com/tools/video-deliverables-matrix-builder/)** — Build a delivery list with format, language, files and estimated active work for each version.
- **[Video editing revision cost calculator](https://www.easenco.com/tools/video-editing-revision-cost-calculator/)** — Price extra review rounds using editing time, producer coordination, expenses and a target margin. Free, private, browser-local calculator for freelance video producers and small production teams.
- **[Video feedback organizer](https://www.easenco.com/tools/video-feedback-organizer/)** — Organize client video feedback by version, timecode, reviewer and status. Save an editable browser-local plan.
- **[Video footage handoff checklist](https://www.easenco.com/tools/video-footage-handoff-checklist/)** — Prepare a footage handoff checklist with file scope, transfer, dependencies and recipient checks.
- **[Video production budget calculator](https://www.easenco.com/tools/video-production-budget-calculator/)** — Build an estimate by production phase, add your own direct costs, then print or save a client-facing summary. Free, private, browser-local calculator for freelance video producers and small production teams.
- **[Video project quote margin check](https://www.easenco.com/tools/video-project-margin-check/)** — Check whether a proposed client total covers known direct costs, the margin you want and tax shown separately. Free, private, browser-local calculator for freelance video producers and small production teams.
- **[Video deliverable scope change worksheet](https://www.easenco.com/tools/video-scope-change-worksheet/)** — Document changes to video deliverables, work already completed and an estimate for additional work.
- **[Video shoot overtime calculator](https://www.easenco.com/tools/video-shoot-overtime-calculator/)** — Estimate the cost of a longer shoot day from crew day rates, included hours, time-and-a-half and double-time tiers, golden time and kit charges. Free, private, browser-local calculator for freelance video producers and small production teams.
- **[Video storage calculator](https://www.easenco.com/tools/video-storage-calculator/)** — Estimate footage storage for different camera bitrates and recording times, backup copies, extra capacity, and upload time.

## Practical Guides & Worked Examples (42 Guides)

- **[How to estimate the AI cost of a SaaS feature](https://www.easenco.com/guides/ai-feature-cost-per-customer/)** (Business analytics) — Estimate what an LLM-powered feature costs per customer each month, how it changes SaaS gross margin and CAC payback, and how caching, smaller models and usage limits bring it down.
- **[How to build a case-by-theme matrix](https://www.easenco.com/guides/build-case-by-theme-matrix/)** (Research) — Build a qualitative case-by-theme matrix with a worked interview example, summaries, source references and contrasting accounts.
- **[How to build and revise a qualitative codebook](https://www.easenco.com/guides/build-revise-qualitative-codebook/)** (Research) — Document code definitions, inclusion criteria, examples and changes in a qualitative study.
- **[How to calculate your effective hourly rate on a fixed-price project](https://www.easenco.com/guides/calculate-effective-hourly-rate-fixed-price/)** (Business & freelance) — Compare a project’s planned and actual hourly return after direct costs, with an example and scope-change checklist.
- **[How to check historical OCR before citing a source](https://www.easenco.com/guides/check-historical-ocr-before-citing/)** (Research) — Compare OCR with a checked transcription and review errors in dates, names and source context.
- **[How to compare the real cost of business financing](https://www.easenco.com/guides/compare-business-financing-costs/)** (Business finance) — Turn early payment discounts, invoice factoring fees, merchant cash advance factor rates and loan APRs into one annual rate, with a side-by-side table and worked examples.
- **[How to document a change in photo or video usage](https://www.easenco.com/guides/compare-photo-video-usage-rights/)** (Business & freelance) — Compare current creative usage terms with a requested new use and document what needs agreement.
- **[Discount or raise prices? How a 10% change really affects profit](https://www.easenco.com/guides/discount-or-raise-prices/)** (E-commerce) — Why a 10% discount needs far more extra sales than a 10% price increase can afford to lose, with formulas, a worked example and a margin table.
- **[How to calculate e-commerce contribution per order](https://www.easenco.com/guides/ecommerce-contribution-per-order/)** (E-commerce) — Estimate contribution per order with a worked example of product costs, payment fees, shipping, advertising and return losses.
- **[How to choose an effect size for a power analysis](https://www.easenco.com/guides/effect-size-for-power-analysis/)** (Research) — Choose and justify the effect size for a sample size calculation: smallest effect of interest, published and pilot effects, Cohen's benchmarks and converting between d, r, f and odds ratios.
- **[Turnaround and forced calls: rest between shoot days explained](https://www.easenco.com/guides/film-crew-turnaround-rest-periods/)** (Video production) — How film crew turnaround and forced calls work: calculate rest hours between wrap and next call, overnight shoots, weekend rest and broken-turnaround pay.
- **[How much deposit should you ask for on a freelance project?](https://www.easenco.com/guides/freelance-project-deposit/)** (Business & freelance) — Choose a freelance project deposit by comparing the first payment with costs due before the next payment. Includes a cash-gap formula, schedule comparisons, milestone triggers and cancellation terms.
- **[How many units should you double-code for inter-coder reliability?](https://www.easenco.com/guides/how-many-units-for-intercoder-reliability/)** (Research) — Plan the size of an inter-coder reliability sample: why the 10% rule fails, Krippendorff's minimum-alpha sample size, kappa confidence interval width, rare categories and several variables, with a worked content analysis example.
- **[How much storage do you need for a video shoot?](https://www.easenco.com/guides/how-much-storage-for-a-video-shoot/)** (Video production) — Estimate video storage from camera bitrate and recording time, plan backup copies with the 3-2-1 rule, understand GB versus GiB and work out upload time, with a two-camera worked example and a GB-per-hour table.
- **[How to analyze questionnaire data: a step-by-step workflow](https://www.easenco.com/guides/how-to-analyze-questionnaire-data/)** (Research) — A seven-step workflow for analyzing survey and questionnaire data: sample size, data preparation, Cronbach's alpha, choosing the right test, effect sizes with confidence intervals and multiple comparisons, with a worked example.
- **[How to calculate your break-even point](https://www.easenco.com/guides/how-to-calculate-break-even-point/)** (Business & freelance) — Calculate break-even units, break-even revenue and the sales needed for a target profit, with a worked example including payment fees, a price sensitivity table, margin of safety and the most common mistakes.
- **[How to calculate your freelance hourly rate](https://www.easenco.com/guides/how-to-calculate-freelance-hourly-rate/)** (Business & freelance) — Work out a freelance hourly rate from your take-home target, business costs, tax reserve and realistic billable hours, with worked examples and tables.
- **[How to choose a statistical test](https://www.easenco.com/guides/how-to-choose-a-statistical-test/)** (Research) — Choose the right statistical test from your research question, variable types and whether data are paired: a decision table covering t tests, ANOVA, chi-square, McNemar, correlation, regression, kappa and ICC, with common mistakes.
- **[How to measure word dispersion in a corpus](https://www.easenco.com/guides/how-to-measure-word-dispersion/)** (Research) — Measure how evenly words are spread across a corpus: why frequency is not enough, Gries' DP and DPnorm, KL divergence, Juilland's D, how corpus parts and rare words affect the result, and how to report dispersion.
- **[How to price a monthly retainer](https://www.easenco.com/guides/how-to-price-a-retainer/)** (Business & freelance) — Choose a retainer structure, price it from your hourly rate with management time, discounts and overage, and agree the terms that keep it working. Includes a worked example.
- **[How to interpret and report SEM model fit](https://www.easenco.com/guides/how-to-report-sem-model-fit/)** (Research) — How to interpret and report SEM and CFA model fit in APA style: chi-square, RMSEA (90% CI & PCLOSE), CFI, TLI, Satorra–Bentler Δχ² and reporting templates.
- **[Inter-rater reliability: kappa, Krippendorff's alpha or ICC?](https://www.easenco.com/guides/inter-rater-reliability-kappa-alpha-icc/)** (Research) — Compare Cohen's kappa, Fleiss' kappa, weighted kappa, Krippendorff's alpha and ICC forms: when to use each inter-rater reliability measure with examples.
- **[How to prepare partially overlapping coding data](https://www.easenco.com/guides/intercoder-overlap-missing-ratings/)** (Research) — Prepare fixed-unit coding tables, distinguish zero from missing ratings and document coder overlap before a reliability analysis.
- **[How to interpret word frequency using context](https://www.easenco.com/guides/interpret-word-frequency-using-context/)** (Research) — Use concordance lines to check how a frequently occurring word is used in its source text.
- **[Markup vs margin: the difference and how to convert](https://www.easenco.com/guides/markup-vs-margin/)** (Business & freelance) — Understand markup and margin, convert one into the other, and avoid the pricing mistake of adding a margin target as a markup. Worked examples and conversion tables.
- **[How to quote an update to an old video](https://www.easenco.com/guides/old-video-update-pricing/)** (Video production) — Estimate archive retrieval, project restoration, editing and delivery before pricing a small video change.
- **[How to organize video revision feedback](https://www.easenco.com/guides/organize-video-revision-feedback/)** (Video production) — Consolidate video revision notes by version and timecode, resolve conflicting feedback and document decisions.
- **[How to estimate photo licensing fees and define usage rights](https://www.easenco.com/guides/photo-licensing-fee-and-usage-rights/)** (Business & freelance) — Estimate a photo license fee using your own prices and document the media, term, territory and exclusivity.
- **[How to plan AI video shots and generation costs](https://www.easenco.com/guides/plan-ai-video-shots-and-costs/)** (Video production) — Plan an AI video shot list, estimate paid generations and review continuity, permissions and delivery.
- **[How to prepare a video footage handoff](https://www.easenco.com/guides/prepare-video-footage-handoff/)** (Video production) — Prepare video originals and project dependencies for a client handoff with a transfer and verification checklist.
- **[How to score reverse items and missing answers](https://www.easenco.com/guides/questionnaire-reverse-scoring-missing-items/)** (Research) — Understand reverse scoring, missing item rules, complete scores and prorated scores using a worked questionnaire example.
- **[How to charge for raw footage delivery](https://www.easenco.com/guides/raw-footage-delivery-pricing/)** (Video production) — Estimate the work and costs of sending video files by cloud or drive, and specify the handover clearly.
- **[Script page eighths: how to count pages and estimate shoot days](https://www.easenco.com/guides/script-page-eighths-shooting-schedule/)** (Video production) — How film and TV scenes are measured in eighths of a page, how to add eighths correctly, typical pages-per-day paces, turning a scene list into shoot days, and using page counts in the budget, with worked examples.
- **[How to plan sample size for structural equation modeling](https://www.easenco.com/guides/sem-sample-size-methods/)** (Research) — Compare structural equation model (SEM) sample size requirements: N:q rules of thumb, Westland's a priori bounds, MacCallum RMSEA power and Monte Carlo.
- **[How to handle changes to video deliverables](https://www.easenco.com/guides/video-deliverable-scope-changes/)** (Video production) — Compare original and changed video deliverables, record completed work and prepare a clear change estimate.
- **[Video deliverables checklist: versions and files](https://www.easenco.com/guides/video-deliverables-checklist/)** (Video production) — Practical video deliverables checklist and matrix example: specify edits, aspect ratios, captions, codecs and client handoff files without scope creep.
- **[How to price extra video editing revisions](https://www.easenco.com/guides/video-editing-revision-pricing/)** (Video production) — Price extra video editing revision rounds with a clear formula: count extra rounds, estimate hours, add coordination and expenses, then apply a margin. Includes worked examples, margin vs markup table and contract wording.
- **[How to price a video project](https://www.easenco.com/guides/video-production-pricing/)** (Video production) — A step-by-step process for pricing a video production: set a day rate, build the budget, add contingency and a production fee, check margin and plan payments, with a full worked example.
- **[How to plan revisions and crew overtime](https://www.easenco.com/guides/video-scope-and-overtime/)** (Video production) — Plan shoot days, call times and crew overtime, define revision rounds and handle change orders in video production, with worked examples and the overtime formula.
- **[How to set a videographer day rate](https://www.easenco.com/guides/videographer-day-rate/)** (Video production) — Calculate your videographer or editor day rate from take-home pay, overhead, gear replacement, tax reserve and realistic billable days, with worked tables.
- **[What to do when a client pays an invoice late](https://www.easenco.com/guides/what-to-do-when-an-invoice-is-late/)** (Business & freelance) — A step-by-step plan for chasing an overdue invoice, when you can charge interest or late fees, how to calculate them, a reminder template and ways to prevent late payment.
- **[Is a word frequent across a corpus or only one document?](https://www.easenco.com/guides/word-frequency-across-documents/)** (Research) — Learn how overall frequency can hide concentration in one document and compare normalized counts.

## License

MIT © [Easenco](https://www.easenco.com)
