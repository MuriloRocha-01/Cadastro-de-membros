import { useState } from 'react'
import type { FormEvent } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Eye, EyeOff, LockKeyhole, Mail, ShieldCheck } from 'lucide-react'
import { obterToken } from '../../services/auth'

const API_URL = import.meta.env.VITE_API_URL ?? '/api'

export default function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [mostrar, setMostrar] = useState(false)
  const [erro, setErro] = useState('')
  const [carregando, setCarregando] = useState(false)

  async function entrar(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (import.meta.env.DEV) { sessionStorage.setItem('admin-token', 'visualizacao-local'); navigate('/painel/resumo'); return }
    setCarregando(true); setErro('')
    try {
      const response = await fetch(`${API_URL}/auth/login`, { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({ email, senha }) })
      if (!response.ok) throw new Error('E-mail ou senha incorretos.')
      const resposta = await response.json() as { token?: string }
      if (!resposta.token) throw new Error('O servidor não retornou uma sessão válida.')
      sessionStorage.setItem('admin-token', resposta.token); navigate('/painel/resumo')
    } catch (error) { setErro(error instanceof Error ? error.message : 'Não foi possível entrar.') }
    finally { setCarregando(false) }
  }

  if (obterToken()) return <Navigate to="/painel/resumo" replace />
  return <main className="login-page"><header className="login-header"><a className="brand" href="/">Igreja App<span>.</span></a><div className="support"><span>Precisa de ajuda?</span><a href="mailto:suporte@igreja.com">Fale conosco</a></div></header><div className="dots" aria-hidden="true">●　●<br/>　●<br/>●　●<br/>　●</div><div className="left-art" aria-hidden="true"><div/><span>↗</span></div><div className="right-art" aria-hidden="true"><span className="head"/><span className="body"/><span className="laptop">⌁</span></div><section className="login-card"><div className="lock"><ShieldCheck size={18} /></div><p className="eyebrow">ÁREA RESTRITA</p><h1>Acesso administrativo</h1><p className="subtitle">Entre com a conta cadastrada para gerenciar os membros.</p><form onSubmit={entrar}><label htmlFor="email">E-mail</label><div className="field"><Mail size={14} /><input id="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="seu@email.com" required={!import.meta.env.DEV}/></div><label htmlFor="senha">Senha</label><div className="field"><LockKeyhole size={14} /><input id="senha" type={mostrar?'text':'password'} value={senha} onChange={(e)=>setSenha(e.target.value)} placeholder="Digite sua senha" required={!import.meta.env.DEV}/><button type="button" onClick={()=>setMostrar(!mostrar)} aria-label={mostrar?'Ocultar senha':'Mostrar senha'}>{mostrar?<EyeOff size={15}/>:<Eye size={15}/>}</button></div>{erro&&<p className="error">{erro}</p>}<div className="form-links"><span>Acesso exclusivo para administradores</span><a href="mailto:suporte@igreja.com">Esqueci minha senha</a></div><button className="primary" disabled={carregando}>{carregando?'Entrando...':'Entrar no painel'}</button></form></section><footer>© 2026 Igreja App · Privacidade e segurança</footer></main>
}



