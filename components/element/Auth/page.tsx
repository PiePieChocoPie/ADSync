'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserLock } from '@fortawesome/free-solid-svg-icons';
import { faEarth } from '@fortawesome/free-solid-svg-icons/faEarth';
import { useRouter } from 'next/navigation'
import { useState } from 'react';

import axios from 'axios';
import { setCookie } from 'cookies-next';
import { toBase64 } from '@/utils/scripts/main';

import styles from "./style.module.css";
import Input from "@/components/atom/Input/page";
import Hr from "@/components/atom/Hr/page";
import Button from '@/components/atom/Button/page';
import Loading from '@/components/molecule/Loading/page';



export default function Auth() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<number|null>(null)


  const handleLogin = async () => {
    setLoading(true);
    const credentials: string = `${username}:${password}`;
    const encodedCredentials = toBase64(credentials);

      await axios.get('http://server.adsync.com:12041/Authentication/', {
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
        console.log(error)
        if (error.request.status === 401) setError(401);
        else if (error.request.status === 500) setError(500);
        else if (error.request.status === 0) setError(0);
        console.error('Error fetching data:', error);
      }).finally(() => {
        setLoading(false);
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


          {error!== null && 
            <span className={`${styles.error} mt-4`}>
              {(error === 0 || error === 500) && 
                <FontAwesomeIcon icon={faEarth} />
              }
              {error === 401 && 
                <FontAwesomeIcon icon={faUserLock} />
              }
              <span className={`${styles.errorMsg} ms-2`}>
                {error === 0 && "Внутренняя ошибка сервера. Сервер не отвечает"}
                {error === 401 && "Неправильно указан логин или пароль."}
                {error === 500 && "Внутренняя ошибка сервера. Проблема с запросом на сервер"}
              </span>
            </span>
          }

          {loading && <Loading />}
      </div>
    );
}