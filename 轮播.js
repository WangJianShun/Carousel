let n
初始化()

setInterval(() => {
    makeleave(getImg(n))
        .one('transitionend', (e) => {
            makeEnter($(e.currentTarget))
        })
    makecurrent(getImg(n+1))
    n = n + 1
}, 1000)

function x(n) {
    if (n > 3) {
        n = n % 3
    }
    if (n === 0) {
        n = 3
    }
    return n
}

function getImg(n){
    return $(`.images>img:nth-child(${x(n)})`)
}
function 初始化() {
    n = 1
    $(`.images>img:nth-child(${n})`).addClass('current')
        .siblings().addClass('enter')
}

function makecurrent ($node){
    return  $($node).removeClass('enter leave').addClass('current')

}
function makeEnter ($node){
    return  $($node).removeClass('current leave').addClass('enter')

}
function makeleave($node) {
    return $($node).removeClass('current enter').addClass('leave')

}



