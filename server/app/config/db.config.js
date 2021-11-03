var mysql = require('mysql');

const db_connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password"
});

const dbName = 'storyboard_db';

db_connection.connect(function (err) {
  if (err) throw err;
  console.log("Mysql Server Connected");

  // db_connection.query(`CREATE DATABASE ${dbName}`, function (err, result) {
  //   if (err) throw err;
  //   console.log("storyboard_db Created");

  //   // Create Story Table
  //   var create_story_table = "CREATE TABLE storyboard_db.story (" +
  //     "story_id int(11) NOT NULL AUTO_INCREMENT," +
  //     "name varchar(30) NOT NULL," +
  //     "description varchar(200) DEFAULT NULL," +
  //     "creation_date datetime NOT NULL," +
  //     "author varchar(45) NOT NULL," +
  //     "private tinyint(4) NOT NULL," +
  //     "PRIMARY KEY (story_id)," +
  //     "UNIQUE KEY story_id_UNIQUE (story_id)," +
  //     "UNIQUE KEY name_UNIQUE (name)" +
  //     ")"
  //   db_connection.query(create_story_table, function (err, result) {
  //     if (err) throw err;
  //     console.log("story Table Created");
  //   });

    // Other tables
  // });



});

exports.connection = db_connection;