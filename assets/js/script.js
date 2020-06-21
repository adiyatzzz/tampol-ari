$(document).ready(function () {

    
    $(".foto img").click(function () { 
        $(".foto img").css('animation', 'beundur .1s forwards');

        setTimeout(() => {
            $(".foto img").removeAttr('style');
        }, 300);
        
        
    })
});