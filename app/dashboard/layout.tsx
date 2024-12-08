// components
import Sidebar from "@/components/element/Sidebar/page";
import style from "./style.module.css";


// base imports
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <Sidebar />
        <div className={style.mainContainer}>
          {children}
        </div>
    </div>
  );
}
