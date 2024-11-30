'use client'
import styles from "./style.module.css";
import Input from "@/components/atom/Input/page";
import Hr from "@/components/atom/Hr/page";
import Button from '@/components/atom/Button/page';
import { useRouter } from 'next/navigation'



export default function Auth() {
  const router = useRouter();

  const test = () => {
    let is_authenticated: boolean = true;
    if (is_authenticated) {
      console.log('authenticated')
      router.push('/dashboard');
    }
  }
    return (
        <div className={styles.container}>
            <h1>Вход</h1>
            <Hr width="100%" classes="mt-2 mb-6" />
            
            <Input title="Логин" placeholder="Введите логин" />
            <Input title="Пароль" type="password" placeholder="Введите пароль" />
            <h6 className="w-min ms-auto">
                <Button title="Войти"type="submit" action={test} />
            </h6>
        </div>
    );
}