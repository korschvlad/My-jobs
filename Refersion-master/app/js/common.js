$(document).ready(function() {

		/* Off-canvas menu */
		$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".top_mnu ul").click(function() {
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top_text").css("opacity", "1");
	}).append("<span>");

	$(".toggle_mnu").click(function() {
		if ($(".top_mnu").is(":visible")) {
			$(".top_text").css("opacity", "1");
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li").removeClass("fadeInUp animated");
		} else {
			$(".top_text").css("opacity", ".1");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li").addClass("fadeInUp animated");
		};
	});



	//dashboard window 

	$('.dashboard-link').click(function() {
		
		$(".dashboard-link").addClass('active-link')	})
	$('.recent-offer, .all-offer-link').click(function() {
		$('.recent').fadeOut();
		$(".dashboard-link").removeClass('active-link')
	})

	$('.attach-dashboard-link').click(function() {
		$('.dashboard-submenu').toggle();
	})
	$('.btn-login-mnu').click(function() {
		$('.login-submenu').toggle();
	})

	$('.marketplace-link').click(function() {
		$(this).addClass('active-marketplace')
	})

	// Clear checkbox filter


	$('input').click(function(){
		$(this).toggleClass('act');    
        if($(this).attr('class') == 'act' ) {  
            $('.clear-button').css('display', 'block');
        }/* else if($('*').attr('class') != 'act'){
            $('.clear-button').fadeOut(500);
        }*/
    });


	//offer-details close-button

	$('.close-button').click(function() {
		$('.current').fadeOut();
		$('body').css('overflow', 'auto');
	})
	$('.close-icon-offer').click(function() {
		$('.current').fadeOut();
		$('body').css('overflow', 'auto');
	})

$('#toggle-link').click(function(e) {
    var $message = $('#message');
 
    if ($message.css('display') != 'block') {
        $message.show();
        var firstClick = true;
        $(document).bind('click.myEvent', function(e) {
            if (!firstClick && $(e.target).closest('#message').length == 0) {
                $message.hide();
                $(".dashboard-link").removeClass('active-link');
                $(document).unbind('click.myEvent');
            }
            firstClick = false;
        });
    }
    e.preventDefault();
});

	// check list
	$('.distribution-subtitle').click(function() {
		$('.distribution').toggle( 500 );
		$('.dist-angle').toggleClass('fa-angle-down fa-angle-right');
	})
	$('.payment-subtitle').click(function() {
		$('.payment').toggle( 500 );
		$('.pay-angle').toggleClass('fa-angle-down fa-angle-right');
	})
	$('.offer-cat-subtitle').click(function() {
		$('.offer-categories').slideToggle( 900 );
		$('.offer-angle').toggleClass('fa-angle-right fa-angle-down');
	})


	// Dashboard page.  promotion block
	

	$('.wrap-promote-button').click(function() {
		$(this).next('.promotion-tools').slideDown('1000');
		$(this).fadeOut(100);
		})
	$('.close-promotion').click(function() {
		$(this).parent('.promotion-tools').slideUp(500);
		$(this).parent().prev('.wrap-promote-button').fadeIn(600);
	})
/*	$('.promote-button').hover(function() {
		$(this).next('.small-arrow').toggleClass('fa-caret-right fa-caret-down');
	});
*/





	//refferal link modal window
	$('.referral-link-button').click(function() {
		$('.wrap-modal-ref').fadeIn();
	})	
	$('.referral-link').click(function() {
		$('.wrap-modal-ref').fadeOut();
	})
	//affiliate modal
	$('.affiliate-button').click(function() {
		$('.wrap-modal-affiliate').fadeIn();
	})
	//socmedia link modal window
	$('.socmedia-button').click(function() {
		$('.wrap-modal-socmedia').fadeIn();
	})
	$('.close-icon, .close-icon-header').click(function() {
		$('.modal-backdrop, .wrapper-modal').fadeOut();
	})
	//deep link
	$('.deep-link').click(function() {
		$('.wrap-modal-deep').fadeIn();
	})

	$('.promo-link').click(function() {
		$('.promo-link').addClass('active-promo');
		$(this).removeClass('active-promo');
		$('.wrap-promo-code').slideDown(500);
	})
/*	$('.promo-link-last').click(function() {
		$('.promo-link-last').addClass('active-promo');

	})*/
	$('.socmedia-letter-icon').click(function() {
		$('.wrap-promo-code').slideUp(500);
		$('.promo-link').removeClass('active-promo');
	})





	//logout
	$('.edit-your-profile').click(function() {
		$('.wrap-change-login').fadeIn();
	})


	//close after click outside block

        $(document).mouseup(function (e){
          var div = $('.modal-ref'); 
          if (!div.is(e.target) 
              && div.has(e.target).length === 0) { 
              $('.wrapper-modal').fadeOut(500); 
          }
      });



	//Profile page

	$('.preferences-button').click(function() {
		$(this).toggleClass('preferences-button-active');
	})

	//close after click Esc
	$( document ).on( 'keydown', function ( e ) {
    	if ( e.keyCode === 27 ) {
        	$('.wrapper-modal').fadeOut(500);
    	}
	});

	//textarea counter

	$(document).ready(function() {
    var text_max = 0;
    $('#textarea_feedback').html(text_max + '/144 Characters');

    $('#textarea').keyup(function() {
        var text_length = $('#textarea').val().length;
        var text_remaining = text_max + text_length;

        $('#textarea_feedback').html(text_remaining + '/144 Characters');
    });
});
	//anchor





});
