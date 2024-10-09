import Input from "@/components/atom/Input/page";
import Link from "next/link";
export default function Home() {
  return (
    <>
    <h1>AUTH</h1>
      <Input placeholder="fe" />
      <Link href={"/dashboard"} >To dashboard</Link>
      
    </>
  );
}
