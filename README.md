# 🐘 Práctica de Base de Datos Profesional (Híbrida)

Este proyecto está diseñado para funcionar en cualquier entorno, ya sea que prefieras usar **Docker** o una instalación **Local** de PostgreSQL.

## 🛠️ Tecnologías
- **Backend:** Node.js + Express
- **Base de Datos:** PostgreSQL
- **Contenedores:** Docker & Docker Compose

---

## 👨‍💻 Cómo empezar (Doble clic y listo)

Para facilitar la vida al equipo, usa el archivo **`run.bat`**. Al abrirlo, te preguntará cómo quieres trabajar:

### Opción 1: Con Docker (Recomendado)
- No necesitas configurar nada en tu PC.
- El script levantará un Postgres limpio en el puerto **`5445`**.
- Usuario: `postgres` / Clave: `admin` (configurado automáticamente).

### Opción 2: Local (Sin Docker)
- Usa tu propia instalación de PostgreSQL.
- **IMPORTANTE:** Debes configurar el archivo `.env` con tus credenciales locales (Usuario, Clave, Host y Puerto).

---

## 📋 Configuración Inicial

1. **Instalar dependencias:** `npm install` (el `run.bat` lo hace por ti si falta).
2. **Variables de Entorno:** Copia `.env.example` a `.env` y ajusta según tu preferencia.
3. **Base de Datos:** 
   - Si usas Docker, la DB `practica_db` se crea sola.
   - Si usas Local, debes crearla manualmente: `CREATE DATABASE practica_db;`.

---

## 🔄 Flujo de Trabajo

- **¿Hiciste cambios?** `git add .` -> `git commit -m "..."` -> `git push origin main`.
- **¿Vas a empezar a trabajar?** Siempre haz un `git pull` primero para tener lo último del equipo.
