import addClasses from "@/scripts/style";
import styles from "./style.module.css"
import { useId } from "react"

export default function Input({
  placeholder, title, type="text", classes=""
} : {
  placeholder?: string, title?:string, type?: string, classes?: string
}) {
    const id = useId();
    return(
        <>
          <label className="mb-0" htmlFor={`${type}-${id}`}>{title}</label>
          <input type={type} className={`${styles.item} ${addClasses(styles, classes)}`} placeholder={placeholder} id={`${type}-${id}`}/>
        </>
    )
}