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


        //-- Nota media
        const sql1 = `SELECT AVG(mark) FROM marks WHERE subject_id=1;`;
        const [result1] = await connection.execute(sql1);
        console.log('------Nota-media-asignatura-1------');
        console.log(result1);

        //-- Total alumnos
        const sql2 = `SELECT COUNT(*) FROM students;`;
        const [result2] = await connection.execute(sql2);
        console.log('------Total-alumnos------');
        console.log(result2);

        //-- Listar campos de la tabla students_groups
        const sql3 = `SELECT * FROM students_groups;`;
        const [result3] = await connection.execute(sql3);
        console.log('------Campos-de-la-tabla-groups------');
        console.log(result3);

        //-- Eliminar todas las notas > 5 del año pasado
        // const sql4 = `DELETE FROM marks WHERE (mark > 5) AND (date < curdate() AND date > DATE_SUB(NOW(),INTERVAL 1 YEAR));`;
        // const [result4] = await connection.execute(sql4);
        // console.log('Notas > 5 del año pasado eliminadas');

        //-- Listar estudiantes del año en curso
        const sql5 = `SELECT * FROM students WHERE year = YEAR(NOW());`;
        const [result5] = await connection.execute(sql5);
        console.log('------Estudiantes-del-año-en-curso------');
        console.log(result5);

        //-- Calcular el número de profes por asignatura
        const sql6 = `SELECT subject_id, COUNT(*) FROM teachers GROUP BY subject_id;`;
        const [result6] = await connection.execute(sql6);
        console.log('------Profes-por-asignatura------');
        console.log(result6);

        //-- Obtén el id y la nota de los alumnos que tengan un id entre 1 y 20,
        //-- o que tenga una nota mayor de 8 y la nota tenga fecha del año pasado.
        const sql7 = `SELECT student_id, mark FROM marks WHERE (student_id BETWEEN 1 AND 20) OR (mark > 8) AND (date BETWEEN curdate() AND DATE_SUB(NOW(),INTERVAL 1 YEAR));`;
        const [result7] = await connection.execute(sql7);
        console.log('------ID-entre-1y20-O-nota>8-del-año-pasado------');
        console.log(result7);

        //-- Media de las notas que se han dado en el último año por asignatura.
        const sql8 = `SELECT subject_id,AVG(mark) FROM marks WHERE (date BETWEEN DATE_SUB(NOW(),INTERVAL 1 YEAR) AND curdate()) GROUP BY subject_id;`;
        const [result8] = await connection.execute(sql8);
        console.log('------Media-notas-ultimo-año-por-asignatura------');
        console.log(result8);

        //-- Media de las notas que se han dado en el último año por alumno.
        const sql9 = `SELECT student_id,AVG(mark) FROM marks WHERE (date BETWEEN DATE_SUB(NOW(),INTERVAL 1 YEAR) AND curdate()) GROUP BY student_id;`;
        const [result9] = await connection.execute(sql9);
        console.log('------Media-notas-ultimo-año-por-alumno------');
        console.log(result9);


    }catch(err){
        console.log(err);
        await connection.end();
    }
};

connect();