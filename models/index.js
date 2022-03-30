const db = require("../db/connection");

exports.selectTopics = () => {
  return db.query(`SELECT * FROM topics;`).then((result) => {
    return result.rows;
  });
};
exports.selectArticles = () => {
  return db
    .query(`SELECT * FROM articles ORDER BY created_at DESC;`)
    .then((result) => {
      return result.rows;
    });
};
exports.selectUsers = () => {
  return db.query(`SELECT username FROM users;`).then((result) => {
    console.log(result.rows);
    return result.rows;
  });
};
