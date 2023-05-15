
const Post = require('../models/Post')

module.exports.getPosts=async(req, res) => {
        try{
            
            let perPage = 5;
            let page = req.query.page || 1 ;
    
            const postData = await Post.aggregate([ {$sort:{createdAt:1}} ]).skip(perPage * page - perPage).
            limit(perPage).exec();
    
            const count = await Post.count(); // 12
            const nextPage = parseInt(page) + 1; // 
            const hasNextPage = nextPage <= Math.ceil(count / perPage); // 
    
            res.render('index',{title:'Home',postData,current:page,nextPage:hasNextPage? nextPage : null})
        }catch(err){
            console.log(err);
        }
}

module.exports.getPost=async(req, res) => {
    const post = await Post.findById(req.params.id) ; 
    console.log(post);
    res.render('getSpecificPost.ejs',{post,title:post.title})
}