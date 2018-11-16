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

// =================================================================================

$(document).ready(function(){
    $("#chainBtn").click(function(){
        $("#chain").css("color", "red").slideUp(2000).slideDown(2000);
    });
});

// =================================================================================

$(document).ready(function(){
    $("#getBtn1").click(function(){
        alert("Text: " + $("#getTest").text());
    });
    $("#getBtn2").click(function(){
        alert("HTML: " + $("#getTest").html());
    });
});

// =================================================================================

$(document).ready(function(){
    $("#setBtn1").click(function(){
        $("#setTest1").text("Hello world!");
    });
    $("#setBtn2").click(function(){
        $("#setTest2").html("<b>Hello world!</b>");
    });
    $("#setBtn3").click(function(){
        $("#setTest3").val("Hello world!");
    });
});

// =================================================================================

$(document).ready(function(){
    $("#addBtn1").click(function(){
        $(".addP").append(" <b>Appended text</b>.");
    });

    $("#addBtn2").click(function(){
        $("#addList").append("<li>Appended item</li>");
    });

    $("#addBtn3").click(function(){
        $(".addP").prepend(" <b>Prepended text</b>.");
    });

    $("#addBtn4").click(function(){
        $("#addList").prepend("<li>Prepended item</li>");
    });

    $("#addBtn5").click(function(){
        $(".addP").after(" <b>After text</b>.");
    });

    $("#addBtn6").click(function(){
        $("#addList").after("<li>After item</li>");
    });

    $("#addBtn7").click(function(){
        $(".addP").before(" <b>Before text</b>.");
    });

    $("#addBtn8").click(function(){
        $("#addList").before("<li>Before item</li>");
    });
});

// =================================================================================

$(document).ready(function(){
    $("#removeBtn").click(function(){
        $("#removeContent").remove();
    });
    $("#emptyBtn").click(function(){
        $("#emptyContent").empty();
    });
});

// =================================================================================

$(document).ready(function(){
    $("#addClassBtn1").click(function(){
        $(".addClassEx").addClass("addBlue");
        $("#addClassEx2").addClass("important");
    });
});

$(document).ready(function(){
    $("#addClassBtn2").click(function(){
        $("#addClassEx3").addClass("important addBlue");
    });
});

// =================================================================================

$(document).ready(function(){
    $("#removeClassBtn").click(function(){
        $(".removeBlue").removeClass("removeBlue");
    });
});

// =================================================================================

$(document).ready(function(){
    $("#toggleClassBtn").click(function(){
        $(".toggleEx").toggleClass("toggleBlue");
    });
});

// =================================================================================

$(document).ready(function(){
    $("#returnRedBtn").click(function(){
        alert("Background color = " + $("#returnRed").css("background-color"));
    });
    $("#returnGreenBtn").click(function(){
        alert("Background color = " + $("#returnGreen").css("background-color"));
    });
    $("#returnBlueBtn").click(function(){
        alert("Background color = " + $("#returnBlue").css("background-color"));
    });
    $("#returnPurpleBtn").click(function(){
        alert("Background color = " + $("#returnPurple").css("background-color"));
    });
});

// =================================================================================

$(document).ready(function(){
    $("#setCSSBtn").click(function(){
        $(".setCSSex").css("background-color", "yellow");
    });
});

// =================================================================================

$(document).ready(function(){
    $("#multiPropsBtn").click(function(){
        $(".multiPropsEX").css({"background-color": "yellow", "color": "black", "font-size": "200%"});
    });
});

// =================================================================================

$(document).ready(function(){
    $("#dimensionsBtn").click(function(){
        var txt = "";
        txt += "Width of div: " + $("#dimensionsEX").width() + "</br>";
        txt += "Height of div: " + $("#dimensionsEX").height();
        $("#dimensionsEX").html(txt);
    });
});