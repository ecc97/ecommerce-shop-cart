# 🛒 HubHobby

Este es un proyecto de comercio electrónico con carrito de compras desarrollado con Next.js y TypeScript. Implementa autenticación, gestión de productos y carrito de compras, internacionalización y almacenamiento seguro de usuarios con Supabase.

## 🚀 Tecnologías Utilizadas

- 🖥️ **Next.js 14** - Framework de React para aplicaciones web.
- ⚛️ **React** - Biblioteca de JavaScript para la creación de interfaces de usuario.
- 🟦 **TypeScript** - Superconjunto tipado de JavaScript.
- 🎨 **Styled-Components** - Librería para estilos en componentes de React.
- 🌊 **Tailwind CSS** - Framework de utilidades CSS.
- 🔑 **Next-Auth** - Manejo de autenticación en Next.js.
- 🔥 **Supabase** - Base de datos y autenticación de usuarios.
- 🌍 **Next-Intl** - Para la internacionalización (inglés y español).
- 🔗 **Axios** - Para realizar peticiones HTTP.
- 🔐 **BcryptJS** - Para hashear/encriptar contraseñas al registrar.
- 🔑 **JsonWebToken (JWT)** - Para generar tokens al registrar e iniciar sesión.
- 🗂️ **Redux** - Para manejar el estado global, incluyendo carrito de compras y "me gusta" en productos.
- ⚠️ **SweetAlert** - Para alertas y notificaciones visuales.
- 🛍️ **Fake Store API** - API de terceros utilizada para obtener productos.

## ✨ Funcionalidades

### 🔑 Autenticación
- Registro y login de usuarios con Supabase.
- Hasheo de contraseñas con bcryptjs.
- Generación de tokens JWT para sesiones seguras.
- Manejo de sesiones con Next-Auth.

### 🛒 Carrito de Compras
- Agregar y eliminar productos del carrito con Redux.
- Persistencia del carrito entre sesiones.

### 🏷️ Gestión de Productos
- Consumo de la API Fake Store para mostrar productos.
- Posibilidad de dar "me gusta" a productos.
- Visualización detallada de productos.

### 🌐 Internacionalización
- Cambio dinámico de idioma entre español e inglés con Next-Intl.

## 🔧 Variables de Entorno

Asegúrate de configurar las siguientes variables de entorno en un archivo `.env.local`:

```env
SUPABASE_URL=tu_supabase_url
SUPABASE_ANON_KEY=tu_supabase_anon_key
JWT_SECRET=tu_secreto_jwt
```

## 📦 Instalación y Configuración

1. 📥 Clonar el repositorio:
   ```sh
   git clone https://github.com/tu_usuario/ecommerce-shop-cart.git
   ```

2. 📦 Instalar dependencias:
   ```sh
   cd ecommerce-shop-cart
   npm install
   # o
   yarn install
   ```

3. ⚙️ Configurar variables de entorno en `.env.local`.

4. ▶️ Ejecutar el servidor de desarrollo:
   ```sh
   npm run dev
   # o
   yarn dev
   ```

## 🚀 Construcción y Despliegue

Para construir el proyecto en modo producción:

```sh
npm run build
# o
yarn build
```

Para iniciar el servidor en producción:

```sh
npm start
# o
yarn start
```

## 📜 Licencia

Este proyecto está bajo la licencia MIT.

