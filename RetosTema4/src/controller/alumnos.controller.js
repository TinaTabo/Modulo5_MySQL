const connection = require("../database");

function getAlumnos(){
    console.log('Obtenemos los datos de los alumnos');
}

function addAlumno(){
    console.log('Añadimos alumnos');
}

function editAlumno(){
    console.log('Editamos alumnos');
}

function delAlumno(){
    console.log('Eliminamos alumnos');
}

module.exports = { getAlumnos, addAlumno, editAlumno, delAlumno };