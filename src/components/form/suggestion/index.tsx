import { FC } from 'react'
import { ISuggestion } from './interface'
import s from './styles.module.css'

export const Suggestion:FC<ISuggestion> = ({domain, name, logo, onClick}) => {
  return (
    <div onClick={onClick} className={s.suggestion}>
      <img src={logo} className={s.suggestion__logo} alt="logo"/>
      <div className={s.suggestion__company}>
        <h2 className={s.suggestion__title}>{name}</h2>
        <p className={s.suggestion__domain}>{domain}</p>
      </div>
    </div>
  )
}
