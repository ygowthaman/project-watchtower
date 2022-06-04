const model = require("../models");
const story = model.story;
const db = require('../config/db.config');

const db_name = 'storyboard_db';
const table_name = 'story';

// exports.create = (req, res) => {
//   req.body.creation_date = new Date();
//   db.query(`INSERT INTO ${db_name}.${table_name} SET ?`, req.body, (err, results, fields) => {
//     if (err) {
//       res.send({ error: err });
//       throw err;
//     } else {
//       res.send(results);
//     }
//   });
//   const results = db.get(get_query, []);
//   res.send({ data: results });
// };

exports.update = (req, res) => {
  const update_query = `UPDATE ${db_name}.${table_name} SET ` +
    `name = '${req.body.name}', ` +
    `description = '${req.body.description}', ` +
    `author = '${req.body.author}', ` +
    `private = ${req.body.private} ` +
    `WHERE story_id = ${db.connection.escape(req.params.id)}`;
  const results = db.run(update_query, []);
  res.send({ data: results });
};

exports.delete = (req, res) => {
  const delete_query = `DELETE FROM ${db_name}.${table_name} ` +
    `WHERE story_id=${db.connection.escape(req.params.id)}`;
  const results = db.run(delete_query, []);
  res.send({ data: results });
};

exports.get = (req, res) => {
  const get_query = `SELECT * FROM ${db_name}.${table_name} ` +
    `WHERE story_id=${req.params.id}`;
  const results = db.get(get_query, []);
  res.send({ data: results });
};

exports.getAll = (req, res) => {
  const results = db.all(`SELECT * FROM ${table_name}`, []);
  res.send({ data: results });
};
