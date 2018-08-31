var db = require('../models');

// Require express 
var express = require('express');

// Declare a new router 
var router = express.Router();


// Get the authorization helper function
var loggedIn = require('../middleware/loggedIn'); 

// Define routes
router.get('/', loggedIn, function(req, res){
	//need db query to get saved favorites
	db.fav.findAll({
		where: { userId: req.user.id }
	}).then(function(favorites){
		res.render('profile/index', { favs: favorites });
	}).catch(function(err){
		console.log('nooooo', err);
	})
}); 


// ROUTES TO PLACE AND GET FAVORITED RESTAURANTS 
router.post('/', loggedIn, function(req, res){
	console.log('req.body is: ',req.body);
 	db.fav.findOrCreate({
 		where: {
 			resId: req.body.resId,
 			userId: req.user.id
 		},
 		defaults: req.body
 	}).spread(function(newFav, wasCreated){
 		res.redirect('/profile');
 		// If you decide to switch to AJAX, remove redirect and use res.send instead
 		// res.send('success');
 		// Then, update the button via jquery to be not a plus sign
 	}).catch(function(err){
 		console.log('uh oh go boom', err);
 		res.send('error - make a page for me');
 		// Or, when you switch to AJAX, just an error message with res.send
 	});
})


// Below is route for DELETE
router.delete("/:id", function(req, res){
	console.log('req.params.id is: ',req.params.id);
	db.fav.destroy({
		where: {id: req.params.id}
	}).then(function(deleteFav){
		console.log("deleted: ", deleteFav);
		res.send("successfully deleted");
	}).catch(function(error){
		console.log("error:", error);
		res.send("did not delete");
	});
});


module.exports = router; 


















