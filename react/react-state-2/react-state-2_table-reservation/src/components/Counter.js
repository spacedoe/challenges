import { useState } from "react";

export default function Counter({
  onAddingPeople,
  onSubstractingPeople,
  count,
}) {
  
  // used count and isDisabled variables to disable the button if the count of people goes below 0.
  let isDisabled = false;
  count <= 0 ? (isDisabled = true) : (isDisabled = false);

  return (
    <>
      <h2>How many people would you like to visit us with?</h2>
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment people count"
          onClick={onAddingPeople}
        >
          +
        </button>
        <button
          disabled={isDisabled}
          type="button"
          className="counter__button"
          aria-label="decrement people count"
          onClick={onSubstractingPeople}
        >
          -
        </button>
      </div>
    </>
  );
}
