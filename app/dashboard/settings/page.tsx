'use client'
import { useState, useEffect } from "react";
import apiAD from "@/utils/axios/api"; 

import styles from "./style.module.css";
import PageHeader from "@/components/molecule/PageHeader/page";
import Input from "@/components/atom/Input/page";
import Button from "@/components/atom/Button/page";

import { useTranslation } from 'react-i18next'; // Импортируем useTranslation

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

  const { t } = useTranslation(); // Используем useTranslation для получения переводов

  return (
    <div>
      <PageHeader>{t('Customizing.title')}</PageHeader>
      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>
          <Input defaultValue={`${data ? data?.ldapServer: ''}`} title={t('Customizing.ip')} placeholder={t('Customizing.enterIP')} action={(e) => setLdapServer(e.target.value)}/>
        </div>
        <div className={styles.gridItem}>
          <Input defaultValue="Сделай уже, а?!" title={t('Customizing.port')} placeholder={t('Customizing.enterPort')} />
        </div>
        <div className={styles.gridItem}>
          <Input defaultValue={`${data ? data?.searchBase: ''}`} title={t('Customizing.dc')} placeholder={t('Customizing.enterDC')} action={(e) => setSearchBase(e.target.value)}/>
        </div>
        <div className={styles.gridItem}>
          <Input defaultValue={`${data ? data?.ldapDomain: ''}`} title={t('Customizing.ldap')} placeholder={t('Customizing.enterLDAP')} action={(e) => setLdapDomain(e.target.value)}/>
        </div>
      </div>
      <div className="w-min mx-auto">
        <Button type="submit" action={saveAppConfig}>{t('Customizing.save')}</Button>
      </div>
    </div>
  )
}