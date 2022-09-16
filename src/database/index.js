const Sequelize = require("sequelize");

const DB_NAME = "la_vie2";
const DB_USER = "root";
const DB_PASS = "0419";
const DB_CONFIG = {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
};

let db = {};

try {
  db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
  console.error("An error occurred in the database");
}

async function hasConnection() {
  try {
    await db.authenticate();
    console.log("Connected database!");
  } catch (error) {
    console.error("Error to connect!");
  }
}

Object.assign(db, {
  hasConnection,
});

module.exports = db;
