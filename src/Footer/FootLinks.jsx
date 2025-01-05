import React from "react";
import Link from "./Link";

export default function FootLinks({ title }) {
  // Destructure `title` from props
  if (!Array.isArray(title)) {
    console.error("Expected 'title' to be an array, but got:", title);
    return <div>No links available</div>;
  }

  return (
    <div>
      {title.map((item, idx) => (
        <Link key={idx} title={item} />
      ))}
    </div>
  );
}
