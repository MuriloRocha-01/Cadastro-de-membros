import type { ReactNode } from 'react'
import { Search, X } from 'lucide-react'

type PageHeaderProps = {
  titulo: string
  subtitulo: string
  busca?: string
  setBusca?: (valor: string) => void
  acao?: ReactNode
}

export function PageHeader({ titulo, subtitulo, busca, setBusca, acao }: PageHeaderProps) {
  return (
    <header className="dashboard-header">
      <div><h1>{titulo}</h1><p>{subtitulo}</p></div>
      <div className="header-actions">
        {setBusca && <div className="search top-search"><input aria-label="Buscar por nome ou celular" type="search" value={busca} onChange={(event) => setBusca(event.target.value)} placeholder="Buscar por nome ou celular..." />{busca && <button type="button" className="search-clear" onClick={() => setBusca('')} aria-label="Limpar busca"><X size={18} /></button>}<i aria-hidden="true" /><Search className="search-icon" size={20} aria-hidden="true" /></div>}
        {acao}
      </div>
    </header>
  )
}
