import PageHeader from "@/components/molecule/PageHeader/page";
import Loading from "@/components/molecule/Loading/page";
export default function Testing() {
  return (
    <>
      <PageHeader>Страница для тестирования</PageHeader>
      <div>
        <Loading blockWindow={false} />
      </div>
    </>
  )
}