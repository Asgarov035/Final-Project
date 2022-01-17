$(document).ready(function () {
    AOS.init(); 
    navbar()
    $(window).on("scroll",function () {
        navbar();
    })
   
  

    $(document).on("click", ".navbar-nav a", function () {
        $(this).addClass("active");
    })
    
    $(document).on("click","#all",function () {
        $(".one").removeClass("d-none");
        $(".two").removeClass("d-none");
        $(".three").removeClass("d-none");
        $(".four").removeClass("d-none");
        $(".five").removeClass("d-none");
        $(".six").removeClass("d-none");
    })
    $(document).on("click","#branding",function () {
        $(".one").removeClass("d-none");
        $(".two").addClass("d-none");
        $(".three").removeClass("d-none");
        $(".four").addClass("d-none");
        $(".five").addClass("d-none");
        $(".six").addClass("d-none");
    })
    $(document).on("click","#marketing",function () {
        $(".one").removeClass("d-none");
        $(".two").removeClass("d-none");
        $(".three").addClass("d-none");
        $(".four").addClass("d-none");
        $(".five").addClass("d-none");
        $(".six").addClass("d-none");
    })
    $(document).on("click","#web",function () {
        $(".one").addClass("d-none");
        $(".two").addClass("d-none");
        $(".three").addClass("d-none");
        $(".four").removeClass("d-none");
        $(".five").addClass("d-none");
        $(".six").removeClass("d-none");
    })
    $(document).on("click","#grapic",function () {
        $(".one").addClass("d-none");
        $(".two").removeClass("d-none");
        $(".three").addClass("d-none");
        $(".four").addClass("d-none");
        $(".five").removeClass("d-none");
        $(".six").addClass("d-none");
    })

    $('.testimonial-carusel').owlCarousel({
        loop: true,
        margin: 20,
        items: 3,
        dots: true
    })
    function navbar() {
        if ($(window).scrollTop() >= 30) {
            $(".navbar").addClass("scrolled")
            $(".navbar-brand img").attr("src","img/logoblack.svg")
        }
        else {
            $(".navbar").removeClass("scrolled")
            $(".navbar-brand img").attr("src","img/logo.svg")


        }
    }

});