/*
    script reduces the hight of the header iif the user scrolls 100px down
*/

$(document).ready(function(){
   $(function(){
       //select header object
       
       var headerElement = $("#page-header");
        $(window).scroll(function(){
           //check if user has scrolled 100px down
            
            if($(this).scrollTop() > 100){
                //add header class
                headerElement.addClass("hide-small-text");
            }else{
                //remove header class
                headerElement.removeClass("hide-small-text");
            }
        }); 
   });
});