jQuery(document).ready(function($) {
    // Scroll to the 3rd plan if there is no # in the url
    if(!window.location.hash && window.innerWidth < 768 && $(".third_plan").exists()) {
        setTimeout(() => {
            $(document.documentElement).animate({
                scrollTop: $(".third_plan").offset().top - 56
            }, 300);
        }, 1000);
    }

    $('.goToGate').on('click', function(e) {
        e.preventDefault();
        const items = JSON.parse($("#plan-details").val());
        const plan_name = $(this).data('plan');

        // Push data to GTM
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event':'begin_checkout',
            'ecommerce': {
                'items': [
                    items.find((i) => i.item_name === plan_name)
                ]
            }
        });

        localStorage.setItem('ecommerce_items', JSON.stringify({
            plan_name,
            items,
        }));

        if (!$(this).hasClass("open-popup"))
            window.location.href = $(this).attr('href');
    });

	$('.cancel_plan').on('click', function() {
        const userType = new URLSearchParams(unescape(readCookie("mm"))).get("UserTarget");

        if (userType === "beauty") {
            window.location.href = "/memberships/cancel/";
            return;
        }

        $('.cancel_plan').fadeOut('fast', function() {
			$('.downgrade_to_free').fadeIn();
        });
    });

    $('.no_btn').on('click', function() {
        $('.downgrade_to_free').fadeOut('fast', function() {
            $('.cancel_plan').fadeIn();
        });
    });

    $('.more_details').on('click', function() {
        var $details = $(this).parent().parent().find('.details');
        $details.slideToggle();
    });

	$('.compare_plans').click(function() {
		$('.compare_plans').fadeOut();
		$('.plan_details').slideDown("slow", function() {
			$( ".triangle" ).animate({
				top: "-15"
			}, 1000, function() {
				// Animation complete.
			});

			$('.plan_details .get_it').fadeIn('slow');
			$('#double_star').fadeIn('slow');
		});

		var n = $(document).height();
		$('html, body').animate({ scrollTop: n }, '50');
	});

    $('.open-popup').on('click', function(e) {
        e.preventDefault();

        openSpecialOfferPopup();
    });

    $('.special-offer-popup-close-icon, .special-offer-popup-overlay').on('click', function(e) {
        closeSpecialOfferPopup();
    });

    if (!is_logged_in) {
        $('.plan:not(.first_plan) .get_btn').click(function () {
            setCookie('no_authorization_redirect_url', window.location.href);
        });
    }
});

function openSpecialOfferPopup() {
    $('.special-offer-popup').fadeIn();
    $('body').addClass('popup-blur');
}

function closeSpecialOfferPopup() {
    $('.special-offer-popup').fadeOut();
    $('body').removeClass('popup-blur');
}

