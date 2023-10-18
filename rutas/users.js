const express =require('express')
const router = express.Router()

//obtener todos los USERS
router.get('/' , (request , response)=> {
    response
        .status(200)
        .json({
            "success" : true,
            "msg" : "aqui va a mostrarse todos los users"
        })
})

//obtener el users por id
router.get('/:id' , (request , response)=> {
    response
        .status(200)
        .json({
            "success" : true,
            "msg" : `obteniendo users con id ${request.params.id}`
        })
})

//crear user
router.post('/' , (request , response)=> {
    response
        .status(200)
        .json({
            "success" : true,
            "msg" : "crear user"
        })
})

//actualizar user
router.put('/:id' , (request , response)=> {
    response
        .status(200)
        .json({
            "success" : true,
            "msg" : `actualizar users ${request.params.id}`
        })
})


//eliminar user
router.delete('/:id' , (request , response)=> {
    response
        .status(200)
        .json({
            "success" : true,
            "msg" : `eliminar users ${request.params.id}`
        })
})


//exportar(commonjs) router
module.exports = router 