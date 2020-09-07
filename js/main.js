$(document).ready(function(){
	$('.Modern__slider').slick({
		responsive:[
			{
				breakpoint: 1340,
				settings:{
					arrows: false,
					dots: true,
				}
			}
		]
	});
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
});

