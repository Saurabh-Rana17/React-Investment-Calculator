import React from "react";

export default function UserInput({ labelValue, handleChange, value }) {
  return (
    <>
      <p>
        <label htmlFor="input">{labelValue}</label>
        <input
          id={labelValue}
          value={value}
          onChange={handleChange}
          type="number"
        />
      </p>
    </>
  );
}
