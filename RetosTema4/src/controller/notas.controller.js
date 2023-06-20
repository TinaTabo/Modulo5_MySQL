const {pool} = require("../database");

async function getMedia(req,res){
    const params = [req.query.id];
    let sql;
    //-- comprobar si existe una id de alumno. Si existe se pide ese alumno
    //-- sino se piden todos.
    if (req.query.id != undefined) {
        sql = `SELECT AVG(mark) AS nota_media_del_Alumno FROM marks WHERE student_id=?`;
    }

    //-- Envío de los datos optenidos por la petición.
    try {
        const [result] = await pool.query(sql,params);
        res.send(result);
    } catch (error) {
        res.send(error)
    }
}

async function getAsignaturasAlumnos(req,res){
    const params = [req.query.id];
    let sql;
    //-- comprobar si existe una id de alumno. Si existe se pide ese alumno
    //-- sino se piden todos.
    if (req.query.id != undefined) {
        sql = `SELECT first_name, last_name, title FROM students AS s INNER JOIN subjects AS sub ON (s.group_id=sub.subject_id) WHERE student_id=?`;
    }else{
        sql = `SELECT first_name, last_name, title FROM students AS s INNER JOIN subjects AS sub ON (s.group_id=sub.subject_id);`;
    }

    //-- Envío de los datos optenidos por la petición.
    try {
        const [result] = await pool.query(sql,params);
        res.send(result);
    } catch (error) {
        res.send(error)
    }
}

async function getAsignaturasProfesores(req,res){
    const params = [req.query.id];
    let sql;
    //-- comprobar si existe una id de alumno. Si existe se pide ese alumno
    //-- sino se piden todos.
    if (req.query.id != undefined) {
        sql = `SELECT first_name AS teacher_name, last_name AS teacher_lastname, sub.title AS subjects FROM teachers AS t
                JOIN subject_teacher AS st ON t.teacher_id=st.teacher_id
                JOIN subjects AS sub ON st.subject_id=sub.subject_id
                WHERE t.teacher_id = ?
                GROUP BY first_name, last_name, sub.title;`;
    }else{
        sql = `SELECT first_name AS teacher_name, last_name AS teacher_lastname, sub.title AS subjects FROM teachers AS t
                JOIN subject_teacher AS st ON t.teacher_id=st.teacher_id
                JOIN subjects AS sub ON st.subject_id=sub.subject_id
                GROUP BY first_name, last_name, sub.title;`;
    }

    //-- Envío de los datos optenidos por la petición.
    try {
        const [result] = await pool.query(sql,params);
        res.send(result);
    } catch (error) {
        res.send(error)
    }
}

module.exports = { getMedia, getAsignaturasAlumnos, getAsignaturasProfesores };