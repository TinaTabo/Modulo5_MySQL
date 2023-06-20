const {pool} = require("../database");

async function getAlumnos(req,res){
    const params = [req.query.id];
    let sql;
    //-- comprobar si existe una id de alumno. Si existe se pide ese alumno
    //-- sino se piden todos.
    if (req.query.id != undefined) {
        sql = `SELECT * FROM students WHERE student_id=?`;
    }else{
        sql = `SELECT * FROM students;`;
    }

    //-- Envío de los datos optenidos por la petición.
    try {
        const [result] = await pool.query(sql,params);
        res.send(result);
    } catch (error) {
        res.send(error)
    }
}

async function addAlumno(req,res){
    //-- Obtenemos los datos del nuevo alumno por el body.
    const{student_id,first_name,last_name,group_id,year} = req.body;
    //-- IMPORTANTE: Los parámetros deben ir colocados en el orden en el que se deben insertar en la
    //-- peticion sql.
    const params = [student_id,first_name,last_name,group_id,year];
    let sql = `INSERT INTO students (student_id,first_name,last_name,group_id,year) VALUES (?,?,?,?,?);`;

    try {
        const [result] = await pool.query(sql,params);
        res.send(result);
    } catch (error) {
        res.send(error)
    }
}

async function editAlumno(req,res){
    const{student_id,first_name,last_name,group_id,year} = req.body;
    //-- IMPORTANTE: Los parámetros deben ir colocados en el orden en el que se deben insertar en la
    //-- peticion sql.
    const params = [
        first_name? first_name: null,
        last_name? last_name:   null,
        group_id? group_id:     null,
        year? year:             null,
        student_id
    ];
    let sql = `UPDATE students SET first_name = COALESCE(?,first_name),
                                    last_name = COALESCE(?,last_name),
                                    group_id = COALESCE(?,group_id),
                                    year = COALESCE(?,year)
                                    WHERE student_id = ?;`;

    try {
        const [result] = await pool.query(sql,params);
        res.send(result);
    } catch (error) {
        res.send(error)
    }
}

async function delAlumno(req,res){
    const {student_id} = req.body;
    const params = [student_id];
    let sql = `DELETE FROM students WHERE student_id = ?;`;

    try {
        const [result] = await pool.query(sql,params);
        res.send(result);
    } catch (error) {
        res.send(error)
    }
}

module.exports = { getAlumnos, addAlumno, editAlumno, delAlumno };