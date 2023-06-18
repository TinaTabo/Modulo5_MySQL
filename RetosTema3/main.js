const mysql = require('mysql2/promise');

const connect = async()=>{
    try{
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'Secur3MyS4QL',
            database: 'escuela'
        });

        console.log('Conexión correcta');


        //-- Nombres y apellidos de los alumnos y las asignaturas en las que están apuntados.
        const sql1 = `SELECT first_name, last_name, title FROM students AS s JOIN subjects AS sub ON (s.group_id=sub.subject_id);`;
        const [result1] = await connection.execute(sql1);
        console.log('------------Reto-1------------');
        console.log(result1);

        //-- Nombres y apellidos de los profesores y las asignaturas que imparten.
        const sql2 = `SELECT first_name, last_name, title FROM teachers AS t JOIN subjects AS s ON (t.subject_id=s.subject_id);`;
        const [result2] = await connection.execute(sql2);
        console.log('------------Reto-2------------');
        console.log(result2);

        //-- Número total de alumnos por asignatura, nombre de la asignatura y nombre y apellidos del profesor/a que lo imparte.
        const sql3 = `SELECT t.first_name, t.last_name, s.title, COUNT(stu.group_id) AS num_students FROM teachers AS t JOIN subjects AS s ON (t.subject_id=s.subject_id) JOIN students AS stu ON (t.subject_id=stu.group_id) GROUP BY t.teacher_id;`
        const [result3] = await connection.execute(sql3);
        console.log('------------Reto-3------------');
        console.log(result3);

    }catch(err){
        console.log(err);
        await connection.end();
    }
};

connect();