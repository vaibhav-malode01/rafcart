import React from "react";

export default function Checks({ name, Count }) {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <input type="checkbox" name={name} id="" />
          <label htmlFor="Bedroom">{name}</label>
        </div>
        <h3>
          <span>(</span>
          {Count}
          <span>)</span>
        </h3>
      </div>
    </div>
  );
}
