# Portafolio de Wilson Paredes Huacarpuma

Portafolio personal construido con React, TypeScript, Vite, Tailwind CSS y Lucide React. Cada apartado tiene una página independiente con navegación propia. Presenta experiencia, proyectos, competencias, formación, logros y contacto.

## Requisitos

- Node.js 20 o superior
- npm
- Visual Studio Code

## Instalación y ejecución local

1. Abre esta carpeta en Visual Studio Code.
2. Abre **Terminal > Nueva terminal**.
3. Instala las dependencias:

   ```powershell
   npm install
   ```

4. Inicia el servidor de desarrollo:

   ```powershell
   npm run dev
   ```

5. Abre en el navegador la dirección que muestra Vite, normalmente `http://localhost:5173`.

Para compilar y revisar la versión de producción:

```powershell
npm run build
npm run preview
```

## Actualizar el portafolio

- Cada apartado se muestra en su propia página; usa el menú y los botones anterior/siguiente para navegar.
- `src/data/profile.ts`: nombre, título, presentación, formación y enlaces reales.
- `src/data/experiences.ts`: empresas, sitios oficiales y campos editables de experiencia.
- `src/data/projects.ts`: proyectos, estado, tecnologías verificadas, aporte, enlaces y visibilidad.
- `src/data/skills.ts`: competencias.
- `src/data/achievements.ts`: logros descritos y categorías de certificaciones.
- `src/types/portfolio.ts`: tipos de los datos editables.

Para ocultar una tarjeta provisional, cambia `visible: true` por `visible: false` en el proyecto correspondiente. Los datos no se envían a ningún servidor.

### Imágenes

Agrega únicamente imágenes reales y autorizadas en `public/images/` con estos nombres:

- `perfil.jpg`
- `tgh-logo.png` y `tgh-erp.png`
- `apq-logo.png` y `apq-tienda.png`
- `reconocimiento-senas.png`
- `aplicacion-movil.png`
- `turismo-web.png`

Si una imagen no se ha agregado todavía, el portafolio la oculta o muestra un marcador de posición sin simular una captura real.

## GitHub

Este proyecto no configura un repositorio remoto ni publica el código. Cuando estés listo:

1. Crea un repositorio nuevo y vacío en GitHub.
2. Desde esta carpeta, inicializa Git y crea el primer commit:

   ```powershell
   git init
   git add .
   git commit -m "chore: inicia portafolio profesional"
   git branch -M main
   ```

3. Conecta el repositorio que creaste y sube la rama `main` (reemplaza los valores de ejemplo):

   ```powershell
   git remote add origin https://github.com/TU-USUARIO/TU-REPOSITORIO.git
   git push -u origin main
   ```

Antes de añadir un remoto a una carpeta que ya tenga historial, comprueba los existentes con `git remote -v`. No incluyas contraseñas ni tokens en el código.

## Publicar en Vercel

1. Sube el proyecto a un repositorio nuevo de GitHub.
2. Inicia sesión en Vercel y elige **Add New > Project**.
3. Importa el repositorio.
4. Comprueba que Vercel detecte Vite. El comando de compilación es `npm run build` y el directorio de salida es `dist`.
5. Selecciona **Deploy**. Verifica la URL generada antes de compartir el portafolio.

Vercel volverá a publicar el sitio al subir cambios a la rama conectada. Subir el código a GitHub no publica el sitio web por sí solo; el despliegue en Vercel se configura por separado.
