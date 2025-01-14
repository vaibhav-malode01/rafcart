import Card from "../../Card";
import i1 from "../../assets/Images/i1.jpg";
import i2 from "../../assets/Images/i2.jpg";
import i3 from "../../assets/Images/i3.jpg";
import i4 from "../../assets/Images/i4.jpg";
import { products } from "../../context/CartContext";

export default function Cardtab() {
  return (
    <>
      <div className="mt-12 ml-36 mb-12">
        <h1 className="font-bold text-2xl">Top New Arrivals</h1>
      </div>
      <div className="flex justify-center  w-[1230px] mx-auto gap-x-4">
        {products.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            isLike={item.isLike}
          />
        ))}
        {/* <Card title="GUYER CHAIR" image={i1} id={0} price={4000} />
        <Card title="BED KING SIZE" image={i2} id={1} price={6000} />
        <Card title="MATRESSX" image={i4} id={3} price={5000} /> */}
      </div>
    </>
  );
}
