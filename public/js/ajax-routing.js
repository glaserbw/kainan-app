console.log("Hello from AJAX!");

$(document).ready(function(){
	$(".delete-form").submit(function(e){
		e.preventDefault();
		console.log('hi from delete button');
		var parentDiv = $(this).parent();
		console.log(parentDiv);

		var url = $(this).attr("action");
		
		$.ajax({
			method: "DELETE",
			url: url
		}).done(function(data){
			// window.location="/profile";
			parentDiv.remove();
		}).fail(function(err){
			console.log("error!", error);
		});
	});
	$(".add-fav").submit(function(e){
		e.preventDefault(); 
		console.log('add fav button clicked');

		var url = $(this).attr("action");
		var form = $(this);
		$.ajax({
			method: "POST",
			url: url,
			data: $(this).serialize()
		}).done(function(data){
			//swap + button for check
			var button = form.find('button')[0];
			console.log(button);
			button.textContent='✔';
			button.disabled = true; 
	
		}).fail(function(err){
			console.log("error with add-fav button");
		});
	});
});
