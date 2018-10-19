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