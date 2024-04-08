import CarComponent from "@/components/CardComponent";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <CarComponent></CarComponent>
      {/* <div className="h-80 flex-1 rounded-2xl bg-blue-500 p-10 text-white mt-5 flex justify-between flex-col">
        <h2 className="text-xl font-semibold">Dashboard Page</h2>
        <button className="border rounded-md px-5 py-2 bg-orange-500 text-white w-44">
          <Link href="/dashboard/setting">Setting</Link>
        </button>
      </div> */}
    </div>
  );
}
