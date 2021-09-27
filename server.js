/*********************************************************************************
 * WEB322 – Assignment 1
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 * No part of this assignment has been copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Name: Tymur Levtsun Student ID: 109570200 Date: 26 September 2021
 *
 * Online (Heroku) URL: _______________________________________________________
 *
 ********************************************************************************/

const express = require("express")
const app = express()
const port = 8080

app.get("/", (req, res) => {
  res.send("Tymur Levtsun - 109570200")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
