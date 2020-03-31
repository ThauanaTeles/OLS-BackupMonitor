const express = require('express');

const router = express.Router();

class ProjectController {
    
    store(req, res) {
        console.log(authMiddleware)
        res.send({ ok: false });
    };
}

module.exports = new ProjectController();