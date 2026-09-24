import express from 'express';

const app = express();
const port = Number(process.env.PORT ?? 3001);

app.use(express.json());
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', message: 'Backend conectado com sucesso.' });
});
app.get('/api/membros', (_req, res) => {
  res.json([]);
});

app.listen(port, '127.0.0.1', () => {
  console.log('Backend disponível em http://localhost:' + port);
});
