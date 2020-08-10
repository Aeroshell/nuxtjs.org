---
title: Actualizar
description: Actualizar Nuxt.js es rápido, aunque más complicado que actualizar tu package.json
position: 5
category: get-started
---

> Actualizar Nuxt.js es rápido, aunque más complicado que actualizar tu package.json

Si estás actualizando a Nuxt v2.14 y quieres utilizar alojamiento estático, deberás agregar [target: static](/guides/features/deployment-targets#static-hosting) a tu archivo `nuxt.config.js` para que el comando `generate` funcione correctamente.

```js{}[nuxt.config.js]
export default {
  target: 'static'
}
```

## Comenzando

1. Revisa las [notas de la versión](/guide/release-notes) a la que quieres actualizar para ver si hay instrucciones adicionales para esa versión en particular.
2. Actualiza la versión especificada para el paquete `nuxt` en tu archivo `package.json`.

Después de este paso, las instrucciones varían dependiendo de si estás utilizando Yarn o NPM. _[Yarn](https://yarnpkg.com/en/docs/usage) es el administrador de paquetes preferido para trabajar con Nuxt, ya que es la herramienta de desarrollo con la cual se han escrito las pruebas._

## Yarn

3. Elimina el archivo `yarn.lock`
4. Elimina el directorio `node_modules`
5. Ejecuta el comando `yarn`
6. Una vez completada la instalación y ejecutadas las pruebas, considera también actualizar otras dependencias. Se puede usar el comando `yarn outdated`.

## NPM

3. Elimina el archivo `package-lock.json`
4. Elimina el directorio `node_modules`
5. Ejecuta el comando `npm install`
6. Una vez completada la instalación y ejecutadas las pruebas, considera también actualizar otras dependencias. Se puede usar el comando `npm outdated`.
