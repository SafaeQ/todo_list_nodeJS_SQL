// connect database

const mysql = require('mysql2')
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'todo_list_app'
});

con.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL server')
})

module.exports = {
    con,
}