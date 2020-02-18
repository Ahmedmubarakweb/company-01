//to hide and show works div
$(".our-works .more .pro").hide();
$(".btn-show").click(function(){
    $(".our-works .more .pro").toggle(300);
})

//to make scroll top button
var btnscroll=$('.move-up');
$(window).scroll(function(){
   
    if($(this).scrollTop()>2500)
    btnscroll.show();
    else
    btnscroll.hide();
});
//to scroll top
btnscroll.click(function(){
    $('html,body').animate({scrollTop:0},700);
});
// to smoth scroll
$("li a.nav-link").click(function(){
    $("html,body").animate({
        scrollTop: $("#"+$(this).data('value')).offset().top
    },1000);
   
});
//to switch active class betwenn a tag
$("li.nav-item").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
});

//

