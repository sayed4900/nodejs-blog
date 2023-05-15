const router = require('express').Router();
const postController = require('../controllers/postController');

router.get('/', );

router.get('/post/:id', postController.getPost);


router.get('/about', (req, res) => {
    res.render('about',{title:'About |'})
});
router.get('/contact', (req, res) => {
    res.render('contact',{title:'Contact'})
});

module.exports = router;