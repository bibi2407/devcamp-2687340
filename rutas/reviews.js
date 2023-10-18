const express =require('express')
const router = express.Router()

//obtener todos los REVIEWS
router.get('/' , (request , response)=> {
    response
        .status(200)
        .json({
            "success" : true,
            "msg" : "aqui va a mostrarse todos los reviews"
        })
})
//obtener el reviews por id
router.get('/:id' , (request , response)=> {
    response
        .status(200)
        .json({
            "success" : true,
            "msg" : `obteniendo reviews con id ${request.params.id}`
        })
})
//crear reviews
router.post('/' , (request , response)=> {
    response
        .status(200)
        .json({
            "success" : true,
            "msg" : "crear reviews"
        })
})
//actualizar reviews
router.put('/:id' , (request , response)=> {
    response
        .status(200)
        .json({
            "success" : true,
            "msg" : `actualizar reviews ${request.params.id}`
        })
})
//eliminar reviews
router.delete('/:id' , (request , response)=> {
    response
        .status(200)
        .json({
            "success" : true,
            "msg" : `eliminar reviews ${request.params.id}`
        })
})



//exportar(commonjs) router
module.exports = router 