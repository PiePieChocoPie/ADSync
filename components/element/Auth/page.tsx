import styles from "./style.module.css";
import Input from "@/components/atom/Input/page";
import Hr from "@/components/atom/Hr/page";

export default function Auth() {
    return (
        <div className={styles.container}>
            <h1>Вход</h1>
            <Hr width="80%"/>
            <p>Логин</p>
            <Input placeholder="Введите логин" />
            <p>Пароль</p>
            <Input type="password" placeholder="Введите пароль" />
            <h6 style={{alignSelf: "flex-end", marginTop: "1.4rem"}}>КНОПОЧКА 🥰</h6>
        </div>
    );
}