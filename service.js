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



// content
content = document.querySelector("._content_image img")
content1 = document.querySelector("._content_image_2 img")



content.addEventListener('mouseover', () => {
    content.style.display = "none"
    content1.style.display = "block"
})


content1.addEventListener('mouseout', () => {
    content.style.display = "block"
    content1.style.display = "none"
})


// content2
content2 = document.querySelector("._content_image_3 img")
content3 = document.querySelector("._content_image_4 img")



content2.addEventListener('mouseover', () => {
    content2.style.display = "none"
    content3.style.display = "block"
})


content3.addEventListener('mouseout', () => {
    content2.style.display = "block"
    content3.style.display = "none"
})


// content5
content5 = document.querySelector("._content_image_5 img")
content6 = document.querySelector("._content_image_6 img")



content5.addEventListener('mouseover', () => {
    content5.style.display = "none"
    content6.style.display = "block"
})


content6.addEventListener('mouseout', () => {
    content5.style.display = "block"
    content6.style.display = "none"
})


// content7
content7 = document.querySelector("._content_image_7 img")
content8 = document.querySelector("._content_image_8 img")



content7.addEventListener('mouseover', () => {
    content7.style.display = "none"
    content8.style.display = "block"
})


content8.addEventListener('mouseout', () => {
    content7.style.display = "block"
    content8.style.display = "none"
})


// content9
content9 = document.querySelector("._content_image_9 img")
content10 = document.querySelector("._content_image_10 img")



content9.addEventListener('mouseover', () => {
    content9.style.display = "none"
    content10.style.display = "block"
})


content10.addEventListener('mouseout', () => {
    content9.style.display = "block"
    content10.style.display = "none"
})

// content11
content11 = document.querySelector("._content_image_11 img")
content12 = document.querySelector("._content_image_12 img")



content11.addEventListener('mouseover', () => {
    content11.style.display = "none"
    content12.style.display = "block"
})


content12.addEventListener('mouseout', () => {
    content11.style.display = "block"
    content12.style.display = "none"
})