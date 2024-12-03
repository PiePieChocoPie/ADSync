import styles from "./style.module.css";

export default function Header({children}: {children: React.ReactNode}) {
  return(
    <div className={styles.container}>{children}</div>
  )
}