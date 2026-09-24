import { useState } from 'react'
import { BarChart, DonutChart } from '@tremor/react'
import { PageHeader } from '../../components/PageHeader'
import { membrosIniciais } from '../../data/membros'
import type { Membro } from '../../types/membro'
import { formatarData, percentual } from '../../utils/formatters'

export default function ResumoPage() {
  const [busca,setBusca]=useState('')
  const membros=membrosIniciais.filter(m=>`${m.nome} ${m.telefone}`.toLowerCase().includes(busca.toLowerCase()))
  const ativos=membrosIniciais.filter(m=>m.status==='Ativo').length, batizados=membrosIniciais.filter(m=>m.batizado).length
  const casados=percentual(membrosIniciais.filter(m=>m.estadoCivil==='Casado').length,membrosIniciais.length), solteiros=percentual(membrosIniciais.filter(m=>m.estadoCivil==='Solteiro').length,membrosIniciais.length)
  return <><PageHeader titulo="Dashboard" subtitulo="Bem-vindo(a) de volta, Pr. Carlos" busca={busca} setBusca={setBusca}/><div className="church-dashboard-grid"><section className="members-panel recent-members"><div className="panel-heading"><div><h2>Últimos cadastros</h2><p>Membros adicionados recentemente</p></div></div><TabelaResumo membros={membros}/></section><section className="status-panel civil-panel"><div className="panel-heading"><div><h2>Estado civil e família</h2><p>Distribuição dos membros</p></div></div>{[['Casados',casados],['Solteiros',solteiros],['Outros / Viúvos',100-casados-solteiros]].map(([nome,valor])=><div className="progress-item" key={nome}><div><span>{nome}</span><strong>{valor}%</strong></div><i><b style={{width:`${valor}%`}}/></i></div>)}</section><div className="metric-pair"><section className="metric-card"><div><span>Usuários ativos</span><strong>{ativos}</strong><small>+12 novos este mês</small></div><div className="mini-bars"><i/><i/><i/><i/></div></section><section className="metric-card"><div><span>Batizados</span><strong>{batizados}</strong><small>{membrosIniciais.length-batizados} ainda não batizado</small></div><div className="baptism-bars"><i/><i/></div></section></div><section className="baptism-card"><span>Membros batizados</span><DonutChart className="tremor-donut" data={[{nome:'Batizados',valor:batizados},{nome:'Não batizados',valor:membrosIniciais.length-batizados}]} category="valor" index="nome" colors={['emerald','rose']} showAnimation showLabel label={`${percentual(batizados,membrosIniciais.length)}%`}/><small>do total de membros</small></section><section className="chart-panel monthly-chart"><div><span>Novas entradas</span><strong>{membrosIniciais.length}</strong><small>↗ fluxo mensal</small></div><GraficoBarras/></section></div></>
}

function TabelaResumo({ membros }:{ membros:Membro[] }) {
  return <div className="table-wrap"><table><thead><tr><th>Membro</th><th>Entrada</th><th>Batismo</th><th>Status</th></tr></thead><tbody>{membros.slice(0,5).map(m=><tr key={m.id}><td><div className="member"><b>{m.nome.split(' ').map(p=>p[0]).join('').slice(0,2)}</b><div><strong>{m.nome}</strong><span>{m.telefone}</span></div></div></td><td>{formatarData(m.createdAt)}</td><td><span className={`badge ${m.batizado?'ativo':'pendente'}`}>{m.batizado?'Batizado':'Não batizado'}</span></td><td><span className={`badge ${m.status?.toLowerCase()}`}>{m.status}</span></td></tr>)}</tbody></table>{!membros.length&&<p className="state">Nenhum membro encontrado.</p>}</div>
}

function GraficoBarras(){return <BarChart className="tremor-chart" data={[{mes:'Jan',Entradas:3},{mes:'Fev',Entradas:5},{mes:'Mar',Entradas:4},{mes:'Abr',Entradas:7},{mes:'Mai',Entradas:6},{mes:'Jun',Entradas:9}]} index="mes" categories={['Entradas']} colors={['amber']} showLegend={false} showAnimation yAxisWidth={24}/>}

