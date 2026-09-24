import { Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/Login'
import ResumoPage from '../pages/Resumo'
import MembrosPage from '../pages/Membros'
import EstatisticasPage from '../pages/Estatisticas'
import BatismosPage from '../pages/Batismos'
import ConfiguracoesPage from '../pages/Configuracoes'
import { ProtectedRoute } from './ProtectedRoute'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/painel" element={<ProtectedRoute />}>
        <Route index element={<Navigate to="resumo" replace />} />
        <Route path="resumo" element={<ResumoPage />} />
        <Route path="membros" element={<MembrosPage />} />
        <Route path="estatisticas" element={<EstatisticasPage />} />
        <Route path="batismos" element={<BatismosPage />} />
        <Route path="configuracoes" element={<ConfiguracoesPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
