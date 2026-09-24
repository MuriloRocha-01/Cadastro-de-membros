import colors from 'tailwindcss/colors'
import forms from '@tailwindcss/forms'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './node_modules/@tremor/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: {
    colors: {
      tremor: { brand:{ faint:colors.amber[50], muted:colors.amber[200], subtle:colors.amber[400], DEFAULT:colors.amber[500], emphasis:colors.amber[700], inverted:colors.white }, background:{ muted:colors.stone[50], subtle:colors.stone[100], DEFAULT:colors.white, emphasis:colors.stone[700] }, border:{ DEFAULT:colors.stone[200] }, ring:{ DEFAULT:colors.stone[200] }, content:{ subtle:colors.stone[400], DEFAULT:colors.stone[500], emphasis:colors.stone[700], strong:colors.stone[900], inverted:colors.white } },
      'dark-tremor': { brand:{ faint:colors.stone[900], muted:colors.amber[950], subtle:colors.amber[800], DEFAULT:colors.amber[500], emphasis:colors.amber[400], inverted:colors.amber[950] }, background:{ muted:colors.stone[900], subtle:colors.stone[800], DEFAULT:colors.stone[900], emphasis:colors.stone[300] }, border:{ DEFAULT:colors.stone[800] }, ring:{ DEFAULT:colors.stone[800] }, content:{ subtle:colors.stone[600], DEFAULT:colors.stone[500], emphasis:colors.stone[200], strong:colors.stone[50], inverted:colors.stone[950] } },
    },
    boxShadow:{ 'tremor-card':'0 1px 3px rgb(0 0 0 / .1)', 'tremor-dropdown':'0 4px 6px rgb(0 0 0 / .1)' },
    borderRadius:{ 'tremor-small':'0.375rem', 'tremor-default':'0.5rem', 'tremor-full':'9999px' },
    fontSize:{ 'tremor-label':['0.75rem',{lineHeight:'1rem'}], 'tremor-default':['0.875rem',{lineHeight:'1.25rem'}], 'tremor-title':['1.125rem',{lineHeight:'1.75rem'}], 'tremor-metric':['1.875rem',{lineHeight:'2.25rem'}] },
  } },
  safelist: [{ pattern:/^(bg|text|border|ring|stroke|fill)-(amber|emerald|rose|blue|gray|stone)-(50|100|200|300|400|500|600|700|800|900|950)$/ }],
  plugins: [forms],
}
