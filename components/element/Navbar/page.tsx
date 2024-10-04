'use client'
import { useEffect, useState } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import logoImg from "@/public/imgs/logo.jpg";
import { faHouse, faSignOut } from '@fortawesome/free-solid-svg-icons'

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
  const changeFolded = (newValue: boolean) => {
    const navbar = document.querySelector(`.${styles.navbar}`);
    const emptyNavbar = document.querySelector(`.${styles.emptyNavbar}`);

    if (navbar && emptyNavbar) {
      let newFolded = false
      if (newValue) {
        newFolded = true
      }
      setFolded(newFolded)
    }
  };


  // track folded changing
  useEffect(() => {
    handleFoldedChange();
  }, [folded]);


  return(
    <>
    <div className={`${styles.emptyNavbar} ${styles.navbarWidth}`}></div>
    <div onMouseEnter={(e) => changeFolded(false) }
      onMouseLeave={(e) => changeFolded(true)} 
      className={`${styles.container} ${styles.navbarWidth} ${styles.navbar} fixed left-0 top-0 flex flex-col`}
    >
      <div className="w-100 mb-3">
        <Image className={styles.logo} src={logoImg} alt="logo" />
      </div>
      
        <ul className={styles.list}>
          <NavbarItem name="Главная" icon={faHouse} position="absolute" />
          <NavbarItem name="ГлавнаяОчень" icon={faHouse} position="absolute" />
          <NavbarItem name="Сильно главная" icon={faHouse} position="absolute" />
          <NavbarItem name="FAQ" icon={faHouse} position="absolute" />
        </ul>
        <div className={styles.empty_stretch + " "}></div>
        <div className={styles.logoutContainer + " my-2"}>
          <NavbarItem name="Logout" icon={faSignOut} position="absolute"/>
        </div>
    </div>
    </>
  )
};
export default Navbar;