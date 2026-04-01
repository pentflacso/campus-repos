const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Cargar los certificados SSL
const options = {
  key: fs.readFileSync('key.pem'), // Clave privada
  cert: fs.readFileSync('cert.pem'), // Certificado
};

// Rutas auxiliares para el entorno de desarrollo
app.get('/dev', (req, res) => {
  res.send(`
    <script>
      localStorage.setItem("developer", "true");
      alert("✅ Modo Developer habilitado para los estilos.");
    </script>
  `);
});

app.get('/undev', (req, res) => {
  res.send(`
    <script>
      localStorage.removeItem("developer");
      alert("🛑 Modo Developer deshabilitado.");
    </script>
  `);
});

// Servir archivos estáticos desde la carpeta actual
app.use(express.static(path.join(__dirname, 'public')));

// Crear el servidor HTTPS
https.createServer(options, app).listen(port, () => {
  console.log(`Servidor HTTPS corriendo en https://localhost:${port}`);
});
