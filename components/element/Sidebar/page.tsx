'use client'
import { useEffect, useState } from "react";
import { usePathname, useRouter } from 'next/navigation';
import { setCookie } from 'cookies-next';
import { useTheme, } from 'next-themes';

import styles from "./style.module.css";
import { faSignOut, faUsers, faGears, faUserLock, faHome, faSpaghettiMonsterFlying, faSun, faMoon} from '@fortawesome/free-solid-svg-icons'
import Image from "next/image";
import logoMiniImg from "@/public/imgs/logo_mini.jpg";
import logoImg from "@/public/imgs/logo.jpg";

import SidebarItem from "@/components/atom/SidebarItem/page";

function Sidebar () {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const pathName = usePathname();
  const pathNameArr = pathName.split('/');
  const currentPage = pathNameArr[pathNameArr.length - 1];

  let [folded, setFolded] = useState(true);

  // dynamicly change sidebar width
  const handleFoldedChange = () => {
    const sidebar = document.querySelector(`.${styles.sidebar}`) as HTMLElement | null;
    const emptySidebar = document.querySelector(`.${styles.emptySidebar}`) as HTMLElement | null;

    const root = document.querySelector(':root');
    if (!root) return;
    const rootStyle = window.getComputedStyle(root);
    let min_size = rootStyle.getPropertyValue('--sidebar-min-width');
    let max_size = rootStyle.getPropertyValue('--sidebar-max-width');
    let size = min_size;
    // let itemDisplayValue = 'none';
    let itemOpacityValue = '0';
    if (!folded) {
      // itemDisplayValue = 'inline';
      itemOpacityValue = '1';
      size = max_size;
    }
    if (sidebar && emptySidebar) {
      sidebar.style['width'] = size;
      emptySidebar.style['width'] = size;
      const listItems = sidebar.querySelectorAll('li');
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

  // start changing sidebar width and pretify it folds/unfolds
  const changeFolded = () => {
    const sidebar = document.querySelector(`.${styles.sidebar}`);
    const emptySidebar = document.querySelector(`.${styles.emptySidebar}`);
    if (sidebar && emptySidebar) {
      setFolded(!folded)
    }
  };
  
  // track folded changing
  useEffect(() => {
    handleFoldedChange();
  }, [folded]);
  

  const logout = () => {
    setCookie('authCredentials', null, {path: '/', secure: true});
  }
  
  const changeTheme = () => {
    if (theme == 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }

  return(
    <div className="">
      <div className={`${styles.emptySidebar} ${styles.sidebarWidth}`}></div>
      <div 
        className={`${styles.container} ${folded ? styles.folded : ''} ${styles.sidebarWidth} ${styles.sidebar} fixed left-0 top-0 flex flex-col`}
      >
        <div className={`w-100 mb-3 ${styles.imgContainer} ${folded ? styles.folded : ''}`}>
          <Image className={styles.logo} src={folded? logoMiniImg: logoImg} alt="logo" />
        </div>
        
        <button onClick={(e) => changeFolded()} className={styles.unfoldButton}>
          	{folded? ">": "<"}
        </button>
      
        <ul className={styles.list}>
          <SidebarItem name="Главная" icon={faHome} href='dashboard' classes={currentPage=='dashboard' ? 'active': ''} />
          <SidebarItem name="Очередь сотрудников" icon={faUsers} href='dashboard/queue' classes={currentPage=='queue' ? 'active': ''} />
          <SidebarItem name="Политика доступов" icon={faUserLock} href='dashboard/policy' classes={currentPage=='policy' ? 'active': ''} />
          <SidebarItem name="Настройка сервисов" icon={faGears} href='dashboard/settings' classes={currentPage=='settings' ? 'active': ''} />
          <SidebarItem name="Страница для тестирования" icon={faSpaghettiMonsterFlying} href='dashboard/testing' classes={currentPage=='testing' ? 'active': ''} />
        </ul>
        <div className={styles.empty_stretch + " "}></div>
        <div className={styles.logoutContainer + " mt-2"}>
          <SidebarItem name="Смена темы" icon={theme == 'light'? faSun: faMoon} action={changeTheme} />
          <SidebarItem name="Выход" icon={faSignOut} href="" action={logout} />
        </div>
    </div>
    
    </div>
  )
};
export default Sidebar;