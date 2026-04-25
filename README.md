# 🚀 Práctica de Base de Datos y Git

Este proyecto es una demostración de cómo integrar una base de datos **SQLite** con **Node.js** y manejar el control de versiones de forma profesional.

## 🛠️ Tecnologías
- **Backend:** Node.js + Express
- **Base de Datos:** SQLite3 (ligera y embebida)
- **Frontend:** HTML5, CSS3 (Glassmorphism), JavaScript Vanilla

---

## 👨‍💻 Instrucciones para el Colaborador (Pull)

Si acabas de hacer un `git pull` o `git clone`, sigue estos pasos para que el proyecto funcione en tu máquina:

1. **Instalar dependencias:**
   Ejecuta el siguiente comando en la terminal para descargar `express`, `sqlite3` y demás librerías necesarias (que no se suben al repo por estar en `.gitignore`):
   ```bash
   npm install
   ```

2. **Iniciar el servidor:**
   Ejecuta el comando de inicio:
   ```bash
   npm start
   ```
   *El servidor creará automáticamente el archivo `database.sqlite` si no existe.*

3. **Ver la web:**
   Abre tu navegador en [http://localhost:3000](http://localhost:3000)

---

## 📋 Conceptos Clave de Control de Versiones

### ¿Por qué ignoramos `node_modules`?
Porque es una carpeta muy pesada. Al compartir el `package.json`, cualquier persona puede reconstruir esa carpeta con `npm install`.

### ¿Por qué ignoramos `database.sqlite`?
En proyectos reales, la base de datos local contiene datos de prueba que no queremos "ensuciar" con los datos de otros. El **código** se encarga de crear la estructura de la base de datos, pero los **datos** se quedan en tu máquina.

---

## 🔄 Flujo de Trabajo (Para ti)

1. Hacer cambios en el código.
2. `git add .`
3. `git commit -m "Descripción del cambio"`
4. `git push origin main`
