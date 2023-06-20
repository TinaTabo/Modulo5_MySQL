const {pool} = require("../database");

const getMedia = (req,res)=>{
    console.log('Obtenemos la nota media de un alumno');
}

const getAsignaturasAlumnos = (req,res)=>{
    console.log('Obtenemos los alumnos y las asignaturas a las que estan apuntados');
}

const getAsignaturasProfesores = (req,res)=>{
    console.log('Obtenemos los profesores y las asignaturas que imparten');
}

module.exports = { getMedia, getAsignaturasAlumnos, getAsignaturasProfesores };