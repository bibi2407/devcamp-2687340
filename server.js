const express = require('express')

//crear el objeto principal
//de la api
const app = express()

//url de prueba
app.get('/prueba' , function(request , response ){
    response.send("Hola Bibi")
})

app.get('/prueba2' , (request , response)=> {
    response
        .status(200)
        .json({
            "success" : true
        })
})

//Rutas del recurso BOOTCAMPS
//obtener todos los bootcamps
app.get('/api/v1/devcamp/bootcamps' , (request , response)=> {
    response
        .status(200)
        .json({
            "success" : true,
            "msg" : "aqui va a mostrarse todos los bootcamps"
        })
})

//obtener el bootcamp por id
app.get('/api/v1/devcamp/bootcamps/:id' , (request , response)=> {
    response
        .status(200)
        .json({
            "success" : true,
            "msg" : `obteniendo boodcamp con id ${request.params.id}`
        })
})

//crearbootcamp
app.post('/api/v1/devcamp/bootcamps' , (request , response)=> {
    response
        .status(200)
        .json({
            "success" : true,
            "msg" : "crear bootcamp"
        })
})

//actualizar bootcamp
app.put('/api/v1/devcamp/bootcamps/:id' , (request , response)=> {
    response
        .status(200)
        .json({
            "success" : true,
            "msg" : `actualizar boodcamp ${request.params.id}`
        })
})

//eliminar bootcamp
app.delete('/api/v1/devcamp/bootcamps/:id' , (request , response)=> {
    response
        .status(200)
        .json({
            "success" : true,
            "msg" : `eliminar boodcamp ${request.params.id}`
        })
})

//USERS
//Rutas del recurso USERS
//obtener todos los USERS
app.get('/api/v1/devcamp/users' , (request , response)=> {
    response
        .status(200)
        .json({
            "success" : true,
            "msg" : "aqui va a mostrarse todos los users"
        })
})

//obtener el users por id
app.get('/api/v1/devcamp/users/:id' , (request , response)=> {
    response
        .status(200)
        .json({
            "success" : true,
            "msg" : `obteniendo users con id ${request.params.id}`
        })
})

//crearbootcamp
app.post('/api/v1/devcamp/users' , (request , response)=> {
    response
        .status(200)
        .json({
            "success" : true,
            "msg" : "crear users"
        })
})

//actualizar bootcamp
app.put('/api/v1/devcamp/users/:id' , (request , response)=> {
    response
        .status(200)
        .json({
            "success" : true,
            "msg" : `actualizar users ${request.params.id}`
        })
})

//eliminar bootcamp
app.delete('/api/v1/devcamp/users/:id' , (request , response)=> {
    response
        .status(200)
        .json({
            "success" : true,
            "msg" : `eliminar users ${request.params.id}`
        })
})

//COURSES
//Rutas del recurso COURSES
//obtener todos los COURSES
app.get('/api/v1/devcamp/courses' , (request , response)=> {
    response
        .status(200)
        .json({
            "success" : true,
            "msg" : "aqui va a mostrarse todos los courses"
        })
})

//obtener el users por id
app.get('/api/v1/devcamp/courses/:id' , (request , response)=> {
    response
        .status(200)
        .json({
            "success" : true,
            "msg" : `obteniendo courses con id ${request.params.id}`
        })
})

//crearbootcamp
app.post('/api/v1/devcamp/courses' , (request , response)=> {
    response
        .status(200)
        .json({
            "success" : true,
            "msg" : "crear courses"
        })
})

//actualizar bootcamp
app.put('/api/v1/devcamp/courses/:id' , (request , response)=> {
    response
        .status(200)
        .json({
            "success" : true,
            "msg" : `actualizar courses ${request.params.id}`
        })
})

//eliminar bootcamp
app.delete('/api/v1/devcamp/courses/:id' , (request , response)=> {
    response
        .status(200)
        .json({
            "success" : true,
            "msg" : `eliminar courses ${request.params.id}`
        })
})


//REVIEWS
//Rutas del recurso REVIEWS
//obtener todos los REVIEWS
app.get('/api/v1/devcamp/reviews' , (request , response)=> {
    response
        .status(200)
        .json({
            "success" : true,
            "msg" : "aqui va a mostrarse todos los reviews"
        })
})

//obtener el reviews por id
app.get('/api/v1/devcamp/reviews/:id' , (request , response)=> {
    response
        .status(200)
        .json({
            "success" : true,
            "msg" : `obteniendo reviews con id ${request.params.id}`
        })
})

//crear reviews
app.post('/api/v1/devcamp/reviews' , (request , response)=> {
    response
        .status(200)
        .json({
            "success" : true,
            "msg" : "crear reviews"
        })
})

//actualizar reviews
app.put('/api/v1/devcamp/reviews/:id' , (request , response)=> {
    response
        .status(200)
        .json({
            "success" : true,
            "msg" : `actualizar reviews ${request.params.id}`
        })
})

//eliminar reviews
app.delete('/api/v1/devcamp/reviews/:id' , (request , response)=> {
    response
        .status(200)
        .json({
            "success" : true,
            "msg" : `eliminar reviews ${request.params.id}`
        })
})

//crear el servidor de aplicacion:
app.listen(5000 ,
           console.log('servidor ejecutando en puerto ' + 5000 ))