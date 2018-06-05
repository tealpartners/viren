$(document).ready(function(){

    vp_width = document.body.clientWidth;
    margin = 20;
    object = 800;
    scale_max = 0.675 // Manually set max

    scale = (vp_width - 2 * margin) / object

    if(scale > scale_max){
        scale = scale_max;
    }

    scale_str = 'scale(' + scale + ')';


    $('.js-window').css('transform', scale_str );

})