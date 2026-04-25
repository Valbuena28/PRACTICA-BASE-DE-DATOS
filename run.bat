@echo off
TITLE Proyecto Base de Datos - Modo Hibrido Pro
SETLOCAL

echo ==========================================
echo   SELECCIONA EL MODO DE BASE DE DATOS
echo ==========================================
echo [1] Usar PostgreSQL con DOCKER (Recomendado)
echo [2] Usar PostgreSQL LOCAL (Configuracion manual o auto)
echo.

set /p choice="Elige una opcion (1 o 2): "

if "%choice%"=="1" (
    echo [INFO] Levantando Docker...
    call docker compose up -d
    if %errorlevel% neq 0 (
        echo [ERROR] No se pudo iniciar Docker. Asegurate de que este abierto.
        pause
        exit /b 1
    )
) else (
    echo.
    echo [?] Quieres configurar/reparar la base de datos local automaticamente? (S/N)
    set /p setup_choice="> "
    if /i "%setup_choice%"=="S" (
        echo [INFO] Ejecutando setup_db.js...
        call node setup_db.js
    )
    echo [INFO] Usando configuracion del archivo .env...
)

echo ==========================================
echo   INICIANDO SERVIDOR...
echo ==========================================

node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Node.js no detectado.
    pause
    exit /b 1
)

if not exist "node_modules\" (
    echo [INFO] Instalando dependencias...
    call npm install
)

start "" "http://localhost:3005"
call npm start

pause
