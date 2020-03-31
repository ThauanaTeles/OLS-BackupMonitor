const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth');
const User = require('../models/user');


function generateToken(params = {}) {
        
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400, 

    });
}

 class SessionController {

    async store(req, res) {

        const { email, password } = req.body;

        const user = await User.findOne( { email }).select('+password');

        if (!user)
            return res.status(400).send({ error: 'Usuário incorreto'});
            
        if (!await bcrypt.compare(password, user.password))
            return res.status(400).send({ error: 'Senhas incorreta'});

        res.send ({ 
            user, 
            token: generateToken({ id: user.id}), 
        });
    };
}

module.exports = new SessionController();