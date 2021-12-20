(function(a){a(window).load(function(){a(".preloader").fadeOut(1E3)});a(".navbar-collapse a").on("click",function(){a(".navbar-collapse").collapse("hide")});a(window).scroll(function(){50<a(".navbar").offset().top?a(".navbar-fixed-top").addClass("top-nav-collapse"):a(".navbar-fixed-top").removeClass("top-nav-collapse")});a(".owl-carousel").owlCarousel({animateOut:"fadeOut",items:1,loop:!0,autoplayHoverPause:!1,autoplay:!0,smartSpeed:1E3});a.stellar({horizontalScrolling:!1});a(".image-popup").magnificPopup({type:"image",
    removalDelay: 300, mainClass: "mfp-with-zoom", gallery: { enabled: !0 }, zoom: { enabled: !0, duration: 300, easing: "ease-in-out", opener: function (b) { return b.is("img") ? b : b.find("img") } }
}); a(function () { a(".custom-navbar a, #home a").on("click", function (b) { var c = a(this); a("html, body").stop().animate({ scrollTop: a(c.attr("href")).offset().top - 49 }, 1E3); b.preventDefault() }) }); (new WOW({ mobile: !1 })).init()
})(jQuery);

// Making map interaction on mouse over

var map = document.getElementById ('mymap'); 
var maplistner = function (e) { 
    var frame = document.createElement ('iframe'); 
    frame.src = this.getAttribute ('data-src'); 
    map.appendChild (frame); 
    map.removeEventListener ("mouseover", maplistner); 
}; 
map.addEventListener('mouseover', maplistner);

//ServiceWorker turn

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('sw_cached_site.js')
            .then(reg => console.log('Service worker registered'))
            .catch(err => console.log(`Service Worker: Error: ${err}`));
    });
} 