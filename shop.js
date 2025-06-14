
let Menu = document.querySelector(".icons8-close-50")
let close_Menu = document.querySelector(".icons_png")
let nav_Link = document.querySelector(".nav_link_second")

Menu.addEventListener("click", () => {
    Menu.style.display = "none"
    close_Menu.style.display = "flex"
    nav_Link.style.display = "block"
})


close_Menu.addEventListener("click", () => {
    close_Menu.style.display = "none"
    Menu.style.display = "flex"
    nav_Link.style.display = "none"
})





let Product = document.querySelector(".product_image")
let imgProduct = document.querySelector(".icon_area")


