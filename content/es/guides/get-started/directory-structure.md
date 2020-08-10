---
title: Estructura de directorios
description: La estructura predeterminada de la aplicación Nuxt.js está destinada a proporcionar un excelente punto de partida para aplicaciones pequeñas y grandes. Puedes organizar tu aplicación como quieras y crear otros directorios cuando los necesites.
position: 3
category: get-started
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/01_get_started/03_directory_structure?fontsize=14&hidenavigation=1&theme=dark
---

La estructura predeterminada de la aplicación Nuxt.js está destinada a proporcionar un excelente punto de partida para aplicaciones pequeñas y grandes. Puedes organizar tu aplicación como quieras y crear otros directorios cuando los necesites.

Vamos a crear los directorios y archivos que aún no existen en nuestro proyecto.

```bash
mkdir components assets static
touch nuxt.config.js
```

Estos son los directorios y archivos principales que usamos al crear una aplicación Nuxt.js. Encontrarás una explicación de cada uno de ellos a continuación.

<base-alert type="info">

La creación de directorios con estos nombres habilita funciones en tu proyecto Nuxt.js.

</base-alert>

## Directorios

### El directorio pages

El directorio `pages` contiene las vistas y rutas de tu aplicación. Como aprendiste en el último capítulo, Nuxt.js lee todos los archivos `.vue` dentro de este directorio y los usa para crear el enrutador de la aplicación.

<base-alert type="next">

Más información sobre el [directorio pages](/guides/directory-structure/pages)

</base-alert>

### El directorio components

El directorio `components` es donde colocas todos tus componentes de Vue.js que luego se importan a tus páginas.

Con Nuxt.js puedes crear tus componentes e importarlos automáticamente a tus archivos `.vue`, lo que significa que no es necesario importarlos manualmente en la sección script. Nuxt.js los escaneará e importará automáticamente una vez que hayas establecido `components` en `true`.

<base-alert type="next">

Más información sobre el [directorio components](/guides/directory-structure/components)

</base-alert>

### El directorio assets

El directorio `assets` contiene los archivos sin compilar, como tus estilos, imágenes o fuentes.

<base-alert type="next">

Más información sobre el [directorio assets](/guides/directory-structure/assets)

</base-alert>

### El directorio static

El directorio `static` es mapeado directamente a la raíz del servidor y contiene archivos que deben mantener sus nombres (por ejemplo, `robots.txt`) o que probablemente no cambiarán (por ejemplo, el favicon)

<base-alert type="next">

Más información sobre el [directorio static](/guides/directory-structure/static)

</base-alert>

### El archivo nuxt.config.js

El archivo `nuxt.config.js` es el único punto de configuración para Nuxt.js. Si quieres agregar módulos o cambiar la configuración predeterminada, este es el lugar para aplicar los cambios.

<base-alert type="next">

Más información sobre el [archivo nuxt.config.js](/guides/directory-structure/nuxt-config)

</base-alert>

### El archivo package.json

El archivo `package.json` contiene todas las dependencias y scripts para tu aplicación.

<app-modal>
  <code-sandbox  :src="csb_link"></code-sandbox>
</app-modal>

## Más sobre las estructuras del proyecto

Hay más directorios y archivos útiles, como [content](/guides/directory-structure/content), [layouts](/guides/directory-structure/layouts), [middleware](/guides/directory-structure/middleware), [modules](/guides/directory-structure/modules), [plugins](/guides/directory-structure/plugins) y [store](/guides/directory-structure/store). Pero debido a que no son necesarios para aplicaciones pequeñas, no se utilizaron aquí.

<base-alert type="next">

Para conocer todos los directorios a detalle, no dudes en leer el [libro Estructura de directorios](/guides/directory-structure/nuxt).

</base-alert>
