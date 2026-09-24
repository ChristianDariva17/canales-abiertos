# Canales Abiertos · Señal Abierta

Plataforma web para acceder a señales de televisión pública, canales en vivo y catálogos oficiales de cine en español de forma rápida y legal.

## 🚀 Características

- **Señales de TV Pública y Regionales:** Acceso a transmisiones oficiales nacionales (Perú, España, etc.) y señales regionales mediante reproductor HLS y enlaces directos verificados.
- **Catálogo de Cine en Español:** Directorio de plataformas legales y gratuitas (RTVE Play, CINE.AR Play, Pluto TV, Plex, etc.) y plataformas premium.
- **Lista de Canales Unificada:** Carga de lista M3U integrada (`canales_publicos_unificados.m3u`).
- **Reproductor Integrado:** Soporte para streams HLS (`hls.js`) y reproductores nativos HTML5.
- **Buscador y Filtros:** Búsqueda en tiempo real por nombre, región o temática.
- **Diseño Moderno:** Interfaz responsiva, tema oscuro elegante y tipografía optimizada.

## 📁 Estructura del Proyecto

```text
├── dist/
│   ├── index.html                       # Página principal
│   ├── styles.css                       # Estilos CSS
│   ├── app.js                           # Lógica del reproductor y catálogo
│   ├── canales_publicos_unificados.m3u  # Lista de reproducción de canales públicos
│   └── favicon.svg                      # Icono del sitio
├── .openai/
│   └── hosting.json                     # Configuración de hosting estático
├── .gitignore
└── README.md
```

## 🛠️ Cómo Ejecutar Localmente

Puedes servir la carpeta `dist/` con cualquier servidor web estático:

### Con Node.js (npx)
```bash
npx serve dist
```

### Con Python
```bash
python -m http.server --directory dist 8080
```

Luego abre tu navegador en `http://localhost:8080`.

## 📄 Licencia

Este proyecto recopila y enlaza señales y catálogos de acceso público y gratuito proporcionados por sus respectivos titulares.
