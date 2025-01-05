import React from "react";
import AccountCard from "./AccountCard";

export default function Right() {
  return (
    <div className="flex justify-center w-[900px] gap-x-4 ml-8">
      <AccountCard
        heading="Personal profile"
        name="john Doe"
        info="example@mail.com"
        mobile={9845764758}
      ></AccountCard>
      <AccountCard
        heading="Personal profile"
        name="john Doe"
        info="example@mail.com"
        landline={250032}
        mobile={9845764758}
      ></AccountCard>
      <AccountCard
        heading="Personal profile"
        name="john Doe"
        info="example@mail.com"
        landline={250032}
        mobile={9845764758}
      ></AccountCard>
    </div>
  );
}
