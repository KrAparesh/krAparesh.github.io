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
});

function myFunction() {
    var x = document.querySelector(".nav-items");
    var y = document.querySelector(".hamburger");
    x.classList.toggle("ul_block");
    y.classList.toggle('opened');
    y.setAttribute('aria-expanded', y.classList.contains('opened'));
}


document.querySelectorAll(".nav-items li a").forEach((item) => item.onclick = myFunction);

//active section

var navLinks = document.querySelectorAll("nav ul li a");
var sections = document.querySelectorAll("section");

// Update the active section when the user scrolls
window.addEventListener("scroll", function () {
    // Get the current scroll position
    var scrollPos = window.pageYOffset || document.documentElement.scrollTop;

    // Loop through the sections and check which one is currently visible
    for (var i = 0; i < sections.length; i++) {
        var section = sections[i];
        var sectionTop = section.offsetTop;
        var sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
            // If the section is visible, add the "active" class to the corresponding link in the navbar
            var link = document.querySelector('nav ul li a[href="#' + section.id + '"]');
            if (link) {
                link.classList.add("active");
            }
        } else {
            // If the section is not visible, remove the "active" class from the corresponding link in the navbar
            var link = document.querySelector('nav ul li a[href="#' + section.id + '"]');
            if (link) {
                link.classList.remove("active");
            }
        }
    }
});
