import styles from "./style.module.css";
import Input from "@/components/atom/Input/page";
import Hr from "@/components/atom/Hr/page";
import MyButton from '@/components/atom/Button/page';




export default function Auth() {
    return (
        <div className={styles.container}>
            <h1>Вход</h1>
            <Hr width="80%"/>
            <p>Логин</p>
            <Input placeholder="Введите логин" />
            <p>Пароль</p>
            <Input type="password" placeholder="Введите пароль" />
            <h6 style={{alignSelf: "flex-end", marginTop: "1.4rem"}}>
                <MyButton type="submit">Отправить</MyButton>    
            </h6>
        </div>
    );
}