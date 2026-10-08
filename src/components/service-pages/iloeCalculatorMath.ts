type IloeEstimateInput = {
  salary: string;
  subscriptionMonths: string;
  jobLossType: string;
  daysSinceLastDay: string;
  missedSubscription: boolean;
  latePremium: boolean;
};

export function calculateIloeEstimate({
  salary,
  subscriptionMonths,
  jobLossType,
  daysSinceLastDay,
  missedSubscription,
  latePremium,
}: IloeEstimateInput) {
  const monthlySalary = Number(salary);
  const hasSalary = salary.trim() !== '' && Number.isFinite(monthlySalary) && monthlySalary > 0 && monthlySalary <= 1_000_000;
  const categoryA = hasSalary && monthlySalary <= 16_000;
  const monthlyCap = categoryA ? 10_000 : 20_000;
  const monthlyBenefit = hasSalary ? Math.min(monthlySalary * 0.6, monthlyCap) : 0;
  const monthsPaid = Number(subscriptionMonths);
  const elapsedDays = Number(daysSinceLastDay);
  const eligibilityReady = subscriptionMonths !== '' && jobLossType !== '' && daysSinceLastDay !== '';
  const appearsEligible = eligibilityReady
    && Number.isFinite(monthsPaid) && monthsPaid >= 12
    && jobLossType === 'involuntary'
    && Number.isFinite(elapsedDays) && elapsedDays >= 0 && elapsedDays <= 30;
  const fineEstimate = (missedSubscription ? 400 : 0) + (latePremium ? 200 : 0);

  return {
    monthlySalary,
    hasSalary,
    categoryA,
    monthlyCap,
    monthlyBenefit,
    maxBenefit: monthlyBenefit * 3,
    eligibilityReady,
    appearsEligible,
    fineEstimate,
  };
}
