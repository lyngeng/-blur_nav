const lg_blur =  (options) => {
    const lg_options = options
    // 获取导航栏父标签、导航栏、模糊导航栏、装载模糊的容器、页面内容
    const container = document.querySelector(lg_options.container)
    const lg_nav = document.querySelector(lg_options.nav)

    const lg_blur_nav = document.querySelector("#lg_blur_nav")
    const lg_blur_container = document.querySelector("#lg_blur_container")

    let blur_nav = null
    let blur_container = null
    let blur_nav_bg = null
    let blur_container_bg = null

    // 导航栏不存在
    if (lg_blur_nav === null){
        blur_nav = document.createElement('div')
        blur_nav.id = 'lg_blur_nav'
        blur_nav.className = 'lg_blur_nav'

        if (lg_blur_container !== null) container.removeChild(lg_blur_container)

        blur_container = document.createElement('div')
        blur_container.id = 'lg_blur_container'
        blur_container.className = 'lg_blur_container'

        blur_nav.appendChild(blur_container)
        container.append(blur_nav)
    } else if (lg_blur_container === null){ // 模糊导航容器不存在
        blur_container = document.createElement('div')
        blur_container.id = 'lg_blur_container'
        blur_container.className = 'lg_blur_container'

        lg_blur_nav.append(blur_container)
        blur_nav = lg_blur_nav
        container.append(blur_nav)
    } else {
        blur_nav = lg_blur_nav
        blur_container = lg_blur_container
    }

    // 将模糊导航栏设置为导航栏高 + top px
    const addTop = 8
    blur_nav.style.height = lg_nav.offsetHeight + addTop + 'px'
    blur_nav.style.top = lg_nav.offsetTop - addTop + 'px'

    // 循环将页面内容添加到模糊导航主体中
    const parent = container.cloneNode(true)
    const na = parent.querySelector(lg_options.nav)
    const nav = parent.querySelector('#lg_blur_nav')
    parent.removeChild(na)
    parent.removeChild(nav)
    blur_container.append(parent)
    for (let i=0;i<lg_options.contents.length;i++){
        const con = document.querySelector(lg_options.contents[i]).cloneNode(true)
        blur_container.appendChild(con)
    }

    blur_nav_bg = blur_nav.cloneNode(false)
    blur_nav_bg.id = "lg_blur_nav_bg"
    container.append(blur_nav_bg)
    blur_nav_bg.style.marginTop = lg_nav.offsetHeight + 'px'
    blur_nav_bg.style.height = '0px'
    blur_nav_bg.className = 'lg_blur_nav transition'

    blur_container_bg = blur_container.cloneNode(true)
    blur_nav_bg.appendChild(blur_container_bg)

    // 绑定滑动事件，滚动时同步将模糊容器中的内容滚动
    let active = false
    window.addEventListener("scroll",function () {
        if (!active){
            requestAnimationFrame(onTopChange)
        }
    })
    const onTopChange = function () {
        blur_container.style.transform = 'translateY(' + -this.scrollY + 'px)'
        blur_container_bg.style.transform = 'translateY(' + -(this.scrollY+80) + 'px)'
        active = false
    }

}