import Image from "./Image";
import Right from "./Right";
import Bottom from "./Bottom";
import Logo from "./Logo";
export default function Main({ id, image, title, price }) {
  return (
    <>
      <div className="flex">
        <Image image={image} />
        <Right id={id} />
      </div>
      <div className="flex flex-col">
        <Bottom image={image} id={id} title={title} price={price} />
        <Logo />
      </div>
    </>
  );
}
