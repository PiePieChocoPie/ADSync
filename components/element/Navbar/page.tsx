import styles from "./style.module.css";
import Image from "next/image";
import logoImg from "@/public/imgs/logo.jpg";
import { faHouse, faSignOut } from '@fortawesome/free-solid-svg-icons'

import NavbarItem from "@/components/atom/NavbarItem/page";


function Navbar () {

  return(
    <div className={styles.container + " fixed flex flex-col"}>
      <div className="w-100 mb-3">
        <Image className="" src={logoImg} alt="logo" />
      </div>
        <ul className={styles.list}>
          <NavbarItem name="Home" icon={faHouse} />
          <NavbarItem name="Not Home" icon={faHouse} />
          <NavbarItem name="About" icon={faHouse} />
          <NavbarItem name="FAQ" icon={faHouse} />
        </ul>
        <div className={styles.empty_stretch + " "}></div>
        <div className={styles.logoutContainer + " my-2"}>
          <NavbarItem name="Logout" icon={faSignOut} />
        </div>
    </div>
  )
};
export default Navbar;