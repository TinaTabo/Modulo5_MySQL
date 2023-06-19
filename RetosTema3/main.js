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
        const sql2 = `SELECT first_name AS teacher_name, last_name AS teacher_lastname, sub.title AS subjects FROM teachers AS t
                        JOIN subject_teacher AS st ON t.teacher_id=st.teacher_id
                        JOIN subjects AS sub ON st.subject_id=sub.subject_id
                        GROUP BY first_name, last_name, sub.title`;
        const [result2] = await connection.execute(sql2);
        console.log('------------Reto-2------------');
        console.log(result2);

        //-- Número total de alumnos por asignatura, nombre de la asignatura y nombre y apellidos del profesor/a que lo imparte.
        const sql3 = `SELECT COUNT(*) AS students_num, title AS subjects, t.first_name AS teacher_name, t.last_name AS teacher_lastname FROM subjects AS sub
                        JOIN subject_teacher AS st ON sub.subject_id=st.subject_id
                        JOIN teachers AS t ON st.teacher_id=t.teacher_id
                        JOIN students_groups AS g ON st.group_id=g.group_id
                        JOIN students AS stu ON g.group_id=stu.group_id
                        GROUP BY title,t.first_name,t.last_name;`
        const [result3] = await connection.execute(sql3);
        console.log('------------Reto-3------------');
        console.log(result3);

    }catch(err){
        console.log(err);
        await connection.end();
    }
};

connect();