console.log("Hello from AJAX!");

$(document).ready(function(){
	$("#delete-btn").click(function(e){
		e.preventDefault();
		var url = $(this).attr("href");
		console.log('hi from delete button');
			$.ajax({
			method: "DELETE",
			url: url
		}).done(function(data){
			window.location="profile";
		}).fail(function(err){
			console.log("error!", error);
		});
	});
});
