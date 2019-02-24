(function($) {
  "use strict"; // Start of use strict


   $("#btnSubmit").click(function() {
       $("#sendmail").validate();

       if ($("#sendmail").valid()) {
           $.ajax({
               type: "POST",
               url: "/echo/json/",
               cache: false,
               contentType: "application/json; charset=utf-8",
               data: "{ 'body': '" + $("#txtMessage").val() + "'," + "'from': '" + $("#inputEmail").val() + "'," + "'subject: 'email from" + $("#inputName").val() + "'," + $("#inputContact").val() + "'," + "}",
               dataType: "json",
               complete: function(transport) {
                   alert(transport.status);
                   if (transport.status == 200) {
                       $("#formcontainer").html("<h1>Success</h1>");
                   }
                   else {
                       alert("Please try again later");
                   }
               }
           });
       }


       //so that the page doesn't post back
       return false;
   });


  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 100
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict
