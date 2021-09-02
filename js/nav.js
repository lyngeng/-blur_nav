$('.nav_item').each( function () {
    $(this).hover(function () {
        $('#lg_blur_nav_bg').addClass('show_blur_nav_bg')
        $(this).find('.dropdown-layer').addClass('show_nav_item')
    },function () {
        $('#lg_blur_nav_bg').removeClass('show_blur_nav_bg')
        $(this).find('.dropdown-layer').removeClass('show_nav_item')
    })
})
let isShowLang = false
let isShowSearch = false
$('.icon-language').click(function () {
    isShowLang = !isShowLang
    if (isShowLang) {
        if (isShowSearch) {
            isShowSearch = false
            $('.icon-search').find('.dropdown-layer').removeClass('show_nav_item')
            $('#lg_blur_nav_bg').addClass('show_blur_nav_bg')
        }
        $('#lg_blur_nav_bg').addClass('show_blur_nav_bg')
        $(this).find('.dropdown-layer').addClass('show_nav_item')
    } else {
        $('#lg_blur_nav_bg').removeClass('show_blur_nav_bg')
        $(this).find('.dropdown-layer').removeClass('show_nav_item')
    }
})
$('.icon-search').click(function () {
    isShowSearch = !isShowSearch
    if (isShowSearch) {
        if (isShowLang) {
            isShowLang = false
            $('.icon-language').find('.dropdown-layer').removeClass('show_nav_item')
            $('#lg_blur_nav_bg').addClass('show_blur_nav_bg')
        }
        $('#lg_blur_nav_bg').addClass('show_blur_nav_bg')
        $(this).find('.dropdown-layer').addClass('show_nav_item')
    } else {
        $('#lg_blur_nav_bg').removeClass('show_blur_nav_bg')
        $(this).find('.dropdown-layer').removeClass('show_nav_item')
    }

})
$('.search_options').hover(function () {
    return
},function () {
    $('#lg_blur_nav_bg').removeClass('show_blur_nav_bg')
    $(this).find('.dropdown-layer').removeClass('show_nav_item')
    isShowLang = false
    isShowSearch = false
})