$(document).ready( function() {
	
	"use strict";
	
	if (matchMedia) {
  var mq = window.matchMedia("(min-width: 767px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}
	
	$(".headerOptionAbout").hover(function(){
		if ($(".aboutPage").length > 0) {
			return true;
		} else {
			$(".optionLineAbout").slideToggle(100);
		}	
	}, function(){
		if ($(".aboutPage").length > 0) {
			return true;
		} else {
			$(".optionLineAbout").css("display","none");
		}
	});
	
	$(".headerOptionTeam").hover(function(){
		if ($(".teamPage").length > 0) {
			return true;
		} else {
			$(".optionLineTeam").slideToggle(100);
		}	
	}, function(){
		if ($(".teamPage").length > 0) {
			return true;
		} else {
			$(".optionLineTeam").css("display","none");
		}
	});
	
	$(".headerOptionWorkshops").hover(function(){
		if ($(".workshopsPage").length > 0) {
			return true;
		} else {
			$(".optionLineWorkshops").slideToggle(100);
		}	
	}, function(){
		if ($(".workshopsPage").length > 0) {
			return true;
		} else {
			$(".optionLineWorkshops").css("display","none");
		}
	});
	
	$(".headerOptionProjects").hover(function(){
		if ($(".projectsPage").length > 0) {
			return true;
		} else {
			$(".optionLineProjects").slideToggle(100);
		}	
	}, function(){
		if ($(".projectsPage").length > 0) {
			return true;
		} else {
			$(".optionLineProjects").css("display","none");
		}
	});
	
	$(".headerOptionContact").hover(function(){
		if ($(".contactPage").length > 0) {
			return true;
		} else {
			$(".optionLineContact").slideToggle(100);
		}	
	}, function(){
		if ($(".contactPage").length > 0) {
			return true;
		} else {
			$(".optionLineContact").css("display","none");
		}
	});
	
///$('#about').css('left' , 30*(767/($(window).width())) + '%'); 	
	
$("#facebook").hover(function(){
	$(this).animate({opacity:"0"},250);
	$("#facebookB").animate({opacity:"1"},250);
}, function() {
	$(this).animate({opacity:"1"},50);
	$("#facebookB").animate({opacity:"0"},50);
});

$("#twitter").hover(function(){
	$(this).animate({opacity:"0"},250);
	$("#twitterB").animate({opacity:"1"},250);
}, function() {
	$(this).animate({opacity:"1"},50);
	$("#twitterB").animate({opacity:"0"},50);
});

$("#insta").hover(function(){
	$(this).animate({opacity:"0"},250);
	$("#instaB").animate({opacity:"1"},250);
}, function() {
	$(this).animate({opacity:"1"},50);
	$("#instaB").animate({opacity:"0"},50);
});

$("#youtube").hover(function(){
	$(this).animate({opacity:"0"},250);
	$("#youtubeB").animate({opacity:"1"},250);
}, function() {
	$(this).animate({opacity:"1"},50);
	$("#youtubeB").animate({opacity:"0"},50);
});

$(document).ready(function(){
	
	if ($(".indexPage").length>0) {
		$('#header').hide();
		$('#footer').hide();
	}
	
	if ($(".homepagePage").length>0) {	
		$("#footer").show();
		$(".blueLine1").fadeIn(1000);
		$(".blueLine2").show();
		$(".blueLine4").show();
		$(".paraWhite1").addClass("load");
		$(".paraWhite2").addClass("load");
		$(".paraWhite1").delay(3000).animate({"z-index":-100});
		$(".paraWhite2").delay(3000).animate({"z-index":-100});
		$("#textdiv1").addClass("load1");
		$(".downArrow").addClass("load1");
		$("#textdiv2").addClass("load2");
	}
	
	if ($(".workshopsPage").length>0) {	
		$("#footer").show();
		$(".blueLine1").fadeIn(1000);
		$(".blueLine2").show();
		$(".blueLine5").show();
		$(".paraWhite1").addClass("load");
		$(".paraWhite2").addClass("load");
		$("#textdiv5").addClass("load1");
		$("#textdiv6").addClass("load2");
		$("#textdiv7").addClass("load2");
		$(".downArrow").addClass("load1");
	}
	
	if ($(".contactPage").length>0) {	
		$("#footer").show();
		$(".blueLine1").fadeIn(1000);
		$(".blueLine2").show();
		$(".paraWhite1").addClass("load");
		$(".paraWhite1").delay(1000).animate({"z-index":-100});
		$("#textdiv3").addClass("load1");
		$("#textdiv4").addClass("load2");
	}
	
	if ($(".aboutPage").length>0) {
		$(".blueline3").fadeIn(1000);
		$("#aboutBG").addClass("load3");
		$(".paraWhite1").addClass("load");
		$(".downArrow").addClass("load1");
	}
});

$(document).ready(function(){
    $(this).scrollTop(0);
});

$(window).on('unload', function() {
    $(window).scrollTop(0);
});

function WidthChange(mq) {
	if (mq.matches) {
if ($('#BGimage').length > 0) {
	$("#startLogo").delay(200).fadeIn(1500);
	$("#click").delay(400).fadeToggle(500);
	$("#click").on("click", function(){
	$('body').removeClass('stop-scrolling');
	$('#startLogo').addClass("click");
	$('#startLogo').fadeOut(600);
	$("#widthAdjust").addClass("load");
	$("#BGimage").animate({"z-index":-100},{queue: false, duration: 1000});
	$("#click").animate({"opacity": 0,"z-index":-101},300);
});
	} else {
	$("#header").show();
	$("#logo").delay(200).fadeIn(300);
	$(".headerOptionAbout").fadeIn(500);
	$(".headerOptionTeam").delay(600).fadeIn(500);
	$(".headerOptionWorkshops").delay(400).fadeIn(500);
	$(".headerOptionProjects").delay(200).fadeIn(500);
	$(".headerOptionContact").delay(800).fadeIn(500);
	$("#blackStrip").fadeIn(1000);
	}
} else {
  if ($('#BGimage').length > 0) {
	$("#startLogo").delay(200).fadeIn(1500);
	$("#click").delay(400).fadeToggle(500);
	$("#click").on("click", function(){
	$('body').removeClass('stop-scrolling');
	$('#startLogo').addClass("click");
	$('#startLogo').fadeOut(600);
	$("#widthAdjust").addClass("load");
	$("#BGimage").animate({"z-index":-100},{queue: false, duration: 1000});
	$("#click").animate({"opacity": 0,"z-index":-101},300);
});
	} else {
	$("#header").show();
	$("#blackStrip").show();
	$("#logo").delay(300).show();
	$(".headerOptionAbout").hide();
	$(".headerOptionTeam").hide();
	$(".headerOptionWorkshops").hide();
	$(".headerOptionProjects").hide();
	$(".headerOptionContact").hide();
	}
}
	
	
	if ($(".aboutPage").length > 0) {
		$('.optionLineAbout').css( "display", "block");
	}
	if ($(".teamPage").length > 0) {
		$('.optionLineTeam').css( "display", "block");
	}
	if ($(".workshopsPage").length > 0) {
		$('.optionLineWorkshops').css( "display", "block");
	}
	if ($(".projectsPage").length > 0) {
		$('.optionLineProjects').css( "display", "block");
	}
	if ($(".contactPage").length > 0) {
		$('.optionLineContact').css( "display", "block");
	}
	}
	


$(window).scroll( function(){
		$("#header").css("opacity", "1"-0.8*($(window).scrollTop()/(300+$(window).scrollTop())));
		$("#blackStrip").css("opacity", "1"-0.99*($(window).scrollTop()/(100+$(window).scrollTop())));
		
});

$("#header").hover(function(){
		$(this).animate({opacity:"1"},200);
		$("#blackStrip").animate({opacity:"1"},200);
	}, function(){
		$(this).animate({opacity:"1"-0.8*($(window).scrollTop()/(300+$(window).scrollTop()))},100);
		$("#blackStrip").animate({opacity:"1"-0.8*($(window).scrollTop()/(300+$(window).scrollTop()))},100);
	});

$('#click').bind('fade-cycle', function() {
    $(this).fadeOut(1000, function() {
        $(this).fadeIn(1000, function() {
            $(this).trigger('fade-cycle');
        });
    });
});

$('#click').each(function(index, elem) {
    setTimeout(function() {
        $(elem).trigger('fade-cycle');
    }, index * 250);
});

$("#arrow1").on("click", function(){
	$('html, body').animate({
    scrollTop: $("#paravid").offset().top
}, 500);
});

$("#arrow2").on("click", function(){
	$('html, body').animate({
    scrollTop: $("#para2").offset().top + 65
}, 500);
});

$("#arrow3").on("click", function(){
	$('html, body').animate({
    scrollTop: $("#para3").offset().top + 500
}, 1000);
});

$("#arrow4").on("click", function(){
	$('html, body').animate({
    scrollTop: $("#para5").offset().top
}, 500);
});

$("#arrow5").on("click", function(){
	$('html, body').animate({
    scrollTop: $("#para6").offset().top
}, 500);
});

$("#arrow6").on("click", function(){
	$('html, body').animate({
    scrollTop: $("#para7").offset().top +500
}, 1000);
});

$("#arrow7").on("click", function(){
	$('html, body').animate({
    scrollTop: $("#aboutPic2").offset().top + 500
}, 1000);
});

});

