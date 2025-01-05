import React from "react";

export default function Link({ title }) {
  return (
    <div>
      <div className="flex-col items-start space-y-3 text-gray-500">
        <p>{title}</p>
      </div>
    </div>
  );
}
