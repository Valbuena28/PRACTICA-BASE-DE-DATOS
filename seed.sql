-- Script para inicializar la base de datos con el mensaje anterior
CREATE TABLE IF NOT EXISTS messages (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    content TEXT NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (name, content, timestamp) 
VALUES ('Freddy', 'Todo funcionando primera visita', '2026-04-25 20:53:23')
ON CONFLICT DO NOTHING;
