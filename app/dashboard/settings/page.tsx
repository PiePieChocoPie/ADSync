import PageHeader from "@/components/molecule/PageHeader/page";
import Input from "@/components/atom/Input/page";

export default function Settings() {
  return (
    <div>
      <PageHeader title="Настройки" />
      <Input title="IP-адрес" placeholder="Введите IP-адрес" />
    </div>
  )
}