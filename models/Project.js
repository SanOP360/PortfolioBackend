const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Project = sequelize.define("Project", {
  title: DataTypes.STRING,
  imageUrl: DataTypes.STRING,
  videoUrl: DataTypes.STRING,
  password: DataTypes.STRING,
  description: DataTypes.STRING,
  codeLink:DataTypes.STRING,
});

module.exports = Project; 
