
/*$('#welcome').css({
    "color":"red",
    "font-size":"50px"
});*/


/* $('h1').click(function(){

    $('#welcome').css({
        "color":"red",
        "font-size":"50px"
    });
});
 */
/*function clickme(){
    $('#welcome').css({
        "color":"red",
        "font-size":"50px"
    });
}
$(function(){
    $('h1').slideUp(2500).slideDown(2500);
    
});

$(window).on("load",function(){
    alert("Window is loaded");
})
*/
/* Pre-loader */
$(window).on('load',function(){
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});