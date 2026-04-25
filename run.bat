@echo off
TITLE Proyecto Base de Datos - Debug Mode
SETLOCAL

echo ==========================================
echo   VERIFICANDO ENTORNO...
echo ==========================================

:: Verificar si Node.js esta instalado
node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Node.js no esta instalado o no se encuentra en el PATH.
    echo Por favor, instala Node.js desde https://nodejs.org/
    pause
    exit /b 1
)

echo [OK] Node.js detectado.

:: Verificar si existe node_modules
if not exist "node_modules\" (
    echo [INFO] No se encontraron dependencias. Instalando...
    call npm install
    if %errorlevel% neq 0 (
        echo [ERROR] Error critico durante npm install.
        pause
        exit /b 1
    )
)

echo [OK] Dependencias listas.
echo [INFO] Iniciando servidor y abriendo navegador...

:: Abrir el navegador
start "" "http://localhost:3005"

:: Ejecutar el servidor
call npm start

:: Si falla el inicio del servidor, que no se cierre la ventana
if %errorlevel% neq 0 (
    echo [ERROR] El servidor se detuvo inesperadamente.
    pause
)

pause
