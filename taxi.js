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




let container1 = document.querySelector(".container_area img")
let container2 = document.querySelector(".container_area_img_2 img")
let profile = document.querySelector(".profile")


container1.addEventListener('mouseover', () => {
     container1.style.display = "none"
     container2.style.display = "block"
     container2.classList.add("zoom");
     profile.style.border = "black solid 3px"
     

  
})



container2.addEventListener('mouseout', () => {
     container1.style.display = "block"
      container1.classList.remove("zoom");
     container2.style.display = "none"
     profile.style.border = "yellow solid 3px"


})


let container3 = document.querySelector(".container_area_img_3 img")
let container4 = document.querySelector(".container_area_img_4 img")
let profile1 = document.querySelector(".profile1")


container3.addEventListener('mouseover', () => {
     container3.style.display = "none"
     container4.style.display = "block"
     container4.classList.add("zoom");
     profile1.style.border = "black solid 3px"
     

  
})



container4.addEventListener('mouseout', () => {
     container3.style.display = "block"
      container3.classList.remove("zoom");
     container4.style.display = "none"
     profile1.style.border = "yellow solid 3px"


})



let container5 = document.querySelector(".container_area_img_5 img")
let container6 = document.querySelector(".container_area_img_6 img")
let profile2 = document.querySelector(".profile2")


container5.addEventListener('mouseover', () => {
     container5.style.display = "none"
     container6.style.display = "block"
     container6.classList.add("zoom");
      profile2.style.border = "black solid 3px"
     

  
})



container6.addEventListener('mouseout', () => {
     container5.style.display = "block"
      container5.classList.remove("zoom");
     container6.style.display = "none"
      profile2.style.border = "yellow solid 3px"


})




let Taxi = document.querySelector(".taxi")
let Tag_a = document.querySelector(".tric")






Taxi.addEventListener('mouseover', () => {
     Tag_a.style.border = "white solid 3px"
})

Taxi.addEventListener('mouseout', () => {
     Tag_a.style.border = "black solid 3px"
})




let Taxi1 = document.querySelector(".taxi1")
let book = document.querySelector(".ook")

Taxi1.addEventListener('mouseover', () =>{
   book.style.border = "white solid 3px"
})
Taxi1.addEventListener('mouseout', () =>{
   book.style.border = "black solid 3px"
})





let Taxi2 = document.querySelector(".taxi2")
let booking = document.querySelector(".book")

Taxi2.addEventListener('mouseover', () =>{
   booking.style.border = "white solid 3px"
})
Taxi2.addEventListener('mouseout', () =>{
   booking.style.border = "black solid 3px"
})





let Taxi3 = document.querySelector(".taxi3")
let booking3 = document.querySelector(".book3")

Taxi3.addEventListener('mouseover', () =>{
   booking3.style.border = "white solid 3px"
})
Taxi3.addEventListener('mouseout', () =>{
   booking3.style.border = "black solid 3px"
})





let Taxi4 = document.querySelector(".taxi4")
let booking4 = document.querySelector(".book4")

Taxi4.addEventListener('mouseover', () =>{
   booking4.style.border = "white solid 3px"
})
Taxi4.addEventListener('mouseout', () =>{
   booking4.style.border = "black solid 3px"
})


































































