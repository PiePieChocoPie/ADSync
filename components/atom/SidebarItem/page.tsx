import addClasses from "@/utils/scripts/style";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import styles from "./style.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from "next/link";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { useTranslation } from 'react-i18next'; // Импортируем useTranslation

type sidebarItemProps = {
  name: string,
  icon?: IconProp,
  img?: StaticImageData,
  href?: string,
  position?: string,
  classes?: string,
  action?: () => void
};

export default function SidebarItem(
  {name, icon=undefined, href=undefined, img=undefined, position='absolute', classes='', action
}: sidebarItemProps) {

  return(
    <Link onClick={action} href={`${href != undefined? '/'+href: ''}`}>
      <li className={`${styles.item} ${addClasses(styles, classes)}`}>
        {icon && <FontAwesomeIcon icon={icon} />}
        {img && <Image className={styles.img} src={img} alt={name} />}
        <span className={`${position=='absolute'? 'absolute opacity-0': ''}`}>{name}</span>
      </li>
    </Link>
  )
}