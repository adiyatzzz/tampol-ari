$(document).ready(function () {

    var count = 0;
    var audio = document.getElementById("sfx");
    $(".foto").click(function () { 
        $(".foto div").addClass("tampol-animation");
        $(".foto").css("pointer-events", "none");
        audio.play();
        setTimeout(() => {
            $(".foto div").removeClass("tampol-animation");
            $(".foto").removeAttr("style");
            count++;
            $(".hit").html(count);
            audio.pause();
            audio.currentTime = 0;
        }, 500);

        $(".tampol").css("opacity", "1");
        $(".tampol").css("z-index", "3");
        
        // setInterval(() => {
            
        // }, 200);
    })

});