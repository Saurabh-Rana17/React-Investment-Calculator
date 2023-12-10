import React from "react";

export default function Input({
  labelValue1,
  labelValue2,
  handleChange,
  value,
}) {
  return (
    <>
      <div className="input-group">
        <p>
          <label>{labelValue1}</label>
          <input value={value} onChange={handleChange} type="number" />
        </p>
        <p>
          <label>{labelValue2}</label>
          <input onChange={handleChange} type="number" />
        </p>
      </div>
    </>
  );
}
