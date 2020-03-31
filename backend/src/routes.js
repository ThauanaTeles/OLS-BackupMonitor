const { Router } = require('express');
const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');
const ProjectController = require('./controllers/ProjectController');

const router = new Router();

router.post('/register', UserController.store);
router.post('/auth', SessionController.store);
router.get('/project', ProjectController.store);

module.exports = router;
