import ShippingCard from "./ShippingCard";
import { FiTruck } from "react-icons/fi";
import { GiReceiveMoney } from "react-icons/gi";
import { Ri24HoursLine } from "react-icons/ri";

export default function Shipping() {
  return (
    <>
      <div className="flex w-[1260px]  mx-auto mt-10 h-28 gap-x-3 ">
        <ShippingCard title="Free Shipping" Icon={FiTruck} />
        <ShippingCard title="Money Returns" Icon={GiReceiveMoney} />
        <ShippingCard title="24/7 Support" Icon={Ri24HoursLine} />
      </div>
    </>
  );
}
