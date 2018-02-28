


$(document).ready(function(){
    $(".cont").click(function(){
        $( ".search-box" ).css( "width", "250px" );
         $( ".search-box" ).css( "border", "1px solid" );
          $( ".search-box" ).css( "border-color", "#cbcbb4" );
          $( ".search-box" ).css( "transition-duration", "0.4s" );
         $( ".input" ).css( "width", "215px" );
    });
    $(".cont").focusout(function(){
        $( ".search-box" ).css( "width", "40px" )
        $( ".input" ).css( "width", "1px" );
         $( ".search-box" ).css( "border", "none" );
    });
    $(".section4-left-img").mouseleave(function(){
        $( ".section4-left-img" ).css( "transition-duration", "1s" );
    });
    $(".section4-right-imgs").mouseleave(function(){
        $( ".section4-right-imgs" ).css( "transition-duration", "1s" );
    });
    $(".section5-col-md-3-1").mouseover(function(){
        $( ".ad-cart" ).css( "opacity", "1" );
         $( ".ad-cart" ).css( "background", "#49BCAB" );
       	 $( ".ad-cart" ).css( "transition-duration", "0.7s" ); 
    });

    $(".section5-col-md-3-1").mouseleave(function(){
        $( ".ad-cart" ).css( "opacity", "0" );
    });
    $(".section5-col-md-3-2").mouseover(function(){
        $( ".ad-cart1" ).css( "opacity", "1" );
         $( ".ad-cart1" ).css( "background", "#49BCAB" );
       	 $( ".ad-cart1" ).css( "transition-duration", "0.7s" );
    });

    $(".section5-col-md-3-2").mouseleave(function(){
        $( ".ad-cart1" ).css( "opacity", "0" );
    });

    $(".section5-col-md-3-3").mouseover(function(){
        $( ".ad-cart2" ).css( "opacity", "1" );
         $( ".ad-cart2" ).css( "background", "#49BCAB" );
       	 $( ".ad-cart2" ).css( "transition-duration", "0.7s" );
    });
    $(".section5-col-md-3-3").mouseleave(function(){
        $( ".ad-cart2" ).css( "opacity", "0" );
    });

    $(".section5-col-md-3-4").mouseover(function(){
        $( ".ad-cart3" ).css( "opacity", "0.5" );
         $( ".ad-cart3" ).css( "background", "#8c8c8c" );
       	 $( ".ad-cart3" ).css( "transition-duration", "0.7s" );
    });

    $(".section5-col-md-3-4").mouseleave(function(){
        $( ".ad-cart3" ).css( "opacity", "0" );
    });

    $(".a-btn-home").mouseover(function(){
        $( ".a-btn-home" ).css( "color", "white" );
        $( ".a-btn-home" ).css( "background", "black" );
    });

    $(".a-btn-home").mouseleave(function(){
        $( ".a-btn-home" ).css( "background", "#49bcab" );
        $( ".a-btn-home" ).css( "transition-duration", "0.7s" );
    });


    $(".james").mouseleave(function(){
        $( ".james" ).css( "transition-duration", "0.8s" );
    });

    $(".choose-variant").mouseleave(function(){
        $( ".choose-variant" ).css( "transition-duration", "0.8s" );
    });

    $(".a-style").mouseleave(function(){
        $( ".a-style" ).css( "transition-duration", "0.8s" );
    });

    $(".flex-box").mouseleave(function(){
        $( ".flex-box" ).css( "transition-duration", "0.8s" );
    
    });
    $(".box1").hover(function(){
    	 $( ".img-btn" ).css( "opacity", "1" );
        $( ".img-btn" ).css( "background", "#49bcab" );
        $( ".img-btn" ).css( "transition-duration", "0.8s" );
        $( ".img-btn" ).css( "color", "white" );
    });

    $(".box2").hover(function(){
    	 $( ".img-btn1" ).css( "opacity", "1" );
        $( ".img-btn1" ).css( "background", "#49bcab" );
        $( ".img-btn1" ).css( "transition-duration", "0.8s" );
        $( ".img-btn1" ).css( "color", "white" );
    });

    $(".box3").hover(function(){
    	 $( ".img-btn2" ).css( "opacity", "1" );
        $( ".img-btn2" ).css( "background", "#49bcab" );
        $( ".img-btn2" ).css( "transition-duration", "0.8s" );
        $( ".img-btn2" ).css( "color", "white" );
    });

    $(".box4").hover(function(){
    	 $( ".img-btn3" ).css( "opacity", "1" );
        $( ".img-btn3" ).css( "background", "#49bcab" );
        $( ".img-btn3" ).css( "transition-duration", "0.8s" );
        $( ".img-btn3" ).css( "color", "white" );
    });
    $(".box1").mouseleave(function(){
        $( ".img-btn" ).css( "opacity", "0" );
       
    });
    $(".box2").mouseleave(function(){
        $( ".img-btn1" ).css( "opacity", "0" );
         
    });

    $(".box3").mouseleave(function(){
        $( ".img-btn2" ).css( "opacity", "0" );
         
    });
    $(".box4").mouseleave(function(){
        $( ".img-btn3" ).css( "opacity", "0" );
         
    });
    $(".img-btn").mouseover(function(){
        $( ".img-btn" ).css( "background", "black" );
    });
    $(".img-btn1").mouseover(function(){
        $( ".img-btn1" ).css( "background", "black" );
    });
    $(".img-btn2").mouseover(function(){
        $( ".img-btn2" ).css( "background", "black" ); 
    });
    $(".img-btn3").mouseover(function(){
        $( ".img-btn3" ).css( "background", "black" );
    });
    $(".img-btn").mouseleave(function(){
        $( ".img-btn" ).css( "background", "#49bcab" ); 
    });
    $(".img-btn1").mouseleave(function(){
        $( ".img-btn1" ).css( "background", "#49bcab" );
    });

    $(".img-btn2").mouseleave(function(){
        $( ".img-btn2" ).css( "background", "#49bcab" );
    });
    $(".img-btn3").mouseleave(function(){
        $( ".img-btn3" ).css( "background", "#49bcab" );
    });
    $(".s9-img-link").mouseleave(function(){
        $( ".s9-img-link" ).css( "transition-duration", "0.7s" );
       
    });
    $(".article_btn").mouseleave(function(){
        $( ".article_btn" ).css( "transition-duration", "0.7s" );
    });
    $(".s10-link").mouseleave(function(){
        $( ".s10-link" ).css( "transition-duration", "0.7s" );
    });

    $(".social-link-style").mouseleave(function(){
        $( ".social-link-style" ).css( "transition-duration", "0.7s" );
    });
    $(".submit-btn").mouseleave(function(){
        $( ".submit-btn" ).css( "transition-duration", "0.7s" ); 
    });
});

(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) return;
js = d.createElement(s); js.id = id;
js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=853490611342442";
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

window.onresize = function() {
FB.XFBML.parse();
};


$(function(){
 
	$(document).on( 'scroll', function(){
 
		if ($(window).scrollTop() > 100) {
			$('.up-btn').addClass('show');
		} else {
			$('.up-btn').removeClass('show');
		}	
	});
 
	$('.up-btn').on('click', scrollToTop);
});
 
function scrollToTop() {
	verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
	element = $('body');
	offset = element.offset();
	offsetTop = offset.top;
	$('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
}


















