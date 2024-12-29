//  Stykey Header  
$(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    
    if(scrolling > 200){
        $('.navbar').addClass('sticky_menu');
    }
    else {
         $('.navbar').removeClass('sticky_menu');
    }
    });  