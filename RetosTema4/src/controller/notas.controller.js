const connection = require("../database");

function getMedia(){
    console.log('Obtenemos la nota media de un alumno');
}

function getAsignaturasAlumnos(){
    console.log('Obtenemos los alumnos y las asignaturas a las que estan apuntados');
}

function getAsignaturasProfesores(){
    console.log('Obtenemos los profesores y las asignaturas que imparten');
}

module.exports = { getMedia, getAsignaturasAlumnos, getAsignaturasProfesores };