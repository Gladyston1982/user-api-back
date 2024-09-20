const mongoose = require('mongoose');

//Definir o schema do usuario
const userSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    sobrenome: { type: String, required: true},
    dataNascimento: {type: Date, required: true},
});

//Criar o modelo com base no schema de usuario
const User = mongoose.model('User', userSchema);

module.exports = User;