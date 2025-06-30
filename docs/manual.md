Autora
Patricia Emilia Saavedra Marca
Ingeniería de Sistemas - UATF

---

## manual.md

```markdown
# Manual para ejecutar y probar el proyecto CI/CD Pipeline

## 1. Clonar repositorio

```bash
git clone https://github.com/tu_usuario/ci-cd-pipeline-patriciasaavedra.git
cd ci-cd-pipeline-patriciasaavedra
2. Instalar dependencias

npm install
3. Ejecutar servidor

npm start
El servidor arrancará en el puerto 3000.

4. Probar rutas
Puedes usar navegador o curl:

Bienvenida
http://localhost:3000/

Sumar
http://localhost:3000/sumar?a=5&b=7

Restar
http://localhost:3000/restar?a=10&b=4

Multiplicar
http://localhost:3000/multiplicar?a=3&b=3

Dividir
http://localhost:3000/dividir?a=20&b=5

5. Ejecutar tests

npm test
Verás que se ejecutan tests unitarios y de integración.

6. Verificar pipeline en GitHub Actions
Ve a la pestaña Actions en tu repositorio GitHub.

Revisa que los tests corran en Node 18, 20 y 22.

Verifica que se creen artifacts.

Asegúrate que el pipeline se ejecute solo en la rama main.

Si tienes dudas o errores, revisa las rutas relativas en los imports, que la estructura del proyecto sea correcta y que package.json tenga "type": "module" para usar import/export.

Contacto
Patricia Emilia Saavedra Marca
Ingeniería de Sistemas - UATF