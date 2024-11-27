import styles from "./style.module.css";

export default function Hr({width} : {width: string}) {
    return (
        <div style={{width: width}} className={styles.hr}></div>
    );
}