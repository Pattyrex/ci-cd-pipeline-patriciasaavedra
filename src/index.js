import express from 'express';
import { suma, resta, multiplicar, dividir } from './utils.js';
import config from './config.js';

const app = express();
const port = config.port;

app.use(express.json());

app.get('/', (req, res) => res.send('Bienvenido a la API CI/CD de PattyRex'));

app.get('/sumar', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  if (isNaN(a) || isNaN(b)) return res.status(400).send('Parámetros inválidos');
  res.send(`Resultado: ${suma(a, b)}`);
});

app.get('/restar', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  if (isNaN(a) || isNaN(b)) return res.status(400).send('Parámetros inválidos');
  res.send(`Resultado: ${resta(a, b)}`);
});

app.get('/multiplicar', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  if (isNaN(a) || isNaN(b)) return res.status(400).send('Parámetros inválidos');
  res.send(`Resultado: ${multiplicar(a, b)}`);
});

app.get('/dividir', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  if (isNaN(a) || isNaN(b)) return res.status(400).send('Parámetros inválidos');
  try {
    res.send(`Resultado: ${dividir(a, b)}`);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.get('/error', (req, res) => res.status(500).send('Error simulado'));

app.listen(port, () => console.log(`Servidor activo en puerto ${port}`));

export default app;
