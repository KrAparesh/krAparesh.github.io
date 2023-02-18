$(document).ready(() => {
    var sticky = $(".navbar").offset();

    $(document).scroll(() => {
        // console.log(sticky);
        if(window.pageYOffset > sticky.top){
            $("header").addClass("sticky");
        } else {
            $("header").removeClass("sticky");
        }
    });

    $(function() {
		$(document).on('click', 'a.page-scroll', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 600, 'easeInOutExpo');
			event.preventDefault();
		});
	});

})
