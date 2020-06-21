$(document).ready(function () {

    var count = 0;
    $(".foto img").click(function () { 
        $(".foto img").css('animation', 'beundur .1s forwards');
        

        setTimeout(() => {
            $(".foto img").removeAttr('style');

        }, 300);
        count++;
        $(".hit").html(count);
        
    })
});