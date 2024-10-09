// components
import Navbar from "@/components/element/Navbar/page";

// base imports
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <Navbar />
        <div className="ps-5 w-full max-w-md lg:max-w-2xl xl:max-w-3xl mx-auto">
          {children}
        </div>
    </div>
  );
}
