$(document).ready(function () {
	// $("button").click(function () {
	// 	$("#cards-container").slideUp(2000);
	// });
	$("#arrowdown").click(function () {
		$('html, body').animate({
			scrollTop: $("#cards-container-header").offset().top
		}, 3000);
	});
	$(window).scroll(function() {
		var height = $(document).scrollTop();

		if(height < 1) {
			$(".navbar").css("background-color", "#fff");
			$(".navbar").removeClass("navbar-dark");
			$(".navbar").addClass("navbar-light");
		} else {
			$(".navbar").css("background-color", "#304b52");
			$(".navbar").removeClass("navbar-light");
			$(".navbar").addClass("navbar-dark");
		}
	});
});
