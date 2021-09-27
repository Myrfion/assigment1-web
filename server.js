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
var express = require("express")
var app = express()

var HTTP_PORT = process.env.PORT || 8080

function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT)
}

app.get("/", function (req, res) {
  res.send("Tymur Levtsun - 109570200")
})

app.get("/about", function (req, res) {
  res.send("<h3>About</h3>")
})

app.listen(HTTP_PORT, onHttpStart)
