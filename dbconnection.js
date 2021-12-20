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





// let tableSql = 'SELECT * FROM projet;'
// let inserting = "INSERT INTO projet (`title`, `description`, `dueDate`, `completed`) VALUES ?"
// let items = []

// function mySqlQuery(query) {
//     con.query(query, function (err, result) {
//         if (err) throw err;
//         items = result
//         console.log('here we go ', items);
//     })
// }
// console.log(mySqlQuery(tableSql))