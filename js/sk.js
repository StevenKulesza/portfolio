// scrollTo

$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

// viewport js function

$(document).ready(function() {
    $('.check').addClass("cHidden").viewportChecker({
        classToAdd: 'cVisible animated slideInUp',
        offset: 90,
        repeat: false,
        callbackFunction: function(elem, action) {},
        scrollHorizontal: false
    });
});
$(document).ready(function() {
    $('.fCheck').addClass("cHidden").viewportChecker({
        classToAdd: 'cVisible animated fadeIn',
        offset: 10,
        repeat: false,
        callbackFunction: function(elem, action) {},
        scrollHorizontal: false
    });
});

// hi, Google Analytics

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-74372516-1', 'auto');
ga('send', 'pageview');

