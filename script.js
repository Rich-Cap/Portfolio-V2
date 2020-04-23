$(document).ready(function () {
	// $("button").click(function () {
	// 	$("#cards-container").slideUp(2000);
	// });
	$("#arrowdown").click(function () {
		$('html, body').animate({
			scrollTop: $("#cards-container-header").offset().top
		}, 3000);
	});
	$(window).scroll(function () {
		var height = $(document).scrollTop();

		if (height < 1) {
			$(".navbar").css("background-color", "#fff");
			$(".navbar").removeClass("navbar-dark");
			$(".navbar").addClass("navbar-light");
		} else {
			$(".navbar").css("background-color", "#304b52");
			$(".navbar").removeClass("navbar-light");
			$(".navbar").addClass("navbar-dark");
		}
	});
	// Resume Slide effect
	// $("#resume").load(function () {
	// 	var elem = $("#resume");
	// 	var pos = 350;
	// 	var id = setInterval(frame, 10);
	// 	function frame() {
	// 		if (pos == 175) {
	// 			clearInterval(id);
	// 		} else {
	// 			pos--;
	// 			elem.style.top = pos + 'px';
	// 			elem.style.left = pos + 'px';
	// 		}
	// 	}
	// });

	// $("#example").click(function myMove() {
	// 	var elem = $("#myAnimation");
	// 	var pos = 350;
	// 	var id = setInterval(frame, 10);
	// 	function frame() {
	// 		if (pos == 175) {
	// 			clearInterval(id);
	// 		} else {
	// 			pos--;
	// 			elem.css("top") = pos + 'px';
	// 			elem.css("left") = pos + 'px';
	// 		}
	// 	}
	// })

	$(document).ready(function () {
		$("#flip").click(function () {
			$("#panel").slideDown("slow");
		});
	});
});
