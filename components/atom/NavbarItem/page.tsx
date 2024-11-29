import { IconProp } from "@fortawesome/fontawesome-svg-core";
import styles from "./style.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from "next/link";

export default function NavbarItem({name, icon, href, position='absolute'}: {name: string, icon: IconProp, href?: string, position?: string}) {
  return(
    <Link href={`${href != undefined? '/'+href: ''}`}>
      <li className={styles.item}>
        <FontAwesomeIcon icon={icon} />
        <span className={`${position=='absolute'? 'absolute opacity-0': ''}`}>{name}</span>
      
      </li>
    </Link>
  )
}