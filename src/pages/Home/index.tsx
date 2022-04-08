import React, { useState, useEffect } from 'react'

import './style.css'

import { Card, CardProps } from '../../components/Card'

interface APIResponse {
  name: string
  avatar_url: string
}

interface User {
  name: string
  avatar: string
}

export function Home() {
  const [studentName, setStudentName] = useState('')
  const [students, setStudents] = useState<CardProps[]>([])
  const [user, setUser] = useState<User>({} as User)

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    }
    setStudents(prevState => [...prevState, newStudent])
  }

  useEffect(() => {
    async function fechData() {
      const response = await fetch(
        'https://api.github.com/users/jaoribeiro-0211'
      )
      const data = (await response.json()) as APIResponse
      setUser({
        name: data.name,
        avatar: data.avatar_url
      })
    }
    fechData()
  }, [students])

  return (
    <div className="container">
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de Perfil" />
        </div>
      </header>

      <input
        type="text"
        placeholder="Digite o nome..."
        onChange={e => setStudentName(e.target.value)}
      />
      <button onClick={handleAddStudent} type="button">
        Adicionar
      </button>

      {students.map(student => (
        <Card key={student.time} name={student.name} time={student.time} />
      ))}
    </div>
  )
}
