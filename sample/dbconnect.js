var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'pjs618!!',
    database : 'fintech',
    port : "3306"
});

connection.connect();


connection.query('SELECT * FROM fintech.user;', function (error, results, fields) {
    if (error) throw error;

    console.log(results);
    for(var i=0; i<results.length; i++){
        var member = results[i];
        console.log(member.email)
    }
});


connection.end();