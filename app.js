const express = require('express');
const app = express();

// Middleware para habilitar CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Cambia '*' por el origen permitido si es necesario
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Rutas de tu servidor aquí
// ...

// Puerto en el que escucha el servidor
const port = process.env.PORT || 3003;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
