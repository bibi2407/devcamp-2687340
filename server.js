const express = require('express')

//rutas del bootcamps
const bootcampRoutes = require('./rutas/bootcamps')
const coursesRoutes = require('./rutas/courses')
const usersRoutes = require('./rutas/users')
const reviewsRoutes = require('./rutas/reviews')

//crear el objeto principal
//de la api
const app = express()

//vincular rutas al objeto app
app.use("/api/v1/devcamp/bootcamps", bootcampRoutes)
app.use("/api/v1/devcamp/courses", coursesRoutes)
app.use("/api/v1/devcamp/users", usersRoutes)
app.use("/api/v1/devcamp/reviews", reviewsRoutes)





//COURSES
//Rutas del recurso COURSES





//REVIEWS
//Rutas del recurso REVIEWS










//crear el servidor de aplicacion:
app.listen(5000 ,
           console.log('servidor ejecutando en puerto ' + 5000 ))