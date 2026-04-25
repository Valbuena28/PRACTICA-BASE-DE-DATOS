@echo off
TITLE Proyecto Base de Datos - Modo Hibrido (Docker/Local)
SETLOCAL

echo ==========================================
echo   SELECCIONA EL MODO DE BASE DE DATOS
echo ==========================================
echo [1] Usar PostgreSQL con DOCKER (Recomendado)
echo [2] Usar PostgreSQL LOCAL (Debes configurar el .env)
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
    echo [INFO] Saltando Docker. Usando configuracion del archivo .env...
)

echo ==========================================
echo   INICIANDO SERVIDOR...
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

:: Abrir el navegador (leemos el puerto del .env si existe)
start "" "http://localhost:3005"

:: Ejecutar el servidor
call npm start

pause
