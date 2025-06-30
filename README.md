# 🚀 CI/CD Pipeline - Patricia Saavedra

Este proyecto es una aplicación web simple en Node.js con Express que implementa un pipeline completo de CI/CD usando **GitHub Actions**.

## Tecnologías usadas

- Node.js (v18, v20, v22)
- Express
- Jest para testing
- GitHub Actions para CI/CD

## Estructura del proyecto

ci-cd-pipeline-patriciasaavedra/
.github/workflows/ci.yml
.github/workflows/deploy.yml
docs/manual.md
src/config.js
src/index.js
src/utils.js
tests/integration.test.js
tests/utils.test.js
.gitignore
README.md
eslint.config.js
package-lock.json
package.json


## Cómo ejecutar

1. Instalar dependencias:
   ```bash
   npm install
2. Ejecutar servidor:

npm start
3. Abrir en navegador:
http://localhost:3000/

4. Rutas principales
/ → Mensaje de bienvenida

/sumar?a=2&b=3 → Suma 2 + 3

/restar?a=5&b=2 → Resta 5 - 2

/multiplicar?a=3&b=4 → Multiplicación 3 * 4

/dividir?a=10&b=2 → División 10 / 2

## Ejecutar tests

npm test
