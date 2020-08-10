---
title: Instalación
description: Aquí encontrarás información sobre cómo configurar y ejecutar un proyecto de Nuxt.js en 4 pasos.
position: 1
category: get-started
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/01_get_started/01_installation?fontsize=14&hidenavigation=1&theme=dark
---

## Requisitos previos

Aquí encontrarás información sobre cómo configurar y ejecutar un proyecto de Nuxt.js en 4 pasos.

<base-alert type="info">

Otra forma de comenzar con Nuxt.js es usar [CodeSandbox](https://template.nuxtjs.org), ya que es una excelente manera de practicar rápidamente con Nuxt.js y/o compartir tu código con otras personas.

</base-alert>

### Node

[node](https://nodejs.org/en/download/) - al menos la versión 8.9.0

_Te recomendamos tener instalada la versión más reciente._

### Editor de texto

Usa el que más te guste, pero te recomendamos [VSCode](https://code.visualstudio.com/).

### Terminal

Usa la que más te guste, pero te recomendamos la [terminal integrada](https://code.visualstudio.com/docs/editor/integrated-terminal) de VSCode.

## Comenzando desde cero

La creación de un proyecto Nuxt.js desde cero solo requiere de un archivo y un directorio.

En este ejemplo en particular, usaremos la terminal para crear los directorios y archivos, pero siéntete libre de crearlos usando el editor que elijas.

### Configura tu proyecto

Para comenzar, crea un directorio vacío con el nombre de tu proyecto y navega hasta él:

```bash
mkdir <project-name>
cd <project-name>
```

_Reemplaza `<project-name>` con el nombre de tu proyecto._

Luego crea un archivo llamado `package.json`:

```bash
touch package.json
```

Abre el archivo package.json en tu editor de código y llénalo con este JSON:

```json{}[package.json]
{
  "name": "my-app",
  "scripts": {
    "dev": "nuxt",
    "build": "nuxt build",
    "generate": "nuxt generate",
    "start": "nuxt start"
  }
}
```

`scripts` define los comandos Nuxt.js que se ejecutarán con el comando `npm run <command>`.

#### **¿Qué es el archivo package.json?**

El `package.json` es como la tarjeta de identificación de tu proyecto. Si no sabes qué es el archivo `package.json`, te recomendamos encarecidamente que leas rápidamente la [documentación de NPM](https://docs.npmjs.com/creating-a-package-json-file).

### Instalar nuxt

Una vez que hayas creado el archivo `package.json`, agrega `nuxt` a tu proyecto a través de `npm` o `yarn` como se muestra a continuación:

<code-group>
  <code-block label="Yarn" active>

```bash
yarn add nuxt
```

  </code-block>
  <code-block label="NPM">

```bash
npm install nuxt
```

  </code-block>
</code-group>

Este comando agregará a `nuxt` como una dependencia a tu proyecto y al archivo `package.json` automáticamente. También se creará el directorio `node_modules`, que es donde se almacenan todos los paquetes instalados y sus dependencias.

<base-alert type="info">

También se crea un archivo `yarn.lock` o `package-lock.json` que asegura una instalación consistente y dependencias compatibles de tus paquetes instalados en el proyecto.

</base-alert>

### Crea tu primera página

Nuxt.js transforma cada archivo `*.vue` dentro del directorio `pages` como una ruta para la aplicación.

Crea el directorio `pages` en tu proyecto:

```bash
mkdir pages
```

Luego, crea el archivo `index.vue` en el directorio `pages`:

```bash
touch pages/index.vue
```

Es importante que esta página se llame `index.vue` ya que es la página predeterminada que Nuxt muestra cuando se abre la aplicación. Es la página de inicio y debe llamarse index.

Abre el archivo `index.vue` en tu editor y agrega el siguiente contenido:

```html{}[pages/index.vue]
<template>
  <h1>¡Hola Mundo!</h1>
</template>
```

### Iniciar el proyecto

Ejecuta tu proyecto escribiendo uno de los siguientes comandos en la terminal:

<code-group>
  <code-block label="Yarn" active>

```bash
yarn dev
```

  </code-block>
  <code-block label="NPM">

```bash
npm run dev
```

  </code-block>
</code-group>

<base-alert type="info">

Usamos el comando dev cuando ejecutamos la aplicación en modo de desarrollo.

</base-alert>

La aplicación ahora se está ejecutando en **[http://localhost:3000](http://localhost:3000/).**

Ábrelo en tu navegador haciendo clic en el enlace de la terminal y deberías ver el texto "¡Hola Mundo!" que copiamos en el paso anterior.

<base-alert type="info">

Al iniciar Nuxt.js en modo de desarrollo, se estarán observando los cambios en los archivos en la mayoría de los directorios, por lo que no es necesario reiniciar la aplicación cuando, por ejemplo, se agreguen nuevas páginas

</base-alert>

<base-alert type="warning">

Cuando ejecutes el comando dev, se creará la carpeta `.nuxt`. Esta carpeta debe ignorarse del control de versiones. Puedes ignorar los archivos creando un archivo `.gitignore` en el directorio raíz del proyecto y agregando a este la siguiente linea `.nuxt`.

</base-alert>

### Paso extra

Crea una página llamada `fun.vue` en el directorio `pages`.

Agrega un `<template></template>` e incluye un encabezado con una frase divertida dentro.

Luego, ve a tu navegador y mira la nueva página en **[http://localhost:3000/fun](http://localhost:3000/fun).**

<base-alert type="info">

Crear un directorio con el nombre `more-fun` y colocar dentro un archivo llamado `index.vue` dará el mismo resultado que si se creara un archivo llamado `more-fun.vue`

</base-alert>

<app-modal>
  <code-sandbox :src="csb_link"></code-sandbox>
</app-modal>

## Usando create-nuxt-app

Para comenzar rápidamente, puedes usar [create-nuxt-app](https://github.com/nuxt/create-nuxt-app).

Asegúrate de tener npx instalado (npx viene instalado de forma predeterminada desde NPM 5.2.0) o npm v6.1 o yarn.

<code-group>
  <code-block label="Yarn" active>

```bash
yarn create nuxt-app <project-name>
```

  </code-block>
  <code-block label="NPX">

```bash
npx create-nuxt-app <project-name>
```

  </code-block>
    <code-block label="NPM">

```bash
npm init nuxt-app <project-name>
```

  </code-block>

</code-group>

La herramienta te hará algunas preguntas (nombre, opciones de Nuxt, framework de la interfaz de usuario, TypeScript, linter, framework de pruebas, etc.), cuando las respondas, instalará todas las dependencias, por lo que el siguiente paso es navegar a la carpeta del proyecto y ejecutarlo con:

<code-group>
  <code-block label="Yarn" active>

```bash
cd <project-name>
yarn dev
```

  </code-block>
  <code-block label="NPM">

```bash
cd <project-name>
npm run dev
```

  </code-block>
</code-group>

La aplicación ahora se está ejecutando en [http://localhost:3000](http://localhost:3000). ¡Bien hecho!
