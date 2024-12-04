'use client'
import { useEffect } from 'react'
import style from "./style.module.css"
import Spinner from "@/components/atom/Spinner/page"

type LoadingProps = {
  blockWindow?: boolean;
}

export default function Loading(
  {blockWindow = true}
  : LoadingProps) 
  {
  
  useEffect(() => {
    const container = document.querySelector(`.${style.container}`) as HTMLDivElement;
    const spinner = document.querySelector(`.${style.spinner}`) as HTMLDivElement;
    if (!container) return;
    if (!spinner) return;
    // container.style.backgroundColor = "rgba(0, 0, 0, 0)";
    // spinner.style.opacity = 0;
    setTimeout(() => {
      container.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
      spinner.style.opacity = '1';
    }, 0);
  }, []);
  return(
    <div className={`${style.container} ${!blockWindow && style.pointerEventNone}`}>
      <div className={style.spinner}>
        <Spinner />
      </div>
    </div>
  )
}