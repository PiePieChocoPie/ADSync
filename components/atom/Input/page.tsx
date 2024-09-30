import styles from "./style.module.css"

export default function Input({placeholder}: {placeholder: string}) {
    return(
        <>
            <input type="text" className={styles.item} placeholder={placeholder} />
        </>
    )
}