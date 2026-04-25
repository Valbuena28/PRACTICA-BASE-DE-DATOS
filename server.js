require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de la conexión a Postgres
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Inicialización de la Base de Datos con Reintentos
const initDB = async () => {
    let retries = 5;
    while (retries > 0) {
        try {
            await pool.query(`
                CREATE TABLE IF NOT EXISTS messages (
                    id SERIAL PRIMARY KEY,
                    name VARCHAR(100) NOT NULL,
                    content TEXT NOT NULL,
                    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )
            `);
            console.log('✅ Conectado a PostgreSQL y tabla verificada.');
            return; // Éxito
        } catch (err) {
            retries--;
            console.log(`⏳ Esperando a que PostgreSQL despierte... (${retries} reintentos restantes)`);
            await new Promise(res => setTimeout(res, 3000)); // Esperar 3 segundos
        }
    }
    console.error('❌ No se pudo conectar a PostgreSQL tras varios intentos.');
};

initDB();

// Rutas API
app.get('/api/messages', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM messages ORDER BY timestamp DESC');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/messages', async (req, res) => {
    const { name, content } = req.body;
    if (!name || !content) {
        return res.status(400).json({ error: 'Nombre y contenido requeridos' });
    }

    try {
        const result = await pool.query(
            'INSERT INTO messages (name, content) VALUES ($1, $2) RETURNING *',
            [name, content]
        );
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
