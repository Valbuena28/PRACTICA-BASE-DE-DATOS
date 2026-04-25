@echo off
TITLE Proyecto Base de Datos - Docker Mode
SETLOCAL

echo ==========================================
echo   INICIANDO ENTORNO DOCKER...
echo ==========================================

:: Levantar la base de datos en Docker
call docker compose up -d
if %errorlevel% neq 0 (
    echo [ERROR] No se pudo iniciar Docker. Asegurate de que Docker Desktop este abierto.
    pause
    exit /b 1
)

echo [OK] Base de datos en Docker lista.

echo ==========================================
echo   VERIFICANDO NODE.JS...
echo ==========================================

:: Verificar Node
node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Node.js no detectado.
    pause
    exit /b 1
)

:: Instalar dependencias si faltan
if not exist "node_modules\" (
    echo [INFO] Instalando dependencias...
    call npm install
)

echo [OK] Todo listo. Iniciando servidor...

:: Abrir el navegador
start "" "http://localhost:3005"

:: Ejecutar el servidor
call npm start

pause
