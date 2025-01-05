import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import data from "./data";

export default function Right({ id }) {
  return (
    <div className="mt-5 flex flex-col ml-10 gap-y-3">
      <h1 className="font-bold">{data[id].Name}</h1>
      <div className="flex">
        <Stack spacing={1}>
          <Rating name="read-only" defaultValue={5} precision={0.5} />
        </Stack>
        <p className="text-gray-500 pl-4">(150 Reviews)</p>
      </div>
      <div className="flex">
        <h1>
          Availability : <span className="text-green-500">In Stock</span>
        </h1>
      </div>
      <div className="flex">
        <h1>
          Brand : <span className="text-gray-500">{data[id].Brand}</span>
        </h1>
      </div>

      <div className="flex">
        <h1>
          Category : <span className="text-gray-500">{data[id].Category}</span>
        </h1>
      </div>

      <div className="flex">
        <h1>
          SKU : <span className="text-gray-500">{data[id].Sku}</span>
        </h1>
      </div>
      <div className="flex">
        <div className="text-red-500 font-bold">$45.00 : </div>
        <div className="text-gray-500 line-through ml-1"> $55.00</div>
      </div>
      <div className="flex">
        <p className="text-gray-500 font-sm">
          Material UI components work in isolation. They are self-contained, and
          will only inject the styles they need to display.
        </p>
      </div>
      <div>
        <div className="text-gray-500 font-bold mb-2">SIZE</div>
        <div className="flex justify-between w-36">
          <div className="border border-black h-5 w-5 text-center text-sm">
            XS
          </div>
          <div className="border border-black h-5 w-5 text-center text-sm">
            S
          </div>
          <div className="border border-black h-5 w-5 text-center text-sm">
            M
          </div>
          <div className="border border-black h-5 w-5 text-center text-sm">
            L
          </div>
          <div className="border border-black h-5 w-5 text-center text-sm">
            XL
          </div>
        </div>
        <div className="font-bold mt-2 mb-2">COLOR</div>
        <div className="flex w-36">
          <div className="border  h-5 w-5 text-center text-sm bg-red-600"></div>
          <div className="border  h-5 w-5 text-center text-sm bg-black mr-2 ml-2"></div>
          <div className="border  h-5 w-5 text-center text-sm bg-white"></div>
        </div>
        <div className="mt-2 mb-2">QUANTITY</div>
        <div className="flex w-36">
          <div className="border  h-5 w-5 text-center text-sm  ">-</div>
          <div className="border  h-5 w-5 text-center text-sm  ">4</div>
          <div className="border  h-5 w-5 text-center text-sm ">+</div>
        </div>
      </div>
    </div>
  );
}
