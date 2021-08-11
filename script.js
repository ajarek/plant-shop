const day = document.querySelector('#day')
const hour = document.querySelector('#hour')
const minute = document.querySelector('#minute')
const second = document.querySelector('#second')
const cart = document.querySelector('.fa-shopping-cart')
const cartData = document.querySelector('.data')
const shopingCart = document.querySelector('.shopingCart')
const btnShoping = document.querySelectorAll('.products button')
const ul = document.querySelector('.shopingCart ul')
const pay = document.querySelector('#pay')
const category = document.querySelectorAll('.category')
const categoryBtn = [...document.querySelectorAll('.category button')]
const slaider = document.querySelector('main .slaider')
const left=document.querySelector('.left')
const right=document.querySelector('.right')
let src = ['shop','shop1','shop2']
let arr = []
let i=3
let j=-1




function blankme(){
i--
slaider.style.background=`url('./img/${src[i]}.jpg')`
slaider.style.backgroundPosition = `center bottom`;
if(i==0){i=3}
}
function add(){
    j++
    slaider.style.background=`url('./img/${src[j]}.jpg')`
    slaider.style.backgroundPosition = `center bottom`;
    if(j==2){j=-1}
    }



function deal() {
    const time = new Date
    day.innerHTML = 31 - time.getDate()
    hour.innerHTML = 24 - time.getHours()
    minute.innerHTML = 60 - time.getMinutes()
    second.innerHTML = 60 - time.getSeconds()
}
setInterval(deal, 1000)

function addScore() {
    cartData.innerHTML = arr.length
}

function buyPlant(e) {
    let quanPlant = e.target.parentNode.querySelector('.quantity input').value
    let namePlant = e.target.parentNode.querySelector('h3').innerText
    let pricePlant = e.target.parentNode.querySelector('.price span').innerText
    const li = document.createElement('li')
    li.innerHTML = `${namePlant}  ${quanPlant}  pcs  ${pricePlant}  ${(quanPlant*pricePlant).toFixed(2)} $<span>X</span ><hr>`
    ul.append(li)
    arr.push(quanPlant * pricePlant)
    sum()
    addScore()
    deleteItem()
}

function sum() {
    let total = arr.reduce((acu, value) => (acu + value))
    pay.innerText = `to pay:${total.toFixed(2)} $`
}

function deleteItem() {
    const items = document.querySelectorAll('li span')
    items.forEach((item, index) => {
        item.addEventListener('click', (ev) => {
            ev.target.parentElement.remove(ev)
            arr.splice(index, 1)
            
            addScore()
            if (arr.length > 0) {
                let total = arr.reduce((acu, value) => (acu + value))
                
                pay.innerText = `to pay:${total.toFixed(2)} $`
            } else {
                total = 0
                pay.innerText = `to pay:${total.toFixed(2)} $`
            }
        })
    })
}


cart.addEventListener('click', () => {
    shopingCart.classList.toggle('active')
})
btnShoping.forEach(btn => {
    btn.addEventListener('click', buyPlant)
})
category.forEach((cat,index)=>{
cat.addEventListener('click',()=>{
    categoryBtn[index].classList.toggle('show')
})
}) 
left.addEventListener('click',blankme)
right.addEventListener('click',add)