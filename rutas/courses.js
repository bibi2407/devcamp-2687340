const express =require('express')
const router = express.Router()

//obtener todos los COURSES
router.get('/' , (request , response)=> {
    response
        .status(200)
        .json({
            "success" : true,
            "msg" : "aqui va a mostrarse todos los courses"
        })
})

//obtener el users por id
router.get('/:id' , (request , response)=> {
    response
        .status(200)
        .json({
            "success" : true,
            "msg" : `obteniendo courses con id ${request.params.id}`
        })
})

//crear courses
router.post('/' , (request , response)=> {
    response
        .status(200)
        .json({
            "success" : true,
            "msg" : "crear courses"
        })
})

//actualizar courses
router.put('/:id' , (request , response)=> {
    response
        .status(200)
        .json({
            "success" : true,
            "msg" : `actualizar courses ${request.params.id}`
        })
})

//eliminar courses
router.delete('/:id' , (request , response)=> {
    response
        .status(200)
        .json({
            "success" : true,
            "msg" : `eliminar courses ${request.params.id}`
        })
})



//exportar(commonjs) router
module.exports = router 