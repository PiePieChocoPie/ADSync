import styles from "./style.module.css";

export default function Header({title}: {title: string}) {
  return(
    <div className={styles.container}>{title}</div>
  )
}