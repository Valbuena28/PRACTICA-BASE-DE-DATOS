# 🐘 Práctica de Base de Datos (PostgreSQL) y Git

Este proyecto demuestra cómo trabajar con **PostgreSQL** de forma colaborativa usando variables de entorno y control de versiones profesional.

## 🛠️ Tecnologías
- **Backend:** Node.js + Express
- **Base de Datos:** PostgreSQL
- **Seguridad:** Dotenv (Variables de entorno)

---

## 👨‍💻 Instrucciones para el Colaborador (Pull)

Si acabas de hacer un `git pull`, sigue estos pasos:

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Configurar la Base de Datos:**
   - Asegúrate de tener PostgreSQL corriendo.
   - Crea una base de datos vacía (ejemplo: `practica_db`).
   - Copia el archivo `.env.example` y cámbiale el nombre a `.env`.
   - Edita el `.env` con tu usuario y contraseña de Postgres.

3. **Migrar datos (Opcional):**
   Si quieres tener el mensaje inicial de Freddy, puedes ejecutar el contenido de `seed.sql` en tu herramienta de base de datos (pgAdmin, DBeaver, etc.).

4. **Iniciar el servidor:**
   ```bash
   npm start
   ```

---

## 📋 Reglas de Oro

1. **NUNCA subas el archivo `.env`:** Ya está en el `.gitignore`. Cada desarrollador tiene sus propios accesos.
2. **Usa `.env.example`:** Si agregas una nueva variable, actualiza este archivo para que los demás sepan que la necesitan.
