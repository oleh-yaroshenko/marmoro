const menu = document.querySelector(".header-mobile")
const showMenu = document.querySelector(".header-burger")
const hideMenu = document.querySelector(".header-mobile-burger")

showMenu.addEventListener("click", function () {
    menu.classList.add("header-mobile-show")
})

hideMenu.addEventListener("click", function () {
    menu.classList.remove("header-mobile-show")
})