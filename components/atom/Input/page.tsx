import addClasses from "@/utils/scripts/style";
import styles from "./style.module.css"
import { useId } from "react"

type InputProps = {
  defaultValue?: string,
  placeholder?: string,
  title?:string,
  type?: string,
  classes?: string,
  action?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input({
  defaultValue, placeholder, title, type="text", classes="", action
} : InputProps) {
    const id = useId();
    return(
        <>
          <label className="mb-0 w-min" htmlFor={`${type}-${id}`}>{title}</label>
          <input defaultValue={defaultValue} onChange={action} type={type} className={`${styles.item} ${addClasses(styles, classes)}`} placeholder={placeholder} id={`${type}-${id}`}/>
        </>
    )
}