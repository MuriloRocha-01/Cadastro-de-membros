export const percentual = (parte: number, total: number) => total ? Math.round((parte / total) * 100) : 0

export const formatarData = (valor?: string) => valor
  ? new Date(`${valor}T12:00:00`).toLocaleDateString('pt-BR')
  : 'Não informado'
