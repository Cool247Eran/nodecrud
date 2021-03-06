var mysql = require('mysql');
var db;

var settings = {
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'crudappdb'
};

function connectDatabase() {
    if(!db) {
        db = mysql.createConnection(settings);

        db.connect(function (err) {
            if(!err) {
                console.log('Database Connected !');
            } else {
                console.log('Error Database Connection !');
            }
        })
    }

    return db;
}

module.exports = connectDatabase();