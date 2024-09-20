const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes.js'); //Importa as rotas

const app = express();

// Middleware para permitir que a API lide com JSON
app.use(express.json());

//Conexão com o MongoDB
mongoose.connect('mongodb://localhost:27017/user-api', {
    //useNewUrlParser: true,
    //useUnifiedTopology: true,
})
.then(() => 
    console.log('Conectado ao MongoDB'))
.catch((err) =>
console.log('Erro ao conectar ao MongoDB:', err ));

//Definir rotas
app.use('/api/users', userRoutes); // Aqui você usa o objeto router do userRoutes

//Definir a porta e iniciar o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT,() => {
    console.log(`Servidor rodando na porta ${PORT}`);
});