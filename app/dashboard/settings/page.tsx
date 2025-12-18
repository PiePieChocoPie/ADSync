'use client'
import { useState, useEffect } from "react";
import apiAD from "@/utils/axios/api"; 

import styles from "./style.module.css";
import PageHeader from "@/components/molecule/PageHeader/page";
import Input from "@/components/atom/Input/page";
import Button from "@/components/atom/Button/page";

import { useTranslation } from 'react-i18next'; // Импортируем useTranslation

type AppConfigResponse = {
  ldapServer?: string;
  ldapPort?: string;
  ldapDomain?: string;
  searchBase?: string;
}

export default function Settings() {
  const [data, setData ] = useState<AppConfigResponse | null>(null);
  const [ldapServer, setLdapServer] = useState('');
  const [ldapPort, setLdapPort] = useState('');
  const [ldapDomain, setLdapDomain] = useState('');
  const [searchBase, setSearchBase] = useState('');

  // const fs = require('fs');
  // const path = require('path');
  // const filePath = path.join(__dirname, 'data.json');

  // function readConfig() {
  //   try {
  //     const rawData = fs.readFileSync(filePath, 'utf-8');
  //     const config = JSON.parse(rawData);
  //     return config;
  //   } catch (err) {
  //     console.error('Ошибка при чтении файла:', err);
  //     return null;
  //   }
  // }

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
    let data:AppConfigResponse = {};
    if (ldapServer) data['ldapServer'] = ldapServer;
    if (ldapPort) data['ldapPort'] = ldapPort;
    if (ldapDomain) data['ldapDomain'] = ldapDomain;
    if (searchBase) data['searchBase'] = searchBase;
    apiAD.patch('/UpdateAppConfig', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }).then(response => {
      console.log(response);
    }).catch(error => {
      console.error('Error fetching data:', error);
    })
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
          <Input defaultValue={`${data ? data?.ldapPort: ''}`} title={t('Customizing.port')} placeholder={t('Customizing.enterPort')} action ={(e) => setLdapPort(e.target.value)}/>
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