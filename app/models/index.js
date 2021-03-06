const Sequelize = require("sequelize");
const sequelize = new Sequelize('testdb', 'root', '', {
  host: "localhost",
  dialect: "mysql",
  port: 3306
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.rooms = require("./room.model.js")(sequelize, Sequelize);
db.feedbacks = require("./feedback.model.js")(sequelize, Sequelize);

module.exports = db;