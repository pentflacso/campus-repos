const express = require('express');
const https = require('https');
const fs = require('fs');

const app = express();
const port = 3000;

// Cargar los certificados SSL
const options = {
  key: fs.readFileSync('key.pem'), // Clave privada
  cert: fs.readFileSync('cert.pem'), // Certificado
};

// Servir archivos estáticos desde la carpeta actual
app.use(express.static(__dirname));

// Crear el servidor HTTPS
https.createServer(options, app).listen(port, () => {
  console.log(`Servidor HTTPS corriendo en https://localhost:${port}`);
});
