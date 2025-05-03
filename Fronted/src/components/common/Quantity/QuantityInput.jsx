import React from "react";
import "./QuantityInput.css";

const QuantityInput = ({ value, onChange, min = 1, max = 99 }) => {
  const handleDecrease = () => {
    if (value > min) onChange(value - 1);
  };

  const handleIncrease = () => {
    if (value < max) onChange(value + 1);
  };

  return (
    <div className="quantity-input">
      <button className="quantity-btn" onClick={handleDecrease}>
        −
      </button>
      <input
        type="number"
        className="quantity-field"
        value={value}
        onChange={(e) => {
          const newVal = parseInt(e.target.value);
          if (!isNaN(newVal) && newVal >= min && newVal <= max) {
            onChange(newVal);
          }
        }}
      />
      <button className="quantity-btn" onClick={handleIncrease}>
        +
      </button>
    </div>
  );
};

export default QuantityInput;
