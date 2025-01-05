import Card from "../Card";
import i1 from "../assets/Images/i1.jpg";
import i3 from "../assets/Images/i3.jpg";
import i2 from "../assets/Images/i2.jpg";

export default function Cardtab() {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex  justify-between w-[900px] gap-x-3 mb-3  ">
          <div className=" w-[300px] transform scale-x-[0.75] ">
            <Card title="GUYER CHAIR" image={i1} id={0} />
          </div>
          <div className=" w-[300px] transform scale-x-[0.75] ">
            <Card title="Bed King Size" image={i2} id={1} />
          </div>
          <div className=" w-[300px] transform scale-x-[0.75]">
            <Card title="couple sofa" image={i3} id={2} />
          </div>
        </div>
      </div>
    </>
  );
}
