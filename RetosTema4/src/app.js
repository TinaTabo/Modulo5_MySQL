const express = require("express");
const cors = require("cors");
const alumnosRouters = require("./routers/alumnos.routers");
const notasRouters = require("./routers/notas.routers");
const errorHandling = require("./error/errorHandling");

const app = express();

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(alumnosRouters);
app.use(notasRouters);
app.use((req,res,next)=>{
    res.status(404).json({
        error: true,
        codigo: 404,
        mensaje: "Endpoint no encontrado"
    });
});
app.use(errorHandling);

module.exports = app;