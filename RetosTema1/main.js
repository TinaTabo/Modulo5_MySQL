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

        // console.log(`--------AÑADIR-COLUMNA-TABLA-DIRECTION--------`);
        // const sql_addColumn = `ALTER TABLE direction ADD COLUMN country VARCHAR(45) NULL AFTER number;`;
        // const [result_addColumn,data_addColumn] = await connection.execute(sql_addColumn);
        // console.log('Columna añadida');
        // console.log(`----------------------------------------------`);


        // console.log(`--------BORRAR-COLUMNA-TABLA-DIRECTION--------`);
        // const sql_deleteColumn = `ALTER TABLE direction DROP COLUMN number;`;
        // const [result_deleteColumn,data_deleteColumn] = await connection.execute(sql_deleteColumn);
        // console.log('Columna eliminada');
        // console.log(`----------------------------------------------`);


        // console.log(`------------BORRAR-TABLA-DIRECTION------------`);
        // const sql_deleteTable = `DROP TABLE direction`;
        // const [result_deleteTable,data_deleteTable] = await connection.execute(sql_deleteTable);
        // console.log('Tabla Eliminada');
        // console.log(`----------------------------------------------`);


        // console.log(`-------------Todas-las-notas-a-0--------------`);
        // const sql_marksTo0 = `UPDATE marks SET mark = 0`;
        // const [result_marksTo0,data_marksTo0] = await connection.execute(sql_marksTo0);
        // console.log('Notas Actualizadas');
        // console.log(`----------------------------------------------`);


        // console.log(`--------Nombre-y-Apellido-de-los-alumnos------`);
        // const sql_students = `SELECT first_name,last_name FROM students;`;
        // const [result_students,data_students] = await connection.execute(sql_students);
        // console.log(result_students);
        // console.log(`----------------------------------------------`);


        // console.log(`--------Todos-los-datos-de-los-profesores------`);
        // const sql_teachers = `SELECT * FROM teachers;`;
        // const [result_teachers,data_teachers] = await connection.execute(sql_teachers);
        // console.log(result_teachers);
        // console.log(`-----------------------------------------------`);


        // console.log(`---------Borrar-notas-de-más-de-10-años--------`);
        // const sql_marks10 = `DELETE FROM marks WHERE date <= '2013-01-01';`;
        // const [result_marks10,data_marks10] = await connection.execute(sql_marks10);
        // console.log('Notas Actualizadas');
        // console.log(`-----------------------------------------------`);


        // console.log(`--------Todas-las-notas-menores-a-5-=>-5-------`);
        // const sql_marksTo5 = `UPDATE marks SET mark = 5 WHERE mark < 5;`;
        // const [result_marksTo5,data_marksTo5] = await connection.execute(sql_marksTo5);
        // console.log('Notas Actualizadas');
        // console.log(`----------------------------------------------`);

    }catch(err){
        console.log(err);
        await connection.end();
    }
};

connect();