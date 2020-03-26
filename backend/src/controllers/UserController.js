const User = require('../models/user');

class UserController {
  async store(req, res) {
    try {
      const user = await User.create(req.body);

      return res.send({ user });
    } catch (err) {
      return res.status(400).send({ error: 'Falha no registro' });
    }
  }
}

module.exports = new UserController();
