import { Navigate } from 'react-router-dom'
import { DashboardLayout } from '../layouts/DashboardLayout'
import { obterToken } from '../services/auth'

export function ProtectedRoute() {
  return obterToken() ? <DashboardLayout /> : <Navigate to="/" replace />
}
