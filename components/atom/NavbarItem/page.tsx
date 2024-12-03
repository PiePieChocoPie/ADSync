import addClasses from "@/utils/scripts/style";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import styles from "./style.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from "next/link";


export default function NavbarItem(
  {name, icon, href, position='absolute', classes=''
}: {
  name: string, icon: IconProp, href?: string, position?: string, classes?: string,
}) {

  return(
    <Link href={`${href != undefined? '/'+href: ''}`}>
      <li className={`${styles.item} ${addClasses(styles, classes)}`}>
        <FontAwesomeIcon icon={icon} />
        <span className={`${position=='absolute'? 'absolute opacity-0': ''}`}>{name}</span>
      </li>
    </Link>
  )
}