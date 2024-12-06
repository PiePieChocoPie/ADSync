// components
import Sidebar from "@/components/element/Sidebar/page";

// base imports
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <Sidebar />
        <div className="ps-5 w-full max-w-md lg:max-w-2xl xl:max-w-3xl mx-auto">
          {children}
        </div>
    </div>
  );
}
