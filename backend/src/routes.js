const { Router } = require('express');
const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');
const ProjectController = require('./controllers/ProjectController');
const authMiddleware = require('./middlewares/auth');

const router = new Router();

router.use(authMiddleware);

router.post('/register', UserController.store);
router.post('/auth', SessionController.store);
router.get('/projects', ProjectController.store);

module.exports = router;
