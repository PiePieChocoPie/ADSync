import { IconProp } from "@fortawesome/fontawesome-svg-core";
import styles from "./style.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function NavbarItem({name, icon}: {name: string, icon: IconProp}) {
  return(
    <li className={styles.item}>
      <FontAwesomeIcon icon={icon} />
      <span>{name}</span>
    </li>
  )
}