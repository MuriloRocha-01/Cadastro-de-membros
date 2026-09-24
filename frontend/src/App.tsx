import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [status, setStatus] = useState('Conectando ao backend…')

  useEffect(() => {
    const controller = new AbortController()
    fetch('/api/health', { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error('Erro de conexão')
        return response.json() as Promise<{ message: string }>
      })
      .then((data) => setStatus(data.message))
      .catch(() => {
        if (!controller.signal.aborted) setStatus('Backend indisponível. Inicie o projeto com npm run dev.')
      })
    return () => controller.abort()
  }, [])

  return (
    <main>
      <span className="label">PROJETO DADOS MEMBROS</span>
      <h1>Seu projeto começa aqui.</h1>
      <p>React + TypeScript no frontend e Node.js + Express no backend.</p>
      <div className="status" role="status">{status}</div>
      <section>
        <h2>Membros</h2>
        <p>A estrutura está pronta para desenvolver o cadastro e a consulta de membros.</p>
      </section>
    </main>
  )
}

export default App
