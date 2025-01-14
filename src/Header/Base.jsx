import Name from "./Name";
import SearchBox from "./SearchBox";
import Icon from "./Icon";

export default function Base() {
  return (
    <div
      className="flex justify-around
     sticky bg-gray-100  p-3  "
    >
      <Name />
      <SearchBox />
      <Icon />
    </div>
  );
}
