const router = require('express').Router();
const postController = require('../controllers/postController');

router.get('/',postController.getPosts);

router.get('/post/:id', postController.getPost);

// function inserPostData (){
//     Post.insertMany(
//         [
//             {
//                 title:"Blog",
//                 body:"This is the description text"
//             },
//             {
//                 title:"Blog-Two",
//                 body:"This is the description text-Two"
//             },
//             {
//                 title:"Blog-Three",
//                 body:"This is the description text-Three"
//             }
//         ]
//     )
// }
// inserPostData();

router.get('/about', (req, res) => {
    res.render('about',{title:'About |'})
});
router.get('/contact', (req, res) => {
    res.render('contact',{title:'Contact'})
});

module.exports = router;