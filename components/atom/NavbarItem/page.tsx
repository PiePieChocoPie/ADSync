import { IconProp } from "@fortawesome/fontawesome-svg-core";
import styles from "./style.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function NavbarItem({name, icon, position}: {name: string, icon: IconProp, position: string}) {
  return(
    <li className={styles.item}>
      <FontAwesomeIcon icon={icon} />
      <span className={`${position=='absolute'? 'absolute': ''}`}>{name}</span>
    </li>
  )
}