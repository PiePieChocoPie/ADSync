import Input from "@/components/atom/Input/page";
import Link from "next/link";
import Auth from "@/components/element/Auth/page";

export default function Home() {
  return (
    <>
      {/* <h1>AUTH</h1>
      <Input placeholder="fe" />
      <Link href={"/dashboard"} >To dashboard</Link> */}

      <div className="w-screen h-screen flex items-center justify-center">
        <Auth />
      </div>
    </>
  );
}
