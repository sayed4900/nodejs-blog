const authController = require('../controllers/authController')
const router = require('express').Router();


router.get('/signup',authController.getSignup)
router.post('/signup',authController.postSignup)

router.get('/login',authController.getLogin)
router.post('/login',authController.postLogin)

router.get('/logout',authController.getLogout)

module.exports = router;