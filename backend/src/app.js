const express = require('express');
const app = express();
app.use(express.json());

let eventos = [ ];

app.post('/crearEvento', (req, res) => {

    const datosRecibidos = req.body;
    const nuevoEvento = {
        id: eventos.length + 1,
        empleado: datosRecibidos.empleado,
        estado: "abierto",
        productos: datosRecibidos.productos,
        fecha: new Date()
    }
    eventos.push(nuevoEvento);

    res.json({
        mensaje:"¡Evento creado con éxito!",
        evento: nuevoEvento
    });
});

app.get('ver-eventos', (req, res) => {
    res.json(eventos);
})

app.listen (3000, () => {
    console.log("Servidor listo en el puerto 3000");
})