import i1 from "../assets/Images/i1.jpg";

export default function Image({ image }) {
  return (
    <div className="h-[450px] w-[600px] border  ml-36 mt-5">
      <img className="w-full h-full" src={image}></img>
    </div>
  );
}
