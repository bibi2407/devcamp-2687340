const express =require('express')
const router = express.Router()

//endpoints: uri de bootcamp
//
//obtener todos los bootcamps
router.get('/' , (request , response)=> {
    response
        .status(200)
        .json({
            "success" : true,
            "msg" : "aqui va a mostrarse todos los bootcamps"
        })
})
//obtener bootcamp por id
router.get('/:id' , (request , response)=> {
    response
        .status(200)
        .json({
            "success" : true,
            "msg" : `obteniendo boodcamp con id ${request.params.id}`
        })
})

//crearbootcamp
router.post('/' , (request , response)=> {
    response
        .status(200)
        .json({
            "success" : true,
            "msg" : "crear users"
        })
})
//actualizar bootcamp
router.put('/:id' , (request , response)=> {
    response
        .status(200)
        .json({
            "success" : true,
            "msg" : `actualizar boodcamp ${request.params.id}`
        })
})
//eliminar bootcamp
router.delete('/:id' , (request , response)=> {
    response
        .status(200)
        .json({
            "success" : true,
            "msg" : `eliminar boodcamp ${request.params.id}`
        })
})
//exportar(commonjs) router
module.exports = router 

