console.log("Hello from AJAX!");

$(document).ready(function(){
	$("#delete-btn").click(function(e){
		e.preventDefault();
		console.log('hi from delete button');
		var url = $(this).attr("href");
			$.ajax({
			method: "DELETE",
			url: url
		}).done(function(data){
			window.location="/profile";
		}).fail(function(err){
			console.log("error!", error);
		});
	});
});
