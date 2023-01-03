const { loginController, signupController, getUserController } = require('../controllers/auth');
const log = require('../middlewares/logger');

const router = require('express').Router();


router.post('/login',loginController )
router.post('/signup',signupController)

router.get('/user/:id', getUserController)

module.exports=router;
