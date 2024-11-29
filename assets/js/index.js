$("#btn-close").click(function(){
    // $(".navbar-section").css("display","none");
    $(".navbar-section").animate({right: '-300px'});
})
$("#btn-open").click(function(){
    // $(".navbar-section").css("display", "flex");
    $(".navbar-section").animate({right: '0'});
})