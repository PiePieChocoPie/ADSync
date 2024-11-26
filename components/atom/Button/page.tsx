import styles from "./style.module.css";


export default function Button({
  children, type = "button", action
}: {
  children: React.ReactNode, type?: "button" | "submit" | "reset", action?: () => void
}) {
    return (
        <button onClick={action} type={type} className={`${styles.item}`}>
            {children}
        </button>
    );
}
