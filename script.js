$(document).ready(function () {
	// $("button").click(function () {
	// 	$("#cards-container").slideUp(2000);
	// });
	$("#arrowdown").click(function() {
		$('html, body').animate({
			scrollTop: $("#cards-container").offset().top
		}, 3000);
		$(".navbar").removeClass("navbar-light");
		$(".navbar").addClass("navbar-dark");
		$(".navbar").delay("slow").fadeIn().css("background-color", "darkblue");
		// $(".navbar").animate({backgroundColor: '#000'}, 'slow');
	});
});
