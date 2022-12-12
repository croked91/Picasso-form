import React, { FC, PropsWithChildren } from 'react'
import s from './styles.module.css'

export const Container:FC<PropsWithChildren> = ({children}) => {
  return (
    <div className={s.container}>
      {children}
    </div>
  )
}
