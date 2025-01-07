import Card from "../../Card";
import i1 from "../../assets/Images/i1.jpg";
import i2 from "../../assets/Images/i2.jpg";
import i3 from "../../assets/Images/i3.jpg";
import i4 from "../../assets/Images/i4.jpg";

export default function RecomdedTab() {
  return (
    <div className="flex justify-evenly w-[1230px] mx-auto gap-x-5 ">
      <Card title="GUYER CHAIR" image={i1} id={0} price={4000} />
      <Card title="BED KING SIZE " image={i2} id={1} price={10000} />
      <Card title="COUPLE SOFA" image={i3} id={2} price={8000} />
      <Card title="MATRESSX" image={i4} id={3} price={25000} />
    </div>
  );
}
