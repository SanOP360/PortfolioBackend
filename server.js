
const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./database");
const projectRoutes = require("./routes/projectRoutes"); 
const cors=require("cors");

const Project=require("./models/Project")
require("dotenv").config();
console.log(Project);

const app = express();
const PORT = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(cors());



sequelize
  .sync({alter:true})
  .then(() => {
    console.log("Database & tables synced");
  })
  .catch((error) => {
    console.error("Error syncing database:", error);
  });

app.use("/api", projectRoutes); 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
