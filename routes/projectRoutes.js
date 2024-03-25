
const express = require("express");
const router = express.Router();
const Project  = require("../models/Project");
require("dotenv").config();

console.log(Project);

router.post("/projects", async (req, res) => {
  try {
    const { title, imageUrl, videoUrl, description,password,codeLink} = req.body;

    
    if (password !== process.env.PASSWORD) {
        console.log('password is',process.env.PASSWORD);
      return res.status(401).json({ error: "Unauthorized" });
    }

    
    const project = await Project.create({
      title,
      imageUrl,
      videoUrl,
      description,
      password,
      codeLink,
    });

    res.json(project);
  } catch (error) {
    console.error("Error creating project:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/projects", async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
