const express= require('express');
const authMiddleware = require('../middlewares/auth');

const router = express.Router();

router.use(authMiddleware);

class ProjectController {

    store(req, res) {
        res.send({ ok: true });
    };
}

module.exports = new ProjectController();