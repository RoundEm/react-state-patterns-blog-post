import React from "react";

function NumberInput({ onChange, value, lastIndex }) {
  return (
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(+e.target.value)}
      placeholder="Enter index #"
      min="0"
      max={lastIndex}
    />
  );
}

export default NumberInput;
