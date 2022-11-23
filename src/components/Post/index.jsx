import React, {useContext} from 'react'
import s from './index.module.css'
import { Context } from '../../context'
export default function Post({id, title, text, like}) {
    const {change_like} = useContext(Context)
    const like_msg = like ? 'Liked' : 'Like?'
    const like_style = [s.like, like ? s.like_active : ''].join(' ')
  return (
    <div className = {s.container}>
        <p>{title}</p>
        <p>{text}</p>
        <p className = {like_style} onClick = {() => change_like(id)}>{like_msg}</p>
    </div>
  )
}
