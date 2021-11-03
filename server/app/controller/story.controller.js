const model = require("../models");
const story = model.story;
const db = require('../config/db.config');

const db_name = 'storyboard_db';
const table_name = 'story';

exports.create = (req, res) => {
  req.body.creation_date = new Date();
  db.connection.query(`INSERT INTO ${db_name}.${table_name} SET ?`, req.body, (error, results, fields) => {
    if (err) {
      res.send({ error: err });
      throw err;
    } else {
      res.send(results);
    }
  });
};

exports.update = (req, res) => {
  const update_query = `UPDATE ${db_name}.${table_name} SET ` +
    `name = '${req.body.name}', ` +
    `description = '${req.body.description}', ` +
    `author = '${req.body.author}', ` +
    `private = ${req.body.private} ` +
    `WHERE story_id = ${db.connection.escape(req.params.id)}`;
  db.connection.query(update_query, (err, rows, fields) => {
    if (err) {
      res.send({ error: err });
      throw err;
    } else {
      res.send({ data: rows });
    }
  });
};

exports.delete = (req, res) => {
  const delete_query = `DELETE FROM ${db_name}.${table_name} ` +
    `WHERE story_id=${db.connection.escape(req.params.id)}`;
  db.connection.query(delete_query, (err, results, fields) => {
    if (err) {
      res.send({ error: err });
      throw err;
    } else {
      res.send({ data: results });
    }
  });
};

exports.get = (req, res) => {
  const get_query = `SELECT * FROM ${db_name}.${table_name} ` +
    `WHERE story_id=${db.connection.escape(req.params.id)}`;
  db.connection.query(get_query, (err, rows, fields) => {
    if (err) {
      res.send({ error: err });
      throw err;
    } else {
      res.send({ data: rows });
    }
  });
};

exports.getAll = (req, res) => {
  db.connection.query(`SELECT * FROM ${db_name}.${table_name}`, (err, rows, fields) => {
    if (err) {
      res.send({ error: err });
      throw err;
    } else {
      res.send({ data: rows });
    }
  });
};
