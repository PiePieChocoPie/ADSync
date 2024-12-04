import styles from "./style.module.css";

export default function Hr({
  width="1px", classes=""
} : {
    width: string,
    classes?: string
  }) {
    return (
        <div style={{width: width}} className={`${styles.hr} ${classes}`}></div>
    );
}