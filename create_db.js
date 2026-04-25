const { Client } = require('pg');

async function createDB() {
    const client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'postgres',
        password: '', // Intentamos con password vacio
        port: 5432,
    });

    try {
        await client.connect();
        await client.query('CREATE DATABASE practica_db');
        console.log('✅ Base de datos "practica_db" creada con éxito.');
    } catch (err) {
        if (err.code === '42P04') {
            console.log('ℹ️ La base de datos "practica_db" ya existe.');
        } else {
            console.error('❌ Error fatal:', err.message);
            console.log('\n--- POSIBLE SOLUCIÓN ---');
            console.log('Si tu Postgres tiene contraseña, edita este script y ponla en la linea 8.');
        }
    } finally {
        await client.end();
    }
}

createDB();
