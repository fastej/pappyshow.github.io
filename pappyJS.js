$(document).ready( function() {
	"use strict"; $(".headerOptionAbout").hover(function(){
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
	
	$(".headerOptionGallery").hover(function(){
		if ($(".galleryPage").length > 0) {
			return true;
		} else {
			$(".optionLineGallery").slideToggle(100);
		}	
	}, function(){
		if ($(".galleryPage").length > 0) {
			return true;
		} else {
			$(".optionLineGallery").css("display","none");
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
	
/*$(window).scroll( function(){
        $('.showme').each( function(){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
				$(this).removeClass('showme');
                $(this).addClass('hideme');
            }
            if( bottom_of_window < bottom_of_object ){
                $(this).removeClass('hideme');
				$(this).addClass('showme');
            }
        });
    });*/
	
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
	if ($(".homepagePage").length>0) {
		$("#textdiv1").fadeIn(1500);
		$("#textdiv2").show();	
		$("#textdiv3").show();
		$(".blueLine1").show();
		$(".blueLine2").show();
		$(".paraWhite").fadeOut(1000);
	}
	
	if ($(".aboutPage").length>0) {
		$(".blueline3").fadeIn(1000);
		$("#aboutPic").fadeIn(1000);
		$("#aboutPic2").fadeIn(1000);
	}
});

$(document).ready(function(){
	if ($('#BGimage').length > 0) {
	$("#startLogo").delay(200).fadeIn(1500);
	$("#click").delay(400).fadeToggle(500);
	} else {
	$("#header").show();
	$("#blackStrip").show();
	$("#logo").delay(300).show();
	$(".headerOptionAbout").show();
	$(".headerOptionTeam").show();
	$(".headerOptionWorkshops").show();
	$(".headerOptionProjects").show();
	$(".headerOptionGallery").show();
	$(".headerOptionContact").show();
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
	if ($(".galleryPage").length > 0) {
		$('.optionLineGallery').css( "display", "block");
	}
	if ($(".contactPage").length > 0) {
		$('.optionLineContact').css( "display", "block");
	}
	});
	


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
	
/*$(window).scroll(function(){
	$("#header").css("height", 6-2*($(window).scrollTop()/(50+$(window).scrollTop()))+"em");
	$("#blackStrip").css("margin-top", 6-2*($(window).scrollTop()/(50+$(window).scrollTop()))+"em");
}); */
	
/*$(window).scroll( function(){
	var height = $("#header").height();
	if ($(document).scrollTop() > 3*height) {
	$("#BGimage").animate({"opacity": 0,"z-index":-100},500);
	$("#header").fadeIn(500);
	$("#blackStrip").fadeIn(500);
	$('html, body').animate({ scrollTop: 0 }, 0);
	}
	$("#widthAdjust").css("opacity", "1"-($(window).scrollTop()/(300+$(window).scrollTop())));
	$("#startLogo").css("opacity", "1"-($(window).scrollTop()/(100+$(window).scrollTop()))); 
	
	 
}); */

/*$(window).bind('scroll', function(){
			parallaxScroll();
		});
		function parallaxScroll(){
			var scrolledY = $(window).scrollTop();
			$("#para1").css('top',((scrolledY*0.05))+"em");
			$("#testdiv").css('top',30 - ((scrolledY*0.0005)) + 'em');
			$("#testdivGrey").css('top',72 - ((scrolledY*0.01)) + 'em');
			$("#para2").css('top',30 + ((scrolledY*0.02))+"em");
			$("#BGimage").css('top', - ((scrolledY*0.01)) + 'em');
		} */
		
/*$("#para1").parallax({imageSrc: 'kane_082.JPG', positionY: '30px'});
$("#para2").parallax({imageSrc: 'kane_155.JPG', positionY: '30em'});*/

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

		
$("#click").on("click", function(){
	$('body').removeClass('stop-scrolling');
	$('#startLogo').animate({'top':-30+ '%'},{queue: false, duration: 1500}).animate({"opacity":0},{queue: false, duration: 1000});
	$("#widthAdjust").animate({"opacity":0},{queue: false, duration: 1000});
	$("#BGimage").animate({"z-index":-100},{queue: false, duration: 1000});
	$("#click").animate({"opacity": 0,"z-index":-101},300);
	$("#header").delay(500).fadeIn(1000);
	$("#blackStrip").delay(500).fadeIn(1000);
	/*$("#para1").delay(500).fadeIn(1000);
	$("#para2").delay(500).fadeIn(1000);
	$("#para2").delay(500).fadeIn(1000);*/
	$(".paraWhite").delay(1000).fadeOut(1000);
	$("#textdiv1").delay(500).fadeIn(1000);
	$("#textdiv2").delay(500).fadeIn(1000);
	$("#textdiv3").delay(500).fadeIn(1000);
	$(".blueLine1").delay(500).fadeIn(1000);
	$(".blueLine2").delay(500).fadeIn(1000);
	$("#logo").delay(300).fadeIn(1000);
	$(".headerOptionAbout").delay(450).fadeIn(1000);
	$(".headerOptionTeam").delay(600).fadeIn(1000);
	$(".headerOptionWorkshops").delay(750).fadeIn(1000);
	$(".headerOptionProjects").delay(900).fadeIn(1000);
	$(".headerOptionGallery").delay(1050).fadeIn(1000);
	$(".headerOptionContact").delay(1050).fadeIn(1000);
});



/*$(document).ready(function(){if( $("#BGimage").css("opacity")>0){
	$(this).scrollTop(0);
}});*/

});

