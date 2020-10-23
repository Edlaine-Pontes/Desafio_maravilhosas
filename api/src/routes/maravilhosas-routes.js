const express = require('express');
const router = express.Router();
const controller = require('../controllers/maravilhosas-controller')

/**
@router  GET /maravilhosas
@desc Retornar todas as mulheres maravilhosas
@access Public
@endpoint http://localhost:porta/maravilhosas
**/
router.get('/maravilhosas', controller.getMaravilhosas)


/** 
@router  GET /maravilhosas/id
@desc Retornar todas as mulheres maravilhosas pelo seu id: identificador
@access Public
@endpoint http://localhost:porta/maravilhosas/:id
**/
router.get('/maravilhosas/:id', controller.getMaravilhosaById)

/**
@router  POST /maravilhosas
@desc Cria uma nova mulher maravilhosa
@access Public
@endpoint http://localhost:porta/maravilhosas
**/
router.post('/maravilhosas/add', controller.addMaravilhosa)


/**
@router  PUT /maravilhosas/id
@desc Atualiza o cadastro de uma mulher maravilhosa pelo seu id: identificador
@access Public
@endpoint http://localhost:porta/maravilhosas/:id
**/
router.put('/maravilhosas/:id', controller.updateMaravilhosa)


/** 
@route DELETE tarefas
@desc Deletar uma maravilhosa pelo seu identificador
@access Public 
@endpoint http://localhost:porta/maravilhosas/:id
**/
router.delete('/maravilhosas/:valor', controller.deleteMaravilhosa)


module.exports = router;