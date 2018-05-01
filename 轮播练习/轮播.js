
初始化()

setInterval(()=>{
  
  makeLeave(getImg(n))
  .one('transitionend', (e) => {
    makeEnter(e)
  })
  makeCurrent(getImg(n+1))
  n+=1
},2500)








function 初始化() {
  n = 1
  $(`.images>img:nth-child(${n})`).addClass('current')
      .siblings().addClass('enter')
}

function x(n) {
  if (n > 4) {
      n = n % 4
  }
  if (n === 0) {
      n = 4
  }
  return n
}

function getImg(n) {
  return $(`.images>img:nth-child(${x(n)})`)
}

function makeLeave(){
  return $(`.images>img:nth-child(${x(n)})`)
  .addClass('leave').removeClass('current enter')
}

function makeEnter(e){
  return $(e.currentTarget).removeClass('leave current')
      .addClass('enter')
}

function makeCurrent(){
  return $(`.images>img:nth-child(${x(n+1)})`)
  .addClass('current').removeClass('enter leave')
}

