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
          <tr>
            <td>{resultArr[0].year}</td>
            <td>{resultArr[0].valueEndOfYear}</td>
            <td>{resultArr[0].interest}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
