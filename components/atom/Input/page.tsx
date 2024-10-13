import styles from "./style.module.css"

export default function Input({placeholder, type = "text"} : {placeholder: string, type?: string}) {
    return(
        <>
            <input type={type} className={styles.item} placeholder={placeholder} />
        </>
    )
}