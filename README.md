# campus-repos

Este es un proyecto web construido con Node.js que sirve archivos estáticos a través de un servidor local seguro (**HTTPS**) y utiliza **Sass** para facilitar la escritura de hojas de estilo (CSS).

## 📁 ¿Cómo funciona?

El proyecto se divide principalmente en dos partes clave:
1. **El Servidor Web (`server.js`):** Utiliza un marco de trabajo llamado "Express" para servir los archivos de la página web. La particularidad es que arranca un servidor **HTTPS** (conexión segura) usando los certificados locales (`cert.pem` y `key.pem`).
2. **Procesamiento de Estilos (Sass):** Permite escribir estilos en formato `.scss` para aprovechar variables o anidaciones, y cuenta con comandos que lo "traducen" o compilan automáticamente a CSS normal para que el navegador lo entienda.

### Estructura de carpetas a tener en cuenta:
- `/public/`: Es la carpeta más importante para el contenido visual. Todo lo que pongas aquí (HTML, CSS compilado, imágenes, JS) será lo que el servidor muestre en el navegador.
- `server.js`: El cerebro del servidor web.
- `package.json`: Contiene la configuración general del proyecto, los comandos rápidos (scripts) y las dependencias (librerías externas).

---

## 🚀 Instalación (Primeros pasos)

Para poder correr este proyecto en tu computadora, primero necesitas tener instalado **Node.js** (puedes descargarlo e instalarlo gratis desde [nodejs.org](https://nodejs.org/)).

Una vez instalado Node.js, sigue estos pasos:

1. **Abre tu terminal** (línea de comandos) y navega hasta la carpeta principal de este proyecto (`campus-repos`).
2. **Instala las dependencias**. Ejecuta el siguiente comando para descargar las librerías que el proyecto necesita para funcionar (como Express y Sass):
   
   ```bash
   npm install
   ```

*(Nota: Tras hacer esto aparecerá una nueva carpeta llamada `node_modules`. No tienes que modificar nada dentro de ella y no se debe subir a repositorios Git).*

---

## 🏃 Cómo usar y correr el proyecto

El proyecto cuenta con atajos preconfigurados para iniciar todo fácilmente. Puedes usarlos desde la línea de comandos una vez que estés en la carpeta del proyecto.

### 1. Manera recomendada: Ejecutar todo junto

Para trabajar cómodamente, puedes arrancar **tanto el servidor web como el compilador de Sass al mismo tiempo**, todo en una única ventana de tu terminal. Para esto, corre:

```bash
npm run dev
```

Luego, abre tu navegador de internet y entra a la siguiente dirección:
👉 **https://localhost:3000**
o directamente a la hoja de estilos compilada: **https://localhost:3000/campus/posgrados/base/styles/general.css**

> [!WARNING]
> **Aviso sobre el navegador:** Al entrar, es muy probable que Google Chrome, Firefox o Edge te muestren una pantalla de advertencia roja alertándote que "**La conexión no es privada**" o el sitio no es seguro. Esto es completamente **normal** al trabajar en tu PC local con HTTPS. Solo debes hacer clic en el botón de "**Configuración avanzada**" (o Avanzado) en esa misma pantalla, y luego en **"Continuar a localhost (inseguro)"** para poder ver la página.

### 2. Comandos Individuales (Alternativa)

Si en lugar de correr todo junto prefieres arrancar los procesos por separado en distintas sub-pestañas de tu terminal, puedes usar estos comandos:

- **`npm run server`**: Inicia *solo* el servidor web.
- **`npm run watch`**: Inicia *solo* el observador de Sass (re-compila automáticamente en tiempo real).
- **`npm run build`**: Compila Sass a CSS una única vez y se detiene (ideal si solo quieres ver cómo construirá la versión final).

---

## 🛠️ Modo Developer (Switch de Estilos)

Si cuentas con una lógica front-end que utiliza una variable de `localStorage` para habilitar componentes de desarrollo (como el switch de estilos recargables en tiempo real), puedes activarlo y desactivarlo fácilmente accediendo a estas rutas desde tu navegador web, sin necesidad de abrir el inspector de elementos:

- 👉 **Activar:** [https://localhost:3000/dev](https://localhost:3000/dev) (Crea la variable `developer="true"` en tu navegador y te regresa a la página anterior).
- 👉 **Desactivar:** [https://localhost:3000/undev](https://localhost:3000/undev) (Remueve la variable y desactiva el modo de desarrollo).

---
¡Eso es todo! Ya estás listo para editar los archivos dentro de la carpeta `public/` y presionar F5 en tu navegador para ver tus creaciones.
