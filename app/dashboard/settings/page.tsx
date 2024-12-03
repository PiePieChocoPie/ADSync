'use client'
import { useState, useEffect } from "react";
import apiAD from "@/utils/axios/api"; 

import styles from "./style.module.css";
import PageHeader from "@/components/molecule/PageHeader/page";
import Input from "@/components/atom/Input/page";
import Button from "@/components/atom/Button/page";

type AppConfigResponse = {
  ldapServer: string;
  ldapDomain: string;
  searchBase: string;
}

export default function Settings() {
  const [data, setData ] = useState<AppConfigResponse | null>(null);
  const [ldapServer, setLdapServer] = useState('');
  const [ldapDomain, setLdapDomain] = useState('');
  const [searchBase, setSearchBase] = useState('');

  const getAppConfig = () => {
    console.log('new response to getAppConfig');
    apiAD.get('/GetAppConfig')
      .then(response => {
      setData(response.data);
    }).catch(error => {
      console.error('Error fetching data:', error);
    })
  }

  const saveAppConfig = () => {
    console.log('saving app config');
    console.log(ldapServer, ldapDomain, searchBase);
  }

  useEffect(() => { 
    getAppConfig();
  }, [])

  return (
    <div>
      <PageHeader>Настройки</PageHeader>
      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>
          <Input defaultValue={`${data ? data?.ldapServer: ''}`} title="IP-адрес" placeholder="Введите IP-адрес" action={(e) => setLdapServer(e.target.value)}/>
        </div>
        <div className={styles.gridItem}>
          <Input defaultValue="Сделай уже, а?!" title="Порт" placeholder="Введите Порт" />
        </div>
        <div className={styles.gridItem}>
          <Input defaultValue={`${data ? data?.searchBase: ''}`} title="Полный DC для поиска" placeholder="DC=adsync, DC=com" action={(e) => setSearchBase(e.target.value)}/>
        </div>
        <div className={styles.gridItem}>
          <Input defaultValue={`${data ? data?.ldapDomain: ''}`} title="Домен LDAP" placeholder="adsync" action={(e) => setLdapDomain(e.target.value)}/>
        </div>
      </div>
      <div className="w-min mx-auto">
        <Button type="submit" action={saveAppConfig}>Сохранить</Button>
      </div>
    </div>
  )
}