const express = require("express");
const {Pool} = require("pg");
const cors = require("cors");
require('dotenv').config();
const app = express();
app.use(cors());

const pool = new Pool({
    user:"postgres",
    host:"localhost",
    database:"myprojectdb",
    password:process.env.DB_PASSWORD,
    port:5432
})

// API CREATION 
app.get("/track", async(req,res) =>{
    try{
        const result = await pool.query(`
            SELECT * FROM "Monza_track"   
        `)
        res.json(result.rows);
    } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});