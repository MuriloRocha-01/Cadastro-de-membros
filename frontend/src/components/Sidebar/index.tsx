import { NavLink, useNavigate } from 'react-router-dom'
import { CalendarDays, ChartNoAxesCombined, Church, Droplets, House, LogOut, Settings, Users } from 'lucide-react'
import { removerToken } from '../../services/auth'

const itens = [
  [House, 'Visão geral', 'resumo'],
  [Users, 'Membros', 'membros'],
  [ChartNoAxesCombined, 'Estatísticas', 'estatisticas'],
  [Droplets, 'Batismos', 'batismos'],
  [Settings, 'Configurações', 'configuracoes'],
]

export function Sidebar() {
  const navigate = useNavigate()
  const hoje = new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })

  function sair() {
    removerToken()
    navigate('/')
  }

  return (
    <aside>
      <NavLink className="brand church-brand" to="/painel/resumo"><span className="brand-mark"><Church size={15} /></span><span className="brand-name">Igreja App</span></NavLink>
      <nav>{itens.map(([Icone, nome, rota]) => <NavLink key={rota as string} to={`/painel/${rota}`}><i><Icone size={15} strokeWidth={1.8} /></i><span>{nome}</span></NavLink>)}</nav>
      <div className="admin-profile"><div className="avatar">SC</div><strong>Secretaria</strong><small>Acesso administrativo</small></div>
      <div className="sidebar-date"><CalendarDays size={13} /><span>{hoje}</span></div>
      <button className="logout" onClick={sair}><LogOut size={14} /><span>Sair</span></button>
    </aside>
  )
}
