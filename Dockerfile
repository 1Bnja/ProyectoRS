# Etapa de desarrollo
FROM node:20-alpine as development

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer puerto de desarrollo de Vite
EXPOSE 5173

# Comando para ejecutar en modo desarrollo
CMD ["npm", "run", "dev", "--", "--host"]


# Etapa de construcción
FROM node:20-alpine as build

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Construir la aplicación
RUN npm run build


# Etapa de producción con nginx
FROM nginx:alpine as production

# Copiar la build desde la etapa anterior
COPY --from=build /app/dist /usr/share/nginx/html

# Copiar configuración personalizada de nginx (opcional)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer puerto 80
EXPOSE 80

# Comando para ejecutar nginx
CMD ["nginx", "-g", "daemon off;"]
