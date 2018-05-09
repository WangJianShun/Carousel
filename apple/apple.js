let $buttons = $('.buttons')
let $slides = $('.images')
let $images = $slides.children('img')
let current = 0
$slides.css({ transform: 'translateX(-920px)' })
makeFakeSlides()

bindEvents()

let timer = setInterval(function () {
  goToSlide(current + 1)
}, 2000)


//防止页面切换到后台时乱序
document.addEventListener('visibilitychange', function (e) {
  if (document.hidden) {
    window.clearInterval(timer)
  } else {
    timer = setInterval(function () {
      goToSlide(current + 1)
    }, 2000)
  }
})

$('.window,.menu').on('mouseenter', function () {
  window.clearInterval(timer)//停留在窗口时停止计时器
}).on('mouseleave', function () {
  timer = setInterval(function () {
    goToSlide(current + 1)
  }, 2000)
})

function makeFakeSlides() {
  let $firstCopy = $images.eq(0).clone(true)
  let $lastCopy = $images.eq($images.length - 1).clone(true)

  $slides.append($firstCopy)
  $slides.prepend($lastCopy)
}


function bindEvents() {
  $('.menu').on('click', 'li', function (e) {
    let $button = $(e.currentTarget)
    let index = $button.index()
    goToSlide(index)
  })
}


function goToSlide(index) {
  if (index > $buttons.length - 1) {
    index = 0
  } else if (index < 0) {
    index = $buttons.length - 1
  }
  if (current === $buttons.length - 1 && index === 0) {
    //最后一张到第一张

    $slides.css({ transform: `translateX(${-($buttons.length + 1) * 920}px)` })//移动到假的最后一张
      .one('transitionend', function () {
        $slides.hide()
          .offset()
        $slides.css({ transform: 'translateX(-920px)' })
          .show()
      })
  } else if (current === 0 && index === $buttons.length - 1) {
    //第一张到最后一张

    $slides.css({ transform: `translateX(0px)` })
      .one('transitionend', function () {
        $slides.hide()
          .offset()
        $slides.css({ transform: `translateX(${-(index + 1) * 920}px) ` })
          .show()
      })
  } else {

    $slides.css({ transform: `translateX(${-(index + 1) * 920}px)` })
  }
  current = index
}