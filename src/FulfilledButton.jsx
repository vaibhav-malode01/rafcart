import React, { useState } from "react";

export default function FulfilledButton() {
  const [isFulfilled, setIsFulfilled] = useState(false); // Track button state

  // Handle button click
  const handleClick = () => {
    setIsFulfilled(!isFulfilled); // Toggle between empty and fulfilled
  };

  return (
    <button
      onClick={handleClick}
      className={`px-6 py-2 text-white font-semibold rounded-lg focus:outline-none transition duration-300 ${
        isFulfilled ? "bg-green-500" : "bg-red-500"
      }`}
    >
      {isFulfilled ? "Fulfilled" : "Not Fulfilled"}
    </button>
  );
}
