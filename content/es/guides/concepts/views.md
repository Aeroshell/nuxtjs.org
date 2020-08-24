---
title: Vistas
description: La sección Vistas describe todo lo que necesitas saber para configurar datos y vistas para una ruta específica en tu aplicación Nuxt.js. Las vistas constan de una plantilla de la aplicación, un diseño y la página actual.
position: 1
category: concepts
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/02_concepts/01_views?fontsize=14&hidenavigation=1&theme=dark
questions:
  - question: ¿Cuál es el orden de composición de una vista en Nuxt (de arriba hacia abajo)?
    answers:
      - Diseño → Página → Documento
      - Página → Diseño → Documento
      - Documento → Diseño → Página
    correctAnswer: Documento → Diseño → Página
  - question: ¿Cómo se llama el diseño predeterminado?
    answers:
      - default.vue
      - layout.vue
      - defaultLayout.vue
    correctAnswer: default.vue
  - question: ¿Cómo se crea un diseño personalizado?
    answers:
      - agregando un archivo .vue a la carpeta pages
      - agregando un archivo .vue a la carpeta layouts
      - agregando un archivo .vue a la carpeta components
    correctAnswer: agregando un archivo .vue a la carpeta layouts
  - question: ¿Cómo activas el diseño personalizado llamado 'blog' en tu página?
    answers:
      - "layout: 'blog'"
      - "layout: 'default'"
      - "blog: 'blog'"
    correctAnswer: "layout: 'blog'"
  - question: ¿En dónde colocas el archivo error.vue que crea una página de error personalizada?
    answers:
      - en la carpeta pages
      - en la carpeta errors
      - en la carpeta layouts
    correctAnswer: en la carpeta layouts
---

La sección Vistas describe todo lo que necesitas saber para configurar datos y vistas para una ruta específica en tu aplicación Nuxt.js. Las vistas constan de una plantilla de la aplicación, un diseño y la página actual. Además, puedes definir metaetiquetas personalizadas para la sección head de cada página las cuales son importantes para el SEO (optimización de motores de búsqueda).

![Composición de una vista en Nuxt.js](/guides/views.png)

Composición de una vista en Nuxt.js

## Páginas

Cada componente page es un componente de Vue, pero Nuxt.js agrega atributos y funciones especiales para que el desarrollo de tu aplicación sea lo más fácil posible.

```html{}[pages/index.vue]
<template>
  <h1 class="red">Hola Mundo</h1>
</template>

<script>
  export default {
    head() {
      // Establecer metaetiquetas para esta página
    }
    // ...
  }
</script>

<style>
  .red {
    color: red;
  }
</style>
```

## Propiedades del componente page

Hay muchas propiedades del componente page, como la propiedad head en el ejemplo anterior.

<base-alert type="next">

Consulta el [libro Estructura de directorios] para obtener más información sobre todas las propiedades que puede utilizar en tu página.

</base-alert>

## Diseños

Los diseños son de gran ayuda cuando se desea cambiar la apariencia de la aplicación Nuxt.js. Por ejemplo, quieres incluir una barra lateral o tener diseños distintos para dispositivos móviles y computadoras de escritorio.

### Diseño predeterminado

Puedes definir un diseño predeterminado agregando el archivo `default.vue` dentro del directorio layouts. Esto se utilizará para todas las páginas que no tengan un diseño especificado. Lo único que necesitas incluir en el diseño es el componente `<Nuxt />` el cual renderiza el componente page.

```html{}[layouts/default.vue]
<template>
  <Nuxt />
</template>
```

<base-alert type="next">

Obtén más información sobre el [componente Nuxt](/guides/features/nuxt-components) en el capítulo de componentes.

</base-alert>

### Diseño personalizado

Puede crear diseños personalizados agregando un archivo `.vue` al directorio layouts. Para utilizar el diseño personalizado, debes establecer la propiedad `layout` en el componente page donde quieras utilizar ese diseño. El valor será el nombre del diseño personalizado que hayas creado.

Para crear un diseño de blog, agrega el archivo `blog.vue` al directorio layouts `layouts/blog.vue`:

```html{}[layouts/blog.vue]
<template>
  <div>
    <div>La barra de navegación de mi blog va aquí</div>
    <Nuxt />
  </div>
</template>
```

<base-alert>

Asegúrate de agregar el componente `<Nuxt/>` cuando crees un diseño para incluir realmente el componente page.

</base-alert>

Luego usamos la propiedad layout con el valor 'blog' en la página donde queremos que se use ese diseño.

```html{}[pages/posts.vue]
<template>
  <!-- Tu plantilla -->
</template>
<script>
  export default {
    layout: 'blog'
    // definiciones del componente page
  }
</script>
```

<base-alert type="info">

Si no agregas la propiedad layout a tu página, por ejemplo, `layout: 'blog'`, se utilizará el diseño `default.vue`.

</base-alert>

<app-modal>
  <code-sandbox :src="csb_link"></code-sandbox>
</app-modal>

### Página de error

La página de error es un _componente de la página_ que siempre se muestra cuando ocurre un error (eso no ocurre durante la renderización del lado del servidor).

<base-alert>

Aunque este archivo se coloca en la carpeta `layouts`, debe tratarse como una página.

</base-alert>

Como se mencionó anteriormente, este diseño es especial, ya que no debes incluir el componente `<Nuxt/>` dentro de tu plantilla. Debes ver este diseño como un componente que se muestra cuando se produce un error (`404`, `500`, etc.). Al igual que en otros componentes de la página, también puedes establecer un diseño personalizado para la página de error de la forma habitual.

Puedes personalizar la página de error agregando un archivo `layouts/error.vue`:

```html{}[layouts/error.vue]
<template>
  <div>
    <h1 v-if="error.statusCode === 404">Página no encontrada</h1>
    <h1 v-else>Ocurrió un error</h1>
    <NuxtLink to="/">Página de inicio</NuxtLink>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error' // puedes establecer un diseño personalizado para la página de error
  }
</script>
```

## Documento: App.html

La plantilla de la aplicación se usa para crear la estructura HTML real del documento para tu aplicación Nuxt.js, que inyecta el contenido y las variables para el encabezado y el cuerpo. Este archivo se crea automáticamente para ti y, en general, rara vez necesita ser modificado. Puedes personalizar la plantilla de la aplicación HTML utilizada por Nuxt.js para incluir scripts o clases CSS condicionales creando un archivo `app.html` en el directorio origen de tu proyecto, que por defecto es el directorio raíz.

La plantilla predeterminada utilizada por Nuxt.js es:

```html{}[app.html]
<!DOCTYPE html>
<html {{ HTML_ATTRS }}>
  <head {{ HEAD_ATTRS }}>
    {{ HEAD }}
  </head>
  <body {{ BODY_ATTRS }}>
    {{ APP }}
  </body>
</html>
```

Un caso en el que se puede usar una plantilla de aplicación personalizada es agregar clases CSS condicionales para IE:

```html{}[app.html]
<!DOCTYPE html>
<!--[if IE 9]><html class="lt-ie9 ie9" {{ HTML_ATTRS }}><![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--><html {{ HTML_ATTRS }}><!--<![endif]-->
  <head {{ HEAD_ATTRS }}>
    {{ HEAD }}
  </head>
  <body {{ BODY_ATTRS }}>
    {{ APP }}
  </body>
</html>
```

<base-alert type="info">

Si bien puedes agregar archivos JavaScript y CSS en `app.html`, se recomienda usar `nuxt.config.js` para estas tareas.

</base-alert>

<quiz :questions="questions"></quiz>
