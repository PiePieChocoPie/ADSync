import styles from "./style.module.css";


export default function Button({
  title="Ок", type = "button", classes="", action,
}: {
  title: string, type?: "button" | "submit" | "reset", classes?:string, action?: () => void
}) {
    return (
        <button onClick={action} type={type} className={`${styles.item} ${classes}`}>
            {title}
        </button>
    );
}
