# 🛒 API REST - FakeStore Backend (Entrega Final Node.js)

Este proyecto es una API RESTful construida con Node.js, Express y Firebase Firestore. Permite realizar operaciones CRUD sobre productos de una tienda online y cuenta con autenticación mediante JWT.

## 🚀 Requisitos

- Node.js (v14 o superior)
- Cuenta en Firebase con Firestore habilitado
- Variables de entorno configuradas en un archivo `.env`

## 📦 Instalación

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/AcTyniO/ProyectoFinal
   cd 
   ```

2. Instalar dependencias:

   ```bash
   npm install
   ```

3. Crear un archivo `.env` con las siguientes variables:

   ```
   PORT=3000
   FIREBASE_API_KEY=...
   FIREBASE_AUTH_DOMAIN=...
   FIREBASE_PROJECT_ID=...
   FIREBASE_STORAGE_BUCKET=...
   FIREBASE_MESSAGING_SENDER_ID=...
   FIREBASE_APP_ID=...
   JWT_SECRET=unaClaveSecreta123
   ```

4. Ejecutar la aplicación:

   ```bash
   npm run start
   ```

---

## 🛠️ Tecnologías Usadas

- Node.js
- Express.js
- Firebase Firestore
- JWT (jsonwebtoken)
- CORS
- dotenv

---

## 🗂️ Estructura del Proyecto

```
├── controllers/
├── models/
├── routes/
├── services/
├── middlewares/
├── config/
├── .env
├── index.js
├── package.json
```

---

## 🔐 Autenticación

La ruta `/auth/login` acepta un `username` y `password`. Si son válidos, devuelve un **JWT token**.

### Usuario de prueba

```json
{
  "username": "HomeroSimpson",
  "password": "Callefalsa123"
}
```

### Ejemplo de login

```http
POST /auth/login
Content-Type: application/json

{
  "username": "HomeroSimpson",
  "password": "Callefalsa123"
}
```

Respuesta:

```json
{
  "token": "BearerToken..."
}
```

---

## 📌 Endpoints de Productos

Todos los endpoints POST y DELETE requieren autenticación (`Authorization: Bearer <token>`)

### 🔹 Obtener todos los productos

```http
GET /api/products
```

### 🔹 Obtener producto por ID

```http
GET /api/products/:id
```

### 🔹 Crear nuevo producto

```http
POST /api/products/create
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Remera Verde",
  "price": 500,
  "category": "ropa"
}
```

### 🔹 Eliminar producto

```http
DELETE /api/products/:id
Authorization: Bearer <token>
```

---

## ⚠️ Manejo de errores

- `404`: Ruta no encontrada
- `401`: Token no enviado
- `403`: Token inválido o expirado
- `400`: Error de validación o formato
- `500`: Error interno del servidor

---

## 👨‍💻 Autor
Cesar Rapalini
<<<<<<< HEAD
Proyecto desarrollado como entrega final del curso de Node.js en Aula Virtual.
=======
Proyecto desarrollado como entrega final del curso de Node.js
>>>>>>> 121f197d97ea9180be4a679809ae574558c1a4a3
