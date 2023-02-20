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

    // $("ul").on('click', () => {
    //     $("ul").toggleClass("ul_block");
    //     $(".hamburger").toggleClass("opened");
    //     $(".hamburger").setAttribute('aria-expanded', $(".hamburger").contains('opened'));
    // })
    
    // $(".hamburger").on('click', () => {
    //     $("ul").toggleClass("ul_block");
    //     $(".hamburger").toggleClass("opened");
    //     $(".hamburger").setAttribute('aria-expanded', $(".hamburger").contains('opened'));
    // })

});

function myFunction() {
    var x = document.querySelector(".nav-items");
    var y = document.querySelector(".hamburger");
    x.classList.toggle("ul_block");
    // x.style.top = "0vh";
    y.classList.toggle('opened');
    y.setAttribute('aria-expanded', y.classList.contains('opened'));
}

