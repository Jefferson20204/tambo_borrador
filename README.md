# Borrador para el proyecto de delivery tambo

![Logo de tambo](https://marketing-peru.beglobal.biz/wp-content/uploads/2024/11/logo-tambo.png)

# Fronted

## 📦 Instalación de dependencias esenciales para REACT

Este proyecto utiliza varias librerías fundamentales para manejar enrutamiento, estado global, autenticación y llamadas HTTP. A continuación se detallan las dependencias requeridas y cómo instalarlas con `npm`.

### 🔗 Axios

Cliente HTTP para realizar peticiones al backend.

```bash
npm install axios
```

### 🚦 React Router DOM

Manejo del enrutamiento en la aplicación React.

```bash
npm install react-router-dom
```

### 🧠 React Redux

Integración de Redux con React para manejo de estado global.

```bash
npm install react-redux
```

### 🛠️ Redux Toolkit

Conjunto de utilidades recomendadas para escribir lógica Redux de forma más eficiente y segura.

```bash
npm install @reduxjs/toolkit
```

### 🔐 JWT Decode

Decodificador de tokens JWT del lado del cliente.

```bash
npm install jwt-decode
```

> ✅ **Requisito importante:** Asegúrate de estar utilizando **React 18 o superior** para que `createRoot` desde `react-dom/client` funcione correctamente.

```js
import { createRoot } from "react-dom/client";
```

---

# Backend

## ☕ Requisitos para el Backend (Spring Boot 3.4.5)

Antes de compilar y ejecutar este backend, asegúrate de tener instalado y configurado lo siguiente:

### ✅ Java 21

Spring Boot 3.4.5 requiere **Java 21**. Puedes descargarlo desde el sitio oficial de Oracle o utilizar una distribución alternativa como OpenJDK (Adoptium).

#### 🔧 Configurar JAVA_HOME

1. Verifica que Java esté instalado:

```bash
java -version
```

2. Configura la variable de entorno `JAVA_HOME`:

**Linux/macOS:**

Agrega a tu archivo `~/.bashrc`, `~/.zshrc` o similar:

```bash
export JAVA_HOME=/ruta/a/java-21
export PATH=$JAVA_HOME/bin:$PATH
```

**Windows:**

- Ve a _Configuración del sistema > Variables de entorno_.
- Crea una nueva variable `JAVA_HOME` apuntando al directorio de instalación de Java.
- Agrega `%JAVA_HOME%\bin` a la variable `Path`.

## 🎥 Tutorial en YouTube

[![Tutorial en YouTube](https://i.ytimg.com/vi/4WKo13f2Qpc/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA1KS4sC5u_qWUKkSEsAETT3ySk_Q)](https://www.youtube.com/watch?v=4WKo13f2Qpc)

---

### 📦 Maven

Maven es el sistema de construcción utilizado para compilar y gestionar dependencias del proyecto Spring Boot.

#### 📥 Instalar Maven

Puedes descargar Maven desde: https://maven.apache.org/download.cgi

Verifica la instalación con:

```bash
mvn -version
```

#### 🔧 Configurar MAVEN_HOME

**Linux/macOS:**

```bash
export MAVEN_HOME=/ruta/a/maven
export PATH=$MAVEN_HOME/bin:$PATH
```

**Windows:**

- Agrega `MAVEN_HOME` como variable de entorno.
- Añade `%MAVEN_HOME%\bin` al `Path`.

---

Una vez que tengas Java 21 y Maven correctamente instalados y configurados, podrás compilar y ejecutar el backend con:

```bash
mvn spring-boot:run
```

## 🎥 Tutorial en YouTube

[![Tutorial en YouTube](https://i.ytimg.com/vi/Rb1hViGAceE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLATGtWEjSEf5_PhGGcLQYIe2xLqWQ)](https://www.youtube.com/watch?v=Rb1hViGAceE)

## 🗄️ Configuración de la Base de Datos

Este proyecto requiere una base de datos llamada `tambo_bd`.

### 📌 Paso 1: Crear la base de datos

Asegúrate de tener instalado un motor de base de datos como **MySQL**, **PostgreSQL**, o el que se utilice en este proyecto. Luego, crea la base de datos ejecutando el siguiente comando en tu cliente de base de datos:

#### Ejemplo en MySQL:

```sql
CREATE DATABASE tambo_bd;
```
