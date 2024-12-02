import styles from "./style.module.css";
import PageHeader from "@/components/molecule/PageHeader/page";
import Input from "@/components/atom/Input/page";


function toBase64(str: string) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (_, p1) =>
    String.fromCharCode(parseInt(p1, 16))
  ));
}

const getAppConfig = async () => {
  let response = await fetch('http://server.adsync.com:12040/GetAppConfig', {
    method: "GET",
    headers: {
      "Authorization": `Basic ${toBase64(`${'Администратор'}:${'aA1'}`)}`
    },
  })
  let data = await response.json();
  return data
}

export default async function Settings() {
  let data = await getAppConfig();
  console.log(data);
  return (
    <div>
      <PageHeader title="Настройки" />
      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>
          <Input title="IP-адрес" placeholder="Введите IP-адрес" />
        </div>
        <div className={styles.gridItem}>
          <Input title="Порт" placeholder="Введите Порт" />
        </div>
        <div className={styles.gridItem}>
          <Input title="Полный DC для поиска" placeholder="DC=adsync, DC=com" />
        </div>
        <div className={styles.gridItem}>
          <Input title="Домен LDAP" placeholder="adsync" />
        </div>
      </div>
    </div>
  )
}