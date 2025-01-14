import Card from "../Card";
import i1 from "../assets/Images/i1.jpg";
import i2 from "../assets/Images/i2.jpg";
import i3 from "../assets/Images/i3.jpg";
import i4 from "../assets/Images/i4.jpg";
export default function Cardtab() {
  return (
    <>
      <div>
        <h1 className="ml-36 font-bold mb-5 mt-10">RELATED COMPONENETS</h1>
      </div>
      <div className="flex justify-evenly w-4/5  gap-x-5 ml-36">
        <Card title="GUYER CHAIR" image={i1} id={0} price={4000} />
        <Card title="Bed King Size" image={i2} id={1} price={6000} />
        <Card title="couple sofa" image={i3} id={2} price={8000} />
        <Card title="matressX" image={i4} id={3} price={5000} />
      </div>
    </>
  );
}
