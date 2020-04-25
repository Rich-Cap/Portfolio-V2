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
		}, 2000);
	});

	// Hover effect on cards with for loop
	// for (var i=1; i <= 6; i++){
	// 	var contentID = "#content-card" + [i];
	// 	var picID = "#pic" + [i];
	// 	var textID = "#text" + [i];

	// 	$(contentID).hover(function(){
	// 		$(picID).toggleClass("opacity");
	// 		console.log(contentID);
	// 	});
	// 	$(contentID).on("mouseenter", function(){
	// 		$(textID).removeClass("card-text-none");
	// 		$(textID).addClass("card-text");
	// 	});
	// 	$(contentID).on("mouseleave", function(){
	// 		$(textID).removeClass("card-text");
	// 		$(textID).addClass("card-text-none");
	// 	});
	// 	console.log(contentID);
	// }

	// Hover on card 1
	$("#content-card1").hover(function(){
		$("#pic1").toggleClass("opacity");
	});

	$("#content-card1").on("mouseenter", function(){
		$("#text1").removeClass("card-text-none");
		$("#text1").addClass("card-text");
	});

	$("#content-card1").on("mouseleave", function(){
		$("#text1").removeClass("card-text");
		$("#text1").addClass("card-text-none");
	});

	// Hover on card 2
	$("#content-card2").hover(function(){
		$("#pic2").toggleClass("opacity");
	});

	$("#content-card2").on("mouseenter", function(){
		$("#text2").removeClass("card-text-none");
		$("#text2").addClass("card-text");
	});

	$("#content-card2").on("mouseleave", function(){
		$("#text2").removeClass("card-text");
		$("#text2").addClass("card-text-none");
	});

	// Hover on card 3
	$("#content-card3").hover(function(){
		$("#pic3").toggleClass("opacity");
	});

	$("#content-card3").on("mouseenter", function(){
		$("#text3").removeClass("card-text-none");
		$("#text3").addClass("card-text");
	});

	$("#content-card3").on("mouseleave", function(){
		$("#text3").removeClass("card-text");
		$("#text3").addClass("card-text-none");
	});

	// Hover on card 4
	$("#content-card4").hover(function(){
		$("#pic4").toggleClass("opacity");
	});

	$("#content-card4").on("mouseenter", function(){
		$("#text4").removeClass("card-text-none");
		$("#text4").addClass("card-text");
	});

	$("#content-card4").on("mouseleave", function(){
		$("#text4").removeClass("card-text");
		$("#text4").addClass("card-text-none");
	})

	// Hover on card 5
	$("#content-card5").hover(function(){
		$("#pic5").toggleClass("opacity");
	});

	$("#content-card5").on("mouseenter", function(){
		$("#text5").removeClass("card-text-none");
		$("#text5").addClass("card-text");
	});

	$("#content-card5").on("mouseleave", function(){
		$("#text5").removeClass("card-text");
		$("#text5").addClass("card-text-none");
	})

	// Hover on card 6
	$("#content-card6").hover(function(){
		$("#pic6").toggleClass("opacity");
	});

	$("#content-card6").on("mouseenter", function(){
		$("#text6").removeClass("card-text-none");
		$("#text6").addClass("card-text");
	});

	$("#content-card6").on("mouseleave", function(){
		$("#text6").removeClass("card-text");
		$("#text6").addClass("card-text-none");
	});

	// Reload mail Icon on hover
	$("button").on("mouseenter", function(){
		var d = new Date();
		$("#contact-logo-mail").attr("src", "./Content/send-yellow-hover.gif?" + d.getTime());
	});
	$("button").on("mouseleave", function(){
		$("#contact-logo-mail").attr("src", "./Content/send-yellow.gif");
	});
});
