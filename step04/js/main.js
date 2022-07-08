$(function(){

    $('.mbtn').on('.click', function(){
        $('.gnb').toggleClass('on')
    })

    $('.gnb>ul>li>a').on('click', function(event){
        if($(window).width() < 769) {
            event.preventDefault();
            $('.smenu').hide();
            $(this).next().show();
        }
    })

    // 사이즈가 변할때 사라짐
    $(window).on('resize', function(){
        $('.smenu').removeAttr('style')
    })
})