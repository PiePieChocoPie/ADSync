import styles from "./style.module.css";


export default function Button({ children, type = "button" }: {children: React.ReactNode, type?: "button" | "submit" | "reset"}) {
    return (
        <button type={type} className={styles.item}>
            {children}
        </button>
    );
}
