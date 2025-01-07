import RecomdedTab from "./RecomdedTab";

export default function Recomnded() {
  return (
    <>
     
      <h1 className=" mt-36 ml-36 mb-12 font-bold text-2xl">RECOMNDED FOR YOU</h1>
      <div className="flex flex-col gap-y-5 ">
        <RecomdedTab />
        <RecomdedTab />
      </div>
    </>
  );
}
