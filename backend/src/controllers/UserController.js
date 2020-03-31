const User = require('../models/user');
const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth');

function generateToken(params = {}) {
        
  return jwt.sign(params, authConfig.secret, {
      expiresIn: 86400, 

  });
}

class UserController {

  async store(req, res) {

    const { email } = req.body;

    try {

      if ( await User.findOne({ email })) {
        
        return res.status(400).send({ error: 'E-mail já cadastrado'});
      
      }

      const user = await User.create(req.body);

      user.password = undefined;

      return res.send({ 
        user, 
        token: generateToken({ id: user.id}),  
      });

    } catch (err) {
      return res.status(400).send({ error: 'Falha no registro' });
    }
  }
}

module.exports = new UserController();
