import PageHeader from "@/components/molecule/PageHeader/page";
import PolicyTable from "@/components/element/PolicyTable/page";

export default function Policy() {
  return (
    <>
    <PageHeader>Политика конфиденциальности</PageHeader>
    <p className="mb-6">
      Ниже приведена таблица доступа пользователей к корпоративным системам.
    </p>
      <PolicyTable />
    </>
  )
}