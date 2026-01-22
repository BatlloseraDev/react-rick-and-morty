
# Rick and Morty App - React Challenge

Aplicación web desarrollada con **React**, **Vite** y **TypeScript** que consume la [Rick and Morty API](https://rickandmortyapi.com/).

Este proyecto es un ejercicio práctico enfocado en el desarrollo de una SPA (Single Page Application) moderna, fortaleciendo conceptos clave como la creación de Custom Hooks, gestión de estado, consumo de APIs externas y testing.

## 🚀 Características

La aplicación incluye varias funcionalidades avanzadas:

* **Buscador de Personajes**: Búsqueda en tiempo real por nombre.
* **Filtros de Estado**: Filtrado dinámico por estado (Vivo, Muerto, Desconocido).
* **Paginación Manual**: Botón "Cargar más" para listar más resultados.
* **Visualización Detallada**: Panel lateral (Aside) con información extra al seleccionar un personaje.
* **Caché Personalizado**: Implementación de un sistema de caché con `useRef` para evitar peticiones redundantes a la API al navegar entre páginas o búsquedas ya realizadas.
* **Diseño Responsivo**: Adaptado a móviles y escritorio utilizando CSS Grid y variables CSS.

## 🛠️ Tecnologías Utilizadas

* **Core**: React 19 + TypeScript
* **Build Tool**: Vite
* **HTTP Client**: Axios
* **Testing**: Vitest + React Testing Library
* **Estilos**: CSS3 nativo


## 🔧 Instalación y Despliegue

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1. **Clonar el repositorio** (o descargar los archivos):
```bash
git clone <URL_DEL_REPO>
cd react-rick-and-morty

```


2. **Instalar dependencias**:
```bash
npm install

```


3. **Ejecutar en desarrollo**:
```bash
npm run dev

```


La aplicación estará disponible típicamente en `http://localhost:5173`.

## ✅ Testing

El proyecto cuenta con tests unitarios y de componentes configurados con **Vitest**.

Para ejecutar las pruebas:

```bash
npm run test       # Ejecuta los tests una vez
# o
npm run test:ui    # Abre la interfaz gráfica de Vitest

```


## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](https://www.google.com/search?q=LICENSE) para más detalles.





