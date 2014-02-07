/*
    script for scrolling the page up when the scroll to the top link is clicked
*/

$(document).ready(function() {
   //hide the scroll-top link first
    $(".scroll-top").hide();
    
    //check if the scroll bar's top is greater that 150 if so display the scroll-top link
    $(function(){
       $(window).scroll(function() {
           if($(this).scrollTop() > 150){
               $(".scroll-top").fadeIn();
           }else{
               $(".scroll-top").fadeOut();
           }
       });
        
    //scroll the body to position 0 when the scroll top link is clicked
        $(".scroll-top").click(function(){
            $("body,html").animate({
                scrollTop: 0
            },600);
            return false;
        });
    });
});