import style from "./style.module.css"
import Spinner from "@/components/atom/Spinner/page"

type LoadingProps = {
  blockWindow?: boolean;
}

export default function Loading(
  {blockWindow = true}
  : LoadingProps) 
{
  return(
    <div className={`${style.container} ${!blockWindow && style.pointerEventNone}`}>
      <div className={style.spinner}>
        <Spinner />
      </div>
    </div>
  )
}