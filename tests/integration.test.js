import request from 'supertest';
import app from '../src/index.js';

describe('Test de rutas API', () => {
  test('GET / debe responder con mensaje de bienvenida', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Bienvenido a la API CI/CD de PattyRex');
  });

  test('GET /sumar?a=4&b=6 debe devolver resultado correcto', async () => {
    const res = await request(app).get('/sumar?a=4&b=6');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Resultado: 10');
  });

  test('GET /restar?a=8&b=3 debe devolver resultado correcto', async () => {
    const res = await request(app).get('/restar?a=8&b=3');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Resultado: 5');
  });

  test('GET /multiplicar?a=5&b=5 debe devolver resultado correcto', async () => {
    const res = await request(app).get('/multiplicar?a=5&b=5');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Resultado: 25');
  });

  test('GET /dividir?a=9&b=3 debe devolver resultado correcto', async () => {
    const res = await request(app).get('/dividir?a=9&b=3');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Resultado: 3');
  });

  test('GET /dividir?a=9&b=0 debe devolver error 400', async () => {
    const res = await request(app).get('/dividir?a=9&b=0');
    expect(res.statusCode).toBe(400);
    expect(res.text).toBe('División por cero');
  });

  test('GET /sumar con parámetros inválidos devuelve 400', async () => {
    const res = await request(app).get('/sumar?a=x&b=y');
    expect(res.statusCode).toBe(400);
    expect(res.text).toBe('Parámetros inválidos');
  });

  test('GET /error devuelve error 500', async () => {
    const res = await request(app).get('/error');
    expect(res.statusCode).toBe(500);
    expect(res.text).toBe('Error simulado');
  });
});
