$(document).ready(function(){
    $("#hideBtn").click(function(){
        $("#hideshowP").hide();
    });
});

$(document).ready(function(){
    $("#showBtn").click(function(){
        $("#hideshowP").show();
    });
});

$(document).ready(function(){
    $("#toggleBtn").click(function(){
        $("#toggleP").toggle();
    });
});

// =================================================================================

$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});

// =================================================================================

$(document).ready(function(){
    $("#animateBlue").click(function(){
        var div = $("#blueSquare");
        div.animate({height: '300px', opacity: '0.4'}, "slow");
        div.animate({width: '300px', opacity: '0.8'}, "slow");
        div.animate({height: '100px', opacity: '0.4'}, "slow");
        div.animate({width: '100px', opacity: '0.8'}, "slow");
    });
});

$(document).ready(function(){
    $("#animateRight").click(function(){
        var div = $("#purpleSquare");
        div.animate({left: '250px'});
    });
});

// =================================================================================

$(document).ready(function(){
    $("#chainingBtn").click(function(){
        $("#chain").css("color", "red").slideUp(2000).slideDown(2000);
    });
});
