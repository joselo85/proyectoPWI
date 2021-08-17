# PHD Arquitectura y diseño
## Proyecto final para curso de Programador Web Inicial - UTN
### Resumen

El proyecto es una página web dinámica creada para un estudio de arquitectura (PHD arquitectura & diseño). En el frontend se usó Bootstrap y CSS. Para la parte de backend, se usó express.js como framework, se integró una base de datos no relacional (mongoDB). Para manejar el formulario de contacto se usó formspree.io. Para los swipers en la página de details se usó swiper.js. Finalmente se subió todo a Heroku.

## Stack
El proyecto está armado con NodeJS por lo cuál corre en un entorno de NGINX.

Se compone por:

 - Armado web en servidor (SSR)
 - REST API

**Keywords**: NodeJS, EJS, API, MongoDB, Heroku

## Levantar el proyecto
Para levantar el proyecto local:

 1. Descarga del repo
 2. Instalar módulos en el **/website** y en la  **/api**

    *npm i* 

Para que funcione el sitio es necesario primero levantar el servicio en **/api**.

#### Levantar API

 1. Levantar una instancia local de MongoDB que exponga el puerto 27017. 
 2. Crear una base llamada **projects** en MongoDB
 3. Levantar el servicio con el comando `node index.js` dentro de **api/src**. Opcionalmente se puede usar `nodemon index.js` si se va a trabajar sobre la API
 4. La información necesaria para poblar la base de datos se encuentra dentro del archivo projects.js

#### Levantar Website

Una vez corriendo el servicio, levantar el proyecto **website** con los comandos `node app.js` o `nodemon app.js` en la carpeta **/website**


## Consignas del trabajo

El proyecto cuenta de dos partes:
   

#### Cliente
PHD arquitectura y diseño, es un estudio de arquitectura e interiorismo.

  

#### Pedido

Como cliente está interesado en armar una web en donde muestre sus proyectos. Al ser un estudio relativamente nuevo, necesita que su web sea flexible y le permita ir creciendo, también estan interesados en la posibilidad de ser contactados a través de la web.

  

## Aspectos Técnicos

El departamento de diseño relevó lo que quiere el cliente y armó un diseño de la web a realizar.  

### Bootstrap

Como este cliente es un potencial cliente a largo plazo, desde el departamento técnico nos piden que utilicemos Bootstrap para el desarrollo, dada que esta tecnología es conocida por muchos/as desarrolladores/as y nos permite realizar cambios de manera simple.

  
### Web

Entendiendo que el cliente hoy quiere una web, que sea flexible y se adapte al crecimiento de su empresa. El equipo técnico pide que armemos una REST API. Hoy solamente quiere un endpoint de sus proyectos, donde se listen toda la información necesaria, incluyendo imágenes.

 

### Base de Datos

Si bien el cliente aún no tiene una base de datos, sí tiene una lista de los proyectos realizados.
