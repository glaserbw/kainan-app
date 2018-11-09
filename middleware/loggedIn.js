module.exports = function(req, res, next){
	if(!req.user){
		req.flash('error', 'Please login)
		res.redirect('/auth/login');
	}
	else {
		next(); 
	}
}