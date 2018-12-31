/*  
 */

$(document).ready(function () { 
    
    $("#menu-pop").hide();
    
    $("#burger a").click(function (e) {
        e.preventDefault();
   
        if ($("#menu-pop").css("display") == "none") { 
            $("#menu-pop").show(); 
        } else {
            $("#menu-pop").hide();
        }
    });

})
