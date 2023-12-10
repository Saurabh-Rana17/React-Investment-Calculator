import React from "react";

export default function ResultTable({ resultArr }) {
  return (
    <section>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value </th>
            <th>Interest(Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {resultArr.map((item) => {
            return (
              <tr key={item.year}>
                <td>{item.year}</td>
                <td>{item.valueEndOfYear}</td>
                <td>{item.interest}</td>
                <td>{item.totalInterest}</td>
                <td>{item.investedValue}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
