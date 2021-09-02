let timer = null
$(document).on('scroll',function () {
    clearTimeout(timer)
    timer = setTimeout(function () {
        console.log(1)
        if (window.screen.height < window.scrollY) {
            $('.backtop').addClass('show_backtop_btn')
        } else {
            $('.backtop').removeClass('show_backtop_btn')
        }
    },500)
})

$('.backtop').click(function () {
    //html,body设置动画，[$(this).index()]当前点击标签的索引值
    $('html,body').animate({
        scrollTop:0
    });
})