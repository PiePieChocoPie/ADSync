import PageHeader from "@/components/molecule/PageHeader/page";
import EmployeeTable from "@/components/element/EmployeeTable/page";
import employeeQueue from "@/app/dashboard/queue/data"; // данные из предыдущего сообщения

export default function Queue() {
  return (
    <>
    <PageHeader>Очередь сотрудников</PageHeader>
    <EmployeeTable data={employeeQueue} />
    </>
  )
}


