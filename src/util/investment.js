// This function expects a JS object as an argument
// The object should contain the following properties
// - initialInvestment: The initial investment amount
// - annualInvestment: The amount invested every year
// - expectedReturn: The expected (annual) rate of return
// - duration: The investment duration (time frame)

export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  console.log(initialInvestment, annualInvestment, expectedReturn, duration);

  const annualData = [];
  let investmentValue = Number(initialInvestment);
  // let totalInterest = 0;
  // let investedValue = 0;
  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = Number(
      investmentValue * (Number(expectedReturn) / 100)
    );
    investmentValue += Number(interestEarnedInYear) + Number(annualInvestment);
    // totalInterest += interestEarnedInYear;
    // investedValue = investmentValue - totalInterest;
    annualData.push({
      year: i + 1, // year identifier
      interest: formatter.format(interestEarnedInYear),
      valueEndOfYear: formatter.format(investmentValue),
      annualInvestment: formatter.format(annualInvestment),
      // totalInterest: formatter.format(totalInterest),
      // investedValue: formatter.format(investedValue),
    });
  }
  console.log(annualData[0]);
  return annualData;
}

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
