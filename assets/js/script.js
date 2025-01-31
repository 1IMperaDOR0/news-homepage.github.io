let menu = document.querySelector(".menu").addEventListener("click", () => {
    let nav = document.querySelector('nav')
    nav.style.display = 'block'
    let block = document.querySelector(".block")
    block.style.display = 'block'
    let menu = document.querySelector(".menu")
    menu.style.display = 'none'
})

let close = document.querySelector(".close").addEventListener("click", () => {
    let nav = document.querySelector('nav')
    nav.style.display = 'none'
    let block = document.querySelector(".block")
    block.style.display = 'none'
    let menu = document.querySelector(".menu")
    menu.style.display = 'block'
})