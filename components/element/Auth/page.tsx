'use client'
import styles from "./style.module.css";
import Input from "@/components/atom/Input/page";
import Hr from "@/components/atom/Hr/page";
import Button from '@/components/atom/Button/page';




export default function Auth() {
  const test = () => {
    console.log(12)
  }
    return (
        <div className={styles.container}>
            <h1>Вход</h1>
            <Hr width="80%"/>
            
            <Input title="Логин" placeholder="Введите логин" />
            <Input title="Пароль" type="password" placeholder="Введите пароль" />
            <h6 style={{alignSelf: "flex-end", marginTop: "1.4rem"}}>
                <Button type="submit" action={test}>Войти</Button>    
            </h6>
        </div>
    );
}