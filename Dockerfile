# Usa una imagen base de Node.js
FROM node:18-alpine

# Instala PM2 globalmente
RUN npm install -g pm2

# Directorio de trabajo
WORKDIR /app

# Copia los archivos de la aplicación
COPY app/package.json .
COPY app/package-lock.json .
RUN npm install

# Copia el resto de la aplicación
COPY app .

# Copia la configuración de PM2
COPY pm2.config.js .

# Puerto expuesto (ajusta según tu app)
EXPOSE 3000

# Comando para iniciar con PM2
CMD ["pm2-runtime", "start", "pm2.config.js"]
