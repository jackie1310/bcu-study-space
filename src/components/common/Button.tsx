import { ButtonModel } from '@/Interface'
import React from 'react'

export default function Button({btnClass, title, onClick} : ButtonModel) {
  return (
    <button onClick={onClick} className={`btn ${btnClass}`}>{title}</button>
  )
}
