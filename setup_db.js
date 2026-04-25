const { Client } = require('pg');
require('dotenv').config();
const fs = require('fs');
const path = require('path');

async function setup() {
    const credentials = {
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
    };

    // 1. Conectar a la base de datos 'postgres' para crear la nueva
    const client = new Client({ ...credentials, database: 'postgres' });
    
    try {
        await client.connect();
        console.log('📡 Conectado a PostgreSQL...');
        
        // Crear base de datos
        await client.query('CREATE DATABASE practica_db').catch(err => {
            if (err.code === '42P04') {
                console.log('ℹ️ La base de datos "practica_db" ya existe.');
            } else {
                throw err;
            }
        });
        await client.end();

        // 2. Conectar a 'practica_db' para cargar el seed
        const dbClient = new Client({ ...credentials, database: 'practica_db' });
        await dbClient.connect();
        console.log('✅ Conectado a "practica_db".');

        const seedSql = fs.readFileSync(path.join(__dirname, 'seed.sql'), 'utf8');
        await dbClient.query(seedSql);
        console.log('🐘 Base de datos montada y seed cargado con éxito.');
        
        await dbClient.end();
    } catch (err) {
        console.error('❌ Error detallado:', err);
        process.exit(1);
    }
}

setup();
