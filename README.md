#  <img src="https://nodejs.org/static/images/logo.svg" alt="Node.js Logo" width="200"/> Proyecto Sistema de Gestión de Eventos

## Descripción

Este proyecto, desarrollado durante el bootcamp, es una aplicación web que permite a los usuarios organizar y gestionar eventos. Los usuarios pueden crear eventos, registrarse para asistir a eventos, gestionar la lista de asistentes y recibir notificaciones de eventos. El sistema soporta la gestión de diferentes tipos de eventos, como conferencias, talleres y reuniones, y ofrece una interfaz intuitiva tanto para organizadores como para asistentes.

## Objetivos de Aprendizaje

- Utilizar Node.js y Express.js para desarrollar una aplicación web completa.
- Implementar un patrón MVC para estructurar la aplicación.
- Utilizar MongoDB y Mongoose para la gestión de datos.
- Implementar autenticación de usuarios utilizando sesiones, cookies y JWT.
- Diseñar y consumir APIs RESTful.
- Integrar servicios de notificaciones por correo electrónico.
- Refactorizar y optimizar el código para un mejor rendimiento.

---

## Tecnologías Utilizadas

- **Node.js** ![Node.js Logo](https://nodejs.org/static/images/logo.svg): Entorno de ejecución de JavaScript en el servidor.
- **Express.js** ![Express.js Logo](https://expressjs.com/images/express-facebook-share.png): Framework para construir aplicaciones web en Node.js.
- **MongoDB** ![MongoDB Logo](https://1000marcas.net/wp-content/uploads/2021/06/MongoDB-Logo.png): Base de datos NoSQL utilizada para la gestión de datos.
- **Mongoose** ![Mongoose Logo](https://mongoosejs.com/docs/images/mongoose5_62x30_transparent.png): Biblioteca para modelar datos en MongoDB con Node.js.
- **JWT (JSON Web Tokens)** ![JWT Logo](https://jwt.io/img/logo.svg): Para autenticación de usuarios.
- **Express Validator** ![Express Validator Logo](https://repository-images.githubusercontent.com/2518028/adb2df00-9431-11e9-9ccd-26f012b80f29): Para la validación de datos en el servidor.

---

## Instrucciones para la instalación y configuración del entorno de desarrollo

### Clonar el repositorio

Primero, clona el repositorio del proyecto desde GitHub:

```bash
git clone <URL_del_repositorio>
cd <nombre_del_repositorio>
```

### Instalar las dependencias

A continuación, instala las dependencias del proyecto usando npm:

```bash
npm install

npm install express express-validator
```

### Configurar el entorno

Crea un archivo .env en la raíz del proyecto y añade las variables de entorno necesarias. Por ejemplo:

```bash
MONGODB_URI=mongodb_uri
APP_PORT=3000
JWT_SECRET=your_secret
EMAIL_USER=example@gmail.com
EMAIL_PASS=kjhkicv
```

### Iniciar la aplicación

Finalmente, inicia la aplicación:

```bash
npm run dev
```

---

## Guía de Uso

Esta guía explica cómo utilizar las principales funcionalidades del sistema a través de la API y cómo consultarlas usando Postman.

### 1. Registro de Nuevos Usuarios
Endpoint: POST /api/auth/register

Descripción: Registra un nuevo usuario en el sistema.

```json
{
  "username": "Juan Pérez",
  "email": "juan.perez@example.com",
  "password": "contraseña_segura"
}
```

### 2. Autenticación de Usuario
Endpoint: POST /api/auth/login

Descripción: Autentica a un usuario mediante sesiones y cookies o JWT.

```json
{
  "email": "usuario@example.com",
  "password": "contraseña_segura"
}
```

### 3. Gestión de Eventos
## a. Crear un Evento
Endpoint: POST /api/events

Descripción: Crea un nuevo evento.

```json
{
  "title": "Título del Evento",
  "description": "Descripción del Evento",
  "date": "2024-08-15T18:00:00Z",
  "type": "conferencia",
  "location": "Auditorio principal",
  "capacity": 100,
  "organizer": "John Doe",
  "attendees": []
}
```

## b. Editar un Evento
Endpoint: PUT /api/events/:id

Descripción: Edita un evento existente.

```json
{
  "_id": "66ac28424838e12b34582b27",
    "title": "Sesión NodeJS 18 - Fecha de la sesión 02-08-2024",
    "description": "Sesión normal del curso.",
    "date": "2024-11-15T10:00:00.000Z",
    "location": "Vía Zoom",
    "type": "conference",
    "organizer": {
        "_id": "09090909090909909090",
        "username": "Juan",
        "email": "usuario@gmail.com"
    },
    "attendees": [],
    "capacity": 1,
    "notifications": [],
    "__v": 0
}
```

## c. Eliminar un Evento
Endpoint: DELETE /api/events/:id

Descripción: Elimina un evento existente.

```json
{
  "mensaje": "Evento eliminado exitosamente"
}
```

## d. Visualizar la Lista de Eventos
Endpoint: GET /api/events

Descripción: Obtiene la lista de eventos disponibles.

```json
[
  {
    "_id": "66b1906d53b780fd531a1937",
        "title": "Sesión 18 Curso Nodejs",
        "description": "Evento para desarrolladores web, con talleres y charlas sobre las últimas tendencias.",
        "date": "2024-11-15T10:00:00.000Z",
        "location": "Auditorio principal",
        "type": "conference",
        "organizer": {
            "_id": "66b189b753b780fd531a1932",
            "username": "Juan",
            "email": "usuario@gmail.com"
        },
        "attendees": [],
        "capacity": 100,
        "notifications": [],
        "createdAt": "2024-08-06T02:54:37.696Z",
        "updatedAt": "2024-08-06T02:54:37.696Z",
        "__v": 0
  }
]
```

### 4. Gestión de Usuario
## a. Editar un Usuario
Endpoint: PUT /api/users/profile

Descripción: Edita la información de un usuario existente.

```json
{
  "username": "acheco",
  "email": "acheco@gmail.com",
  "role": "admin"
}
```

## b. Eliminar un Usuario
Endpoint: DELETE /api/users/:id

Descripción: Elimina un usuario existente del sistema.

```json
{
  "msg": "Usuario eliminado exitosamente"
}
```

## c. Obtener la Lista de Usuarios
Endpoint: GET /api/users

Descripción: Obtiene la lista de todos los usuarios registrados en el sistema.

```json
{
    "_id": "66b189b753b780fd531a1932",
    "username": "acheco",
    "email": "acheco@gmail.com",
    "password": "$2b$10$YPZLzL6O3Za/TDZG51oETuaeI/HMft7p/KwuxWisTPbotf.r8XcdK",
    "role": "user",
    "createdEvents": [],
    "registeredEvents": [],
    "createdAt": "2024-08-06T02:25:59.050Z",
    "updatedAt": "2024-08-06T02:25:59.050Z",
    "__v": 0
}
```

## Colección de Postman

Puedes utilizar la siguiente colección de Postman para validar la documentación de la API del proyecto, así como para interactuar con los endpoints utilizados.

[Ver Documentación API](https://documenter.getpostman.com/view/28758682/2sA3rxqtLi)
