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





const observe = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }

    });
 });


const hideel = document.querySelectorAll('.hide');
hideel.forEach((el) => observe.observe(el));









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








let Business = document.querySelector(".business_container")
let slantedContainer = document.querySelector(".slanted-container")


Business.addEventListener("mouseover", () => {
   slantedContainer.style.backgroundColor = 'yellow'
})


Business.addEventListener("mouseout", () => {
   slantedContainer.style.backgroundColor = 'black'
})




let Business2 = document.querySelector(".business_container2")
let slantedContainer2 = document.querySelector(".slanted-container2")


Business2.addEventListener("mouseover", () => {
   slantedContainer2.style.backgroundColor = 'yellow'
})


Business2.addEventListener("mouseout", () => {
   slantedContainer2.style.backgroundColor = 'black'
})



let Business3 = document.querySelector(".business_container3")
let slantedContainer3 = document.querySelector(".slanted-container3")


Business3.addEventListener("mouseover", () => {
   slantedContainer3.style.backgroundColor = 'yellow'
})


Business3.addEventListener("mouseout", () => {
   slantedContainer3.style.backgroundColor = 'black'
})



let imagesIcon = document.getElementById('images_icon')

imagesIcon.addEventListener('click', function(){
   window.location.href = "search_icon.html"
})



















































