// window.onscroll = function() {myFunction()};

// var navbar = document.getElementByClass("navbar");

// var sticky = navbar.offsetTop;

// function myFunction(){
//     if(window.pageYOffset >= sticky){
//         navbar.classList.add("sticky");
//     } else {
//         navbar.classList.remove("sticky");
//     }
// }


$(document).ready(() => {
    var sticky = $("header").offset();

    $(document).scroll(() => {
        // console.log(sticky);
        if(window.pageYOffset > sticky.top){
            $("header").addClass("sticky");
        } else {
            $("header").removeClass("sticky");
        }
    })
})