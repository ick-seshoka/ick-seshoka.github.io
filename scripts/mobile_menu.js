        /*
            script used to open and close the mobile menu when the trigger is clicked
        */
    
    $(document).ready(function(){
        $("a#mobile-menu-trigger").on('click',function(){
            console.log("mobile menu bar togle pressed");
            
            var mobileMenuContainer = document.getElementById("mobile-menu-container");
            var mobileMenu = document.getElementById("mobile-menu");
            var mobileMenu_height = null;
            
            /*
                computed style used by newer browsers
            */
            if(typeof getComputedStyle !== "undefined"){
                console.log("true");
                mobileMenu_height = window.getComputedStyle(mobileMenu,null).getPropertyValue("height");
            }else{
            /*
                computed style used by older browsers (legacy IE)
            */
                console.log("false");
                mobileMenu_height = mobileMenu.currentStyle["height"];
            }
            
            console.log("height: "+mobileMenu_height);
            
            /*
                opening mobile menu when it is closed
            */
            if(mobileMenu_height === "0px"){
                mobileMenuContainer.style.display = "block";
                mobileMenuContainer.style.height = "250px";
                mobileMenuContainer.style.borderBottom = "3px solid rgba(0,0,0,0.3)";
                mobileMenu.style.height = "250px";
                
            }else{
                /*
                    close mobile menu when its open
                */
                mobileMenuContainer.style.display = "none";
                mobileMenuContainer.style.height = "0px";
                mobileMenuContainer.style.borderBottom = "none";
                mobileMenu.style.height = "0px";
            }
        });
    });