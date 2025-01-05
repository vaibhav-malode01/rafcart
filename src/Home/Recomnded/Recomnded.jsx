import RecomdedTab from "./RecomdedTab";

export default function Recomnded() {
  return (
    <>
      <div className="mt-40">
        <h1 className="ml-36 mb-10 font-bold text-2xl">RECOMNDED FOR YOU</h1>
      </div>
      <div className="flex flex-col gap-y-5 ">
        <RecomdedTab />
        <RecomdedTab />
      </div>
    </>
  );
}
