@echo off
TITLE Proyecto Base de Datos - Setup & Run
SETLOCAL

echo ==========================================
echo   INICIANDO PROYECTO - MODO DESARROLLO
echo ==========================================

:: Verificar si existe la carpeta node_modules
if not exist "node_modules\" (
    echo [INFO] No se encontraron dependencias. Instalando...
    call npm install
    if %errorlevel% neq 0 (
        echo [ERROR] Hubo un problema instalando las dependencias.
        pause
        exit /b %errorlevel%
    )
)

echo [INFO] Dependencias listas.
echo [INFO] Iniciando el servidor...

:: Abrir el navegador automaticamente en 3 segundos
start "" "http://localhost:3000"

:: Iniciar el servidor de Node
call npm start

pause
