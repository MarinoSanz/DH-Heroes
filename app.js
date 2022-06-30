//modulo nativo (path)
const path = require("path");

//requerimos el modulo de express (terceros)
const express = require("express");


//adentro de app --> aplicacion de express
const app = express();

// console.log(path.resolve("./views/index.html"))
// console.log(path.join(__dirname, "views/index.html"))


//deficimos el puerto una vez, para usarlo las veces necesarias
const port = 3030


app.use(express.static("public"));



app.get( '/home' , (req, res) => {
  //envio el archivo que se encuentra en la ruta
  //y uso path.resolve para armar la ruta al archivo
  res.sendFile(path.resolve("./views/index.html"))
})

app.get( '/' , (req, res) => {
  res.sendFile(path.resolve("./views/index.html"))
})

app.get('/hamilton', (req, res)=> {
  res.sendFile(path.resolve("./views/hamilton.html"))
})

app.get('/babbage', (req, res)=> {
  res.sendFile(path.resolve("./views/babbage.html"))
})

app.get('/berners-lee', (req, res)=> {
  res.sendFile(path.resolve("./views/berners-lee.html"))
})

app.get('/clarke', (req, res)=> {
  res.sendFile(path.resolve("./views/clarke.html"))
})

app.get('/hopper', (req, res)=> {
  res.sendFile(path.resolve("./views/hopper.html"))
})

app.get('/lovelace', (req, res)=> {
  res.sendFile(path.resolve("./views/lovelace.html"))
})

app.get('/turing', (req, res)=> {
  res.sendFile(path.resolve("./views/turing.html"))
})


app.get('*', (req, res)=> {
  res.send("no encontre la pagina que buscabas")
})


// funcion para ejecutar el servidor en un puerto especìfico (+ callback)
app.listen(port, () => {
  console.log("estoy escuchando en el puerto ", port)
})