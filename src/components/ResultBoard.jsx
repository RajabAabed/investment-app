import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function ResultBoard({ input }) {
  const resutl = calculateInvestmentResults(input);
  const initialInvestment =
    resutl[0].valueEndOfYear - resutl[0].interest - resutl[0].annualInvestment;

  const resultRows = resutl.map((row) => {
    const totalInterest =
      row.valueEndOfYear - row.annualInvestment * row.year - initialInvestment;
    const totalAmountInvested = row.valueEndOfYear - totalInterest;
    return (
      <tr key={row.year} className="center">
        <td>{row.year}</td>
        <td>{formatter.format(row.valueEndOfYear)}</td>
        <td>{formatter.format(row.interest)}</td>
        <td>{formatter.format(totalInterest)}</td>
        <td>{formatter.format(totalAmountInvested)}</td>
      </tr>
    );
  });

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>{resultRows}</tbody>
    </table>
  );
}
