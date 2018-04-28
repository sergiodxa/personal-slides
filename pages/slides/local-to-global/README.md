- intro (index)
- presentación (about)
- now.sh (now.sh)
- regions (regions)
- que es deployment (deployment)

- sitio estático (static)
- archivos del sitio estático (static/files)
- deploy de sitio (static/deploy)
- inspeccionar sitio estático (static/inspect)
- curl sitio estático (static/curl)

- app de node.js (node)
- archivos del app de node.js (node/files)
- deploy de app de node.js (node/deploy)
- inspeccionar app de node.js (node/inspect)
- curl app de node.js (node/curl)
- alias app de node.js (node/alias)

- contenedor de docker (docker)
- archivos del contenedor de docker (docker/files)
- deploy de contenedor de docker (docker/deploy)
- inspeccionar contenedor de docker (docker/inspect)
- curl contenedor de docker (docker/curl)

- repositorio de github (github)
- deploy de repositorio de github (github/deploy)
- inspeccionar repositorio de github (github/inspect)
- curl repositorio de github (github/curl)
- alias repositorio de github (github/alias)

- zeit.world (zeit.world)
- zeit.domains (zeit.domains)

- oss (oss)
- micro (oss/micro)
- next.js (oss/next)
- pkg (oss/pkg)
- hyper (oss/hyper)
- even more! (oss/more)

- preguntas?

# From **Local** to **Global** with a Single Command (index.js)

> Vamos a ver como podemos llevar una aplicación o sitio web desde nuestra computadora (entorno local) a producción replicado de forma global. Todo con un comando.

---

# I'm **Sergio Xalambrí**, _Software Developer_ currently working as Lead Support Engineer at **▲ZEIT**

- [x] **5** years
- [x] **3** jobs
- [x] **3** countries 🇦🇷🇨🇴🇵🇪

---

# **Now** - Realtime Global Deployments

- [x] **Static** Website
- [x] **Node.js** Application
- [x] **Docker** Container

> Hoy les voy quiero hablar sobre Now, una plataforma para hacer despliegue de sitios web estáticos (osea HTML, CSS, JS, imágenes, etc.), aplicaciones de Node.js o cualquier otro tipo de aplicación dentro de un contenedor de Docker

---

# **Static** Website

```
File System
```

> Empecemos por el más simple, un sitio web estático, estos son los archivos, tenemos un index.html que tiene algunas etiquetas, si se fijan hay un h1 con el título del primero slide, este es el HTML del primer slide, el archivo style.css es el CSS de ese slide. Es un sitio super simple

---

# **Deploying** the **Static** Website

```
Terminal
```

---

# **Node.js** Application

```
File System
```

---

# **Deploying** the **Node.js** Application

```
Terminal
```

---

# **Docker** Container

```
File System
```

---

# **Deploying** the **Docker** Container

```
Terminal
```

---

# **Deploying** the **GitHub** Repository

```
Terminal
```

---

# zeit.world - Low-Latency Global DNS

- [x] Dynamic DNS Records
- [x] Instant Propagation
- [x] Zero Configuration

> Junto a Now tenemos a zeit.world, nuestro servicios de DNS global super fácil de configurar (solo hay que usar los nameservers [a-f].zeit.world), cualquier dominio que use zeit.world como DNS va a estar listo para funcionar con Now sin necesitar hacer nada más (pero sin perder la posibilidad de agregar cualquier tipo de registro a nuestro DNS para por ejemplo usar Gmail para nuestro email, o incluso usar zeit.world sin Now)

---

# zeit.domains - Find Your Perfect Domain
## Buy Domains with a Single Command

```
$ now domain buy sergiodxa.com
```

> Y por último tenemos zeit.domains que nos permite comprar dominios ya sea por medio del sitio web (zeit.domains) o usando un solo comando en nuestro CLI

---

# now

> Ahora si vamos a lo importante, vamos a hacer deploy de un proyecto, o más bien de tres proyectos

---

# Sitio web estático

```
File Tree
```

> 

---

# Node.js

```
File Tree
```

> 

---

# Docker

```
File Tree
```

> 

---

# GitHub

```bash
$ now sergiodxa/personal-slides
```

> 