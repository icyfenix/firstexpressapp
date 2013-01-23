
/*
 * GET home page.
 */

blog_posts = [{title: "post one", post: "post one woo!"}, {title: "second post", post: "another post!"}];
 blog_title = "Hello I am a blog";
 blog_post = "Hello, I am a post and I keep going and going.";
 blog_error = {title: "errrrror!", post: "that doesn't exist :("};

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.blog = function(req, res){
	if(!blog_posts[req.query.post]) {
		res.render('blog', blog_error);
	} else {
		res.render('blog', blog_posts[req.query.post]);
	}
};