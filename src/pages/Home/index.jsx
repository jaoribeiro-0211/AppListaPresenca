import React, { useState } from 'react'

import './style.css'

import { Card } from '../../components/Card'

export function Home() {
  const [studentName, setStudentName] = useState('')

  return (
    <div className="container">
      <h1>Lista de:{studentName}</h1>
      <input
        type="text"
        placeholder="Digite o nome..."
        onChange={e => setStudentName(e.target.value)}
      />
      <button type="button">Adicionar</button>

      <Card name="Joao" time="10:55:25" />
      <Card name="Rodrigo" time="11:30:25" />
    </div>
  )
}
