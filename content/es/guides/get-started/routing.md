---
title: Enrutamiento
description: La mayoría de los sitios web tienen más de una página. Por ejemplo, una página de inicio, una página de información, una página de contacto, etc. Para mostrar estas páginas necesitamos un Enrutador.
position: 2
category: get-started
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/01_get_started/02_routing?fontsize=14&hidenavigation=1&theme=dark
---

## Rutas automáticas

La mayoría de los sitios web tienen más de una página (por ejemplo, una página de inicio, una página de información, una página de contacto, etc.). Para mostrar estas páginas, necesitamos un Enrutador. Ahí es donde entra `vue-router`. Cuando trabajes con la aplicación Vue, debes configurar un archivo (por ejemplo, `router.js`) y agregar todas tus rutas manualmente. Nuxt.js genera automáticamente la configuración de `vue-router` para ti, según los archivos de Vue proporcionados dentro del directorio `pages`. ¡Eso significa que nunca más tendrás que escribir la configuración para el enrutamiento! Nuxt.js también te brinda división automática de código para todas tus rutas.

En otras palabras, todo lo que tienes que hacer para tener enrutamiento en tu aplicación es crear archivos `.vue` en la carpeta `pages`.

<base-alert type="next">

Más información sobre [Enrutamiento](/guides/features/file-system-routing)

</base-alert>

## Navegación

Para navegar entre las páginas de tu aplicación, debes utilizar el componente [NuxtLink](/guides/features/nuxt-components#the-nuxtlink-component). Este componente está incluido con Nuxt.js y, por lo tanto, no tienes que importarlo como lo haces con otros componentes. Es similar a la etiqueta HTML `<a>`, excepto que en lugar de usar `href="/about"` usamos `to="/about"`. Si has usado `vue-router` antes, puedes pensar en `<NuxtLink>` como un reemplazo para `<RouterLink>`

Un enlace simple a la página `index.vue` en tu carpeta `pages`:

```html{}[pages/index.vue]
<template>
  <NuxtLink to="/">Página de inicio</NuxtLink>
</template>
```

Para todos los enlaces a páginas dentro de tu sitio, utiliza `<NuxtLink>`. Si tienes enlaces a otros sitios web, debes utilizar la etiqueta `<a>`. A continuación, un ejemplo:

```html{}[pages/index.vue]
<template>
  <main>
    <h1>Página de inicio</h1>
    <NuxtLink to="/about">
      Acerca de (enlace interno que pertenece a la aplicación Nuxt)
    </NuxtLink>
    <a href="https://nuxtjs.org">Enlace externo a otra página</a>
  </main>
</template>
```

<app-modal>
  <code-sandbox :src="csb_link"></code-sandbox>
</app-modal>

<base-alert type="next">

Más información sobre el [componente NuxtLink](/guides/features/nuxt-components#the-nuxtlink-component).

</base-alert>
