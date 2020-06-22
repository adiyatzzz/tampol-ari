$(document).ready(function () {

    var count = 0;
    $(".foto").click(function () { 
        $(".foto div").addClass("tampol-animation");
        $(".foto").css("pointer-events", "none");
        setTimeout(() => {
            $(".foto div").removeClass("tampol-animation");
            $(".foto").removeAttr("style");
            count++;
            $(".hit").html(count);
        }, 200);
        $("3tampol").css("opacity", "1");
        $(".tampol").css("z-index", "3");
        
        
    })

});