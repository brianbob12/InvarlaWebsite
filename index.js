#!/usr/bin/env node

const express = require("express")
const path = require("path")
const https = require("https")
const http = require("http")

const app = express()
const port = 80

app.use(express.static("public"))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"))
})

app.listen(port)
console.log("hosting at port " + port)
