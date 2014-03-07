        /*
            script used to open and close the mobile menu when the trigger is clicked
        */
    
    $(document).ready(function(){
        $("a#mobile-menu-trigger").on('click',function(){
            
            var mobileMenuContainer = document.getElementById("mobile-menu-container");
            var mobileMenu = document.getElementById("mobile-menu");
            var mobileMenu_height = null;
            
            /*
                correct margin top of the #title-section-container
            */
            $("#title-section-container").css("margin-top","0");
            /*
                computed style used by newer browsers
            */
            if(typeof getComputedStyle !== "undefined"){
                mobileMenu_height = window.getComputedStyle(mobileMenu,null).getPropertyValue("height");
            }else{
            /*
                computed style used by older browsers (legacy IE)
            */
                mobileMenu_height = mobileMenu.currentStyle["height"];
            }
            
            /*
                opening mobile menu when it is closed
            */
            if(mobileMenu_height === "0px"){
                mobileMenuContainer.style.display = "block";
                $("#mobile-menu-container").animate({
                    height: 250
                },300);
                mobileMenuContainer.style.borderBottom = "3px solid rgba(0,0,0,0.3)";
                $("#mobile-menu").animate({
                    height: 250
                },300).css("opacity","1");
                
            }else{
                /*
                    close mobile menu when its open
                */
                $("#mobile-menu-container").animate({
                    height: 0
                },300);
                mobileMenuContainer.style.borderBottom = "none";
                $("#mobile-menu").animate({
                    height: 0
                },300).css("opacity","0");
            }
            return false;
        });
    });