const Post = require('../models/post') 
module.exports.create = function(req,res)
{
  Post.create(
    {
        content: req.body.content,
        uuser: req.user._id
    },
    function(err,post)
    {
        if(err)
        {
            console.log("error")
        }
        return res.redirect('back')
    }
  )
}