const express = require('express');
const User = require('../models/User'); // Importa modelo de usuario

const router = express.Router(); // Crie um objeto router

//Rota para criar um novo usuario
router.post('/', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save(); //Salva o usuario criado
        res.status(201).json(user); //Retorna usuario criado
    } catch (error) {
        res.status(400).json({message: 'Erro ao criar usuario', error});
    }
});

//Rota para listar todos os usuarios
router.get('/', async (req,res) => {    
    try {
        const users = await User.find();//Busca todos os usuarios
        res.json(users); //Retorna lista de usuarios
    } catch (error) {
        res.status(500).json({message: 'Erro ao buscar usuarios', error});
    }
});
 //Rota para atualizar o usuario pelo _id
 router.put('/:id', async (req,res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!user) {
            return res.status(404).json({message: 'Usuario não encontrado'});
        }
        res.json(user);
    } catch (error) {
        res.status(400).json({message: 'Erro ao atualizar o usuario', error});
    }
 });

// Rota para excluir um usuário pelo _id
router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.json({ message: 'Usuário excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao excluir usuário', error });
  }
});

module.exports = router; // Exporte o objeto router