const db = require("../../db");

function selector(table, id) {
  let sql = `select * from "prisma"."${table}"`;
  if (id) {
    sql += ` where id =${id}`;
  }

  return sql;
}

async function getAll(table, req, res) {
  let sqlQuery = selector(table);
  console.log("get all:", sqlQuery);
  const qResult = await db.query(sqlQuery);

  res.status(201).json({ result: qResult.rows });
}

module.exports = { getAll };
