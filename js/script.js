(function($) {
  'use strict';
    // $('[data-toggle="tooltip"]').tooltip();
    // $('[data-toggle="popover"]').popover();

    $(document).ready(function() {

      $(window).scroll(function(){



        var scroll = $(window).scrollTop();



          if (scroll > 0) {

             // $('#navbar1').css('background','rgba(0,0,0,.6)');

             //$('header#masthead .site-header-out .site-header-main').addClass("scrolled");

      

          }

          else{

            // $('#navbar1').css('background','rgba(0,0,0,0)');


            //$('header#masthead .site-header-out .site-header-main').removeClass( "scrolled" );

    
          }


      });




     // Add smooth scrolling to all links



    });


    // --- Nav |  02  |  drop-down
    $('.btn02').click(function() {
      $('.drop-down').animate({top: "0px"}, 200);
    });
    
    $('h3.nav02').click(function() {
      $('.drop-down').animate({top: "-100vh"}, 200);
    });

    $('.menu-wrapper a').click(function() {
      $('.drop-down').animate({top: "-100vh"}, 200);
    });



      AOS.init();






      $(document).ready(function() {
        if(!$('#myCanvas').tagcanvas({
          //textColour: '#ff0000',
          outlineColour: '#ff00ff00',
          reverse: true,
          depth: .5,
          maxSpeed: 0.05,
          textFont: null,
          textColour: null,
          weightMode:'both',
          weight: true,
          weightGradient: {
           0:    '#f00', // red
           //0.33: '#ff0', // yellow
           //0.66: '#0f0', // green
           1:    '#00f'  // blue
          }
        },'tags')) {
          // something went wrong, hide the canvas container
          $('#myCanvasContainer').hide();
        }
      });

   
   

})(jQuery);