import addClasses from "@/utils/scripts/style";
import styles from "./style.module.css";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  classes?: string;
  action?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
};

export default function Button({
  type = "button",
  classes = "",
  action,
  children,
}: ButtonProps) {
  return (
    <button
      onClick={action || undefined}
      type={type}
      className={`${styles.item} ${addClasses(styles, classes)}`}
    >
      {children}
    </button>
  );
}
