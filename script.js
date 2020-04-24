$(document).ready(function () {
	// $("button").click(function () {
	// 	$("#cards-container").slideUp(2000);
	// });

	// Change class and css on navbar
	// Fade Text
	$(window).scroll(function () {
		var height = $(document).scrollTop();

		if (height < 1) {
			$(".navbar").css("background-color", "#fff");
			$(".navbar").removeClass("navbar-dark");
			$(".navbar").addClass("navbar-light");
		} else {
			$(".navbar").css("background-color", "#004250");
			$(".navbar").removeClass("navbar-light");
			$(".navbar").addClass("navbar-dark");
		}

		var scrollTop = $(this).scrollTop();
		
		// console.log($('.display-5').height());

		$(".jumbo-intro").css({
			opacity: function() {
				var documentHeight = $(document).height();
				return 1 - (scrollTop * 5 / documentHeight);
			}
		});
	});

	// Slide to cards on click
	$("#arrowdown").click(function () {
		$('html, body').animate({
			scrollTop: $("#cards-container-header").offset().top
		}, 3000);
	});

	// Hover effect on cards
	$("#content-card1").hover(function(){
		$("#pic1").toggleClass("img2");
	});

	$("#content-card1").on("mouseenter", function(){
		$("#text1").removeClass("card-text-none");
		$("#text1").addClass("card-text");
	});

	$("#content-card1").on("mouseleave", function(){
		$("#text1").removeClass("card-text");
		$("#text1").addClass("card-text-none");
	})


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

	// $(document).ready(function () {
	// 	$("#flip").click(function () {
	// 		$("#panel").slideDown("slow");
	// 	});
	// });
});
