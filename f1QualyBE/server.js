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
app.get("/track/:name", async(req,res) =>{
    const {name} = req.params
    try{
        let table;
        if(name==="Italy(Monza)"){
            table = '"Monza_track"'
        }
        else if(name==="GBR"){
            table = '"Silverstone_track"'
        }else if(name==="Singapore"){
            table = '"Singapore_track"'
        }
        else if(name==="Australia"){
            table = '"Australia_tracks"'
        }
        else{
            return res.status(400).send("Track Not Available")
        }
        const result = await pool.query(`
            SELECT * FROM ${table}   
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