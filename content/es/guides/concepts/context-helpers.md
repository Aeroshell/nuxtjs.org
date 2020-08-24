---
title: Context y Ayudantes
description: Context proporciona información *adicional* y a menudo opcional sobre la solicitud actual a la aplicación.
position: 2
category: concepts
csb_link_context: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/02_concepts/02_context_helpers-context?fontsize=14&hidenavigation=1&theme=dark
csb_link_helpers: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/02_concepts/02_context_helpers-helpers?fontsize=14&hidenavigation=1&theme=dark
img: /guides/context.svg
imgAlt: nuxt-js-context-keys
questions:
  - question: ¿Cuál es la razón por la que existe context?
    answers:
      - Por el renderizado del lado del servidor
      - Por tener estado global
      - Por pereza
    correctAnswer: Por el renderizado del lado del servidor
  - question: ¿Cuál key no se encuentra en context?
    answers:
      - env
      - isDev
      - $store
    correctAnswer: $store
  - question: ¿Cuál key de context solo está disponible del lado del *servidor*?
    answers:
      - from
      - app
      - req
    correctAnswer: req
  - question: ¿Cuál key de context solo está disponible del lado del *cliente*?
    answers:
      - from
      - res
      - app
    correctAnswer: from
  - question: ¿Qué *no* puede hacer el ayudante `$nuxt`?
    answers:
      - Visualizar la versión de Nuxt
      - Proporcionar información sobre el estado de la conexión a Internet de los usuarios
      - Acceder a las funciones del módulo expuesto
    correctAnswer: Visualizar la versión de Nuxt
  - question: ¿Cuáles son los nombres de los ayudantes de process?
    answers:
      - global, client y server
      - server, client y static
      - ssr, spa y static
    correctAnswer: server, client y static
---

<app-modal :src="img" :alt="imgAlt"></app-modal>

El objeto `context` está disponible en funciones específicas de Nuxt como [asyncData](/guides/features/data-fetching#async-data), [plugins](/guides/directory-structure/plugins), [middleware](/guides/directory-structure/middleware) y [nuxtServerInit](/guides/directory-structure/store#the-nuxtserverinit-action). Proporciona información _adicional_ y, a menudo, opcional sobre la solicitud actual a la aplicación.

En primer lugar, context se utiliza para proporcionar acceso a otras partes de la aplicación Nuxt.js, por ejemplo, Vuex Store o la instancia subyacente de `connect`. Por lo tanto, tenemos los objetos `req` y `res` en context disponibles del lado del servidor y `store` siempre disponible. Pero con el tiempo, context se amplió con muchas otras variables útiles y atajos. Ahora tenemos acceso a las funcionalidades HMR en modo `desarrollo`, la `ruta` actual, los `parámetros` de página y la consulta (`query`), así como la opción de acceder a variables de entorno a través de context. Además, las funciones del módulo y los ayudantes se pueden exponer a través de context para que estén disponibles tanto del lado del cliente como en el del servidor.

**Todas las keys de context que están presentes de forma predeterminada**

```js
function (context) { // Podría ser asyncData, nuxtServerInit, ...
  // Siempre disponible
  const {
    app,
    store,
    route,
    params,
    query,
    env,
    isDev,
    isHMR,
    redirect,
    error,
   $config
  } = context

  // Solo disponible del lado del Servidor
  if (process.server) {
    const { req, res, beforeNuxtRender } = context
  }

  // Solo disponible del lado del Cliente
  if (process.client) {
    const { from, nuxtState } = context
  }
}
```

<base-alert>

Al _context_ que nos referimos aquí no debe confundirse con el objeto `context` disponible en [Vuex Actions](https://vuex.vuejs.org/guide/actions.html) o el disponible en la función `build.extend` en tu `nuxt.config.js`. ¡Todos estos no están relacionados entre sí!

</base-alert>

Obtén más información sobre las diferentes keys de context en nuestro [Glosario de partes internas](/guides/internals-glossary/context)

## Ejemplos

### Usar parámetros de página para tu consulta a la API

Context expone directamente los posibles parámetros dinámicos de la ruta a través de `context.params`. En el siguiente ejemplo, llamamos a una API a través del módulo `nuxt/http` usando un parámetro de página dinámica como parte de la URL. Los módulos, como el módulo [nuxt/http](https://http.nuxtjs.org/), pueden exponer sus propias funciones que luego están disponibles a través del objeto [context.app](http://context.app).

Además, envolvemos la llamada a la API en una sentencia `try/catch` para manejar posibles errores. Con la función `context.error`, podemos mostrar directamente la página de error de Nuxt y pasar el error ocurrido.

```js{}[pages/posts/_id.vue]
export default {
  async asyncData(context) {
    const id = context.params.id
    try {
      // Usando el módulo nuxtjs/http aquí expuesto a través de context.app
      const post = await context.app.$http.$get(
        `https://api.nuxtjs.dev/posts/${id}`
      )
      return { post }
    } catch (error) {
      context.error(error) // Mostrar la página de error de nuxt con el error lanzado
    }
  }
}
```

Con [ES6](https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/) puedes utilizar esta sintaxis para describir tu objeto context. Puedes pasar los objetos a los que quieras tener acceso y luego usarlos en el código sin usar la palabra context.

```js{}[pages/posts/_id.vue]
export default {
  async asyncData({ params, $http, error }) {
    const id = params.id

    try {
      // Usando el módulo nuxtjs/http aquí expuesto a través de context.app
      const post = await $http.$get(`https://api.nuxtjs.dev/posts/${id}`)
      return { post }
    } catch (error) {
      error(error) // Mostrar la página de error de nuxt con el error lanzado
    }
  }
}
```

¿Quieres utilizar parámetros de consulta en su lugar? Entonces utiliza [context.query.id](http://context.query.id).

### Redirigir usuarios y acceder a store

También es posible acceder a Vuex Store (cuando está configurado a través del directorio `store`) a través de context. Proporciona un objeto `store` que se puede tratar como `this.$store` en los componentes de Vue. Además, utilizamos el método `redirect`, un ayudante expuesto a través de context, para redirigir al usuario en caso de que el estado `authenticated` sea `false`.

```js
export default {
  middleware({ store, redirect }) {
    // recuperar keys mediante la desestructuración de objetos
    const isAuthenticated = store.state.authenticated
    if (!isAuthenticated) {
      return redirect('/login')
    }
  }
}
```

<app-modal>
  <code-sandbox :src="csb_link_context"></code-sandbox>
</app-modal>

## Ayudantes

Además de los atajos en context, también hay otros pequeños ayudantes presentes en tu aplicación Nuxt.js.

## `$nuxt`: El ayudante de Nuxt.js

`$nuxt` es un ayudante diseñado para mejorar la experiencia del usuario y ser una vía de escape en algunas situaciones. Es accesible a través de `this.$nuxt` en los componentes de Vue y a través de `window.$nuxt` del lado del cliente.

### Comprobador de conexión

El asistente `$nuxt` proporciona una manera rápida de averiguar si la conexión a Internet de un usuario está presente o no: expone los valores booleanos `isOffline` e `isOnline`. Podemos usarlos para mostrar un mensaje tan pronto como el usuario esté desconectado (por ejemplo).

```html{}[layouts/default.vue]
<template>
  <div>
    <div v-if="$nuxt.isOffline">Estas desconectado</div>
    <Nuxt />
  </div>
</template>
```

### Accediendo a la instancia raíz

Además de proporcionar funciones DX/UX, el ayudante `$nuxt` también proporciona un acceso directo a la instancia raíz de tu aplicación desde cualquier otro componente. Pero eso no es todo: también puedes acceder al ayudante `$nuxt` a través de `window.$nuxt`, que puede usarse como una trampilla de escape para obtener acceso a métodos de módulos como `$axios` desde fuera de tus componentes de Vue. Esto debe usarse con prudencia y **solo como último recurso**.

### Actualizar datos de la página

Cuando quieras actualizar la página actual para el usuario, no querrás volver a cargar la página por completo porque puede volver a acceder al servidor y al menos reinicializar toda la aplicación Nuxt.js. En su lugar, a menudo solo se requerirá actualizar los datos proporcionados por `asyncData` o `fetch`.

¡Puedes hacerlo utilizando `this.$nuxt.refresh()`!

```html
<template>
  <div>
    <div>{{ content }}</div>
    <button @click="refresh">Actualizar</button>
  </div>
</template>

<script>
  export default {
    asyncData() {
      return { content: 'Creado: ' + new Date() }
    },
    methods: {
      refresh() {
        this.$nuxt.refresh()
      }
    }
  }
</script>
```

### Controlando la barra de carga

Con `$nuxt`, también puedes controlar la barra de carga de Nuxt programáticamente a través de `this.$nuxt.$loading`.

```js
export default {
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  }
}
```

Más información en el [capítulo Cargando de la sección Características](../features/loading)

## Ayudante onNuxtReady

Si quieres ejecutar algunos scripts _después_ de que tu aplicación Nuxt.js se haya cargado y esté lista, puedes usar la función `window.onNuxtReady`. Esto puede resultar útil cuando quieras ejecutar una función del lado del cliente sin aumentar el tiempo de interacción de tu sitio.

```js
window.onNuxtReady(() => {
  console.log('Nuxt.js está listo y montado')
})
```

## Ayudante process

Nuxt.js inyecta tres valores booleanos en el objeto global `process` que ayudarán a determinar si tu aplicación se procesó en el servidor o completamente en el cliente, así como a verificar la generación de sitios estáticos. Estos ayudantes están disponibles en toda la aplicación y se utilizan comúnmente en `asyncData`.

```html{}[pages/about.vue]
<template>
  <h1>Estoy renderizado del lado del {{ renderedOn }}</h1>
</template>

<script>
  export default {
    asyncData() {
      return { renderedOn: process.client ? 'cliente' : 'servidor' }
    }
  }
</script>
```

En el ejemplo, `renderingOn` se evaluará como `'servidor'` cuando se usa el renderizado del lado del servidor y un usuario accede a la página directamente. Cuando el usuario navega a la página desde otra parte de la aplicación, por ejemplo al hacer clic en un `<NuxtLink>`, se evaluará como `'cliente'`.

<app-modal>
  <code-sandbox :src="csb_link_helpers"></code-sandbox>
</app-modal>

<quiz :questions="questions"></quiz>
