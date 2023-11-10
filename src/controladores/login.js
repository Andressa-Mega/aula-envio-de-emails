const transportador = require('transportador');

const usuario = {
    email: 'and@email.com',
    senha: '123',
}

const login = async (req, res) => {
    const { email, senha} = req.body;

    if (usuario.email !== email) {
        return res.status(400).json({ message: 'email ou senha inválidas'})
    }
    if (usuario.senha !== senha) {
        return res.status(400).json({ message: 'email ou senha inválidas'})
    }

    transportador.sendMail()

    return res.json({ message: 'Login efetuado com sucesso'})
};



module.exports = {
    login
}