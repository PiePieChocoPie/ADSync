'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react';

import axios from 'axios';
import { setCookie } from 'cookies-next';
import { toBase64 } from '@/utils/scripts/main';

// import { useAuth } from "./AuthCosnt";
import styles from "./style.module.css";
import Input from "@/components/atom/Input/page";
import Hr from "@/components/atom/Hr/page";
import Button from '@/components/atom/Button/page';



export default function Auth() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = async () => {
    const credentials: string = `${username}:${password}`;
    const encodedCredentials = toBase64(credentials);

      await axios.get('http://server.adsync.com:12041/GetAppConfig/', {
        headers: {
          "Authorization": `Basic ${encodedCredentials}`,
          },
      }).then(response => {
          // save credentials in cookie
          setCookie('authCredentials', encodedCredentials, {path: '/', secure: true});
          if(response.status === 200) {
            router.push('/dashboard');
          }
      }).catch(error => {
        console.error('Error fetching data:', error);
      });
  }


    return (
        <div className={styles.container}>
            <h1>Вход</h1>
            <Hr width="100%" classes="mt-2 mb-6" />
            
            <Input title="Логин" placeholder="Введите логин" action={(e) => setUsername(e.target.value)}/>
            <Input title="Пароль" type="password" placeholder="Введите пароль"  action={(e) => setPassword(e.target.value)}/>
            <h6 className="w-min ms-auto">
                <Button type="submit" action={handleLogin}>Войти</Button>
            </h6>
        </div>
    );
}