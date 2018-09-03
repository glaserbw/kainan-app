// Require express 
var express = require('express');
var passport = require('../config/passportConfig'); 

// Include the models
var db = require('../models');

// Declare a new router 
var router = express.Router();

// Define routes
router.get('/login', function(req, res){
	res.render('auth/login');
}); 

router.post('/login', passport.authenticate('local', {
	successRedirect: '/',
	successFlash: 'yay, login successful',
	failureRedirect: '/auth/login',
	failureFlash: 'Invalid Credentials'
}));

router.get('/signup', function(req, res){
	res.render('auth/signup');
}); 

router.post('/signup', function(req, res){
	// console.log(req.body);
	req.body.admin = false; 
	db.user.findOrCreate({
		where: { email: req.body.email },
		defaults: req.body
	}).spread(function(user, wasCreated){
		if(wasCreated){ //this is expected behavior 
			// ToDo: Automatically log the user in! 
			passport.authenticate('local', {
				successRedirect: '/',
				successFlash: 'Successfully Logged In',
				failureRedirect: '/',
				failureFlash: 'Oh no!'
			})(req, res); 
		}
		else { // user messed up, they already have login 
			// TODO: send the user some sort of error message 
			req.flash('error', 'Please Login');
			res.redirect('/auth/login');
		}
	}).catch(function(err){
		req.flash('error', err.message);
		res.redirect('/auth/signup');
	})
});

router.get('/logout', function(req, res){
	req.logout();
	req.flash('success', 'Successfully Logged Out!');
	res.redirect('/');
}); 


/ * OAUTH ROUTES * / 
// this calls the passport-facebook Strategy (located in passport config)
router.get('/facebook', passport.authenticate('facebook', {
	scope: ['public_profile', 'email']
}));

// Handle the response/callback from facebook
router.get('/callback/facebook', passport.authenticate('facebook', {
	successRedirect: '/profile',
	successFlash: 'facebook login successful',
	failureRedirects: '/auth/login',
	failureFlash: 'Opps, FB fail'
}));


module.exports = router; 









