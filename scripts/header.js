/*
    script reduces the hight of the header if the user scrolls 40px down
*/

$(document).ready(function(){
   $(function(){
       //select header object
       
       var headerElement = $("#page-header");
        $(window).scroll(function(){
           //check if user has scrolled 100px down
            
            if($(this).scrollTop() > 40){
                //add header class
                headerElement.addClass("hide-small-text");
            }else{
                //remove header class
                headerElement.removeClass("hide-small-text");
            }
        }); 
   });
});