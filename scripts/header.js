/*
    script reduces the hight of the header if the user scrolls 40px down
*/

$(document).ready(function(){
   $(function(){
       //select header object
       
       var shareGroup = $(".share-group");
       var headerElement = $("#page-header");
        $(window).scroll(function(){
           //check if user has scrolled 100px down
            
            if($(this).scrollTop() > 40){
                //add header class
                headerElement.addClass("hide-small-text");
                shareGroup.addClass("move-up");
            }else{
                //remove header class
                headerElement.removeClass("hide-small-text");
                shareGroup.removeClass("move-up");
            }
        }); 
   });
});