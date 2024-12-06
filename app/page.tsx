import Input from "@/components/atom/Input/page";
import Link from "next/link";
import Auth from "@/components/element/Auth/page";


export default function Home() {
  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center">
        <Auth />
      </div>
    </>
  );
}
