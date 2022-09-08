
const express = require('express')
var CryptoJS = require("crypto-js")
const fs = require('fs');
const file  = require('./myFile.json')
const app = express()
const port = 3000


const middleware =(req, res, next) =>{
    let body =req.body;   
    var hmac = CryptoJS.HmacSHA256(body)
 const result = JSON.stringify(hmac);
  res.send(result)
  next()
}
app.use(middleware)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})