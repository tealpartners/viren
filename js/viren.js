$(document).ready(function(){
    rescale();
})

function rescale(){
    vp_width = document.body.clientWidth;
    margin = 20;
    object = 800;
    scale_max = 0.675 // Manually set max

    scale = (vp_width - 2 * margin) / object

    if(scale > scale_max){
        scale = scale_max;
    }

    if (vp_width > 600 && vp_width < 900){
        
    }

    if (vp_width > 900 && vp_width < 1100){
        if(scale > 0.48){
            scale = 0.48;
        }
    }

    scale_str = 'scale(' + scale + ')';
    $('.js-window').css('transform', scale_str );
}

$( window ).resize(function() {
    rescale();
});