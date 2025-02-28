let menu = document.querySelector(".menu").addEventListener("click", () => {
    let headerUl = document.querySelector(".header ul")
    headerUl.style.display = 'grid'
    let div = document.querySelector(".header div")
    div.style.display = 'flex' 
    let menu = document.querySelector(".menu")
    menu.style.display = 'none'
})

let close = document.querySelector(".menuClose").addEventListener("click", () => {
    let headerUl = document.querySelector(".header ul")
    headerUl.style.display = 'none'
    let div = document.querySelector(".header div")
    div.style.display = 'none' 
    let menu = document.querySelector(".menu")
    menu.style.display = 'block'
})