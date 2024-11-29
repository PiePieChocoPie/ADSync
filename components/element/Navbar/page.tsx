'use client'
import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
import styles from "./style.module.css";
import Image from "next/image";
import logoMiniImg from "@/public/imgs/logo_mini.jpg";
import logoImg from "@/public/imgs/logo.jpg";
import { faSignOut, faUsers, faGears, faUserLock, faHome} from '@fortawesome/free-solid-svg-icons'

import NavbarItem from "@/components/atom/NavbarItem/page";

function Navbar () {
  let [folded, setFolded] = useState(true);

  // dynamicly change navbar width
  const handleFoldedChange = () => {
    const navbar = document.querySelector(`.${styles.navbar}`) as HTMLElement | null;
    const emptyNavbar = document.querySelector(`.${styles.emptyNavbar}`) as HTMLElement | null;

    const root = document.querySelector(':root');
    if (!root) return;
    const rootStyle = window.getComputedStyle(root);
    let min_size = rootStyle.getPropertyValue('--navbar-min-width');
    let max_size = rootStyle.getPropertyValue('--navbar-max-width');
    let size = min_size;
    // let itemDisplayValue = 'none';
    let itemOpacityValue = '0';
    if (!folded) {
      // itemDisplayValue = 'inline';
      itemOpacityValue = '1';
      size = max_size;
    }
    if (navbar && emptyNavbar) {
      navbar.style['width'] = size;
      emptyNavbar.style['width'] = size;
      const listItems = navbar.querySelectorAll('li');
      listItems.forEach((item) => {
        const itemTextNode = item.querySelector('span');
        if (itemTextNode) {
          // itemTextNode.style.display = itemDisplayValue;
          // setTimeout(() => {
          // }, 50);
          itemTextNode.style.opacity = itemOpacityValue;
        }
      });
    }
  };

  // start changing navbar width and pretify it folds/unfolds
  const changeFolded = () => {
    const navbar = document.querySelector(`.${styles.navbar}`);
    const emptyNavbar = document.querySelector(`.${styles.emptyNavbar}`);
    if (navbar && emptyNavbar) {
      setFolded(!folded)
    }
  };

  // track folded changing
  useEffect(() => {
    handleFoldedChange();
  }, [folded]);
  

  return(
    <div className="">
      <div className={`${styles.emptyNavbar} ${styles.navbarWidth}`}></div>
      <div 
        className={`${styles.container} ${styles.navbarWidth} ${styles.navbar} fixed left-0 top-0 flex flex-col`}
      >
        <div className={`w-100 mb-3 ${styles.imgContainer} ${folded ? styles.folded : ''}`}>
          <Image className={styles.logo} src={folded? logoMiniImg: logoImg} alt="logo" />
        </div>
        
        <button onClick={(e) => changeFolded()} className={styles.unfoldButton}>
          	{folded? ">": "<"}
        </button>
      
        <ul className={styles.list}>
          <NavbarItem name="Главная" icon={faHome} href='dashboard'/>
          <NavbarItem name="Очередь сотрудников" icon={faUsers} href='dashboard/queue'/>
          <NavbarItem name="Политика доступов" icon={faUserLock} href='dashboard/policy'/>
          <NavbarItem name="Настройка сервисов" icon={faGears} href='dashboard/settings'/>
        </ul>
        <div className={styles.empty_stretch + " "}></div>
        <div className={styles.logoutContainer + " my-2"}>
          <NavbarItem name="Выход" icon={faSignOut} />
        </div>
    </div>
    
    </div>
  )
};
export default Navbar;