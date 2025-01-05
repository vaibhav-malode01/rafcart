import Image from "./Image";
import Right from "./Right";
import Bottom from "./Bottom";
import Logo from "./Logo";

export default function Main({ image, id }) {
  return (
    <>
      <div className="flex">
        <Image image={image} />
        <Right id={id} />
      </div>
      <div className="flex flex-col">
        <Bottom />
        <Logo />
      </div>
    </>
  );
}
