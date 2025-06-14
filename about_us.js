let imgConttains = document.querySelector(".img_container")
let service = document.querySelector(".Services")


imgConttains.addEventListener('mouseover', () => {
     imgConttains.style.display = "none"
     service.style.display = "block"

  
})



service.addEventListener('mouseout', () => {
     imgConttains.style.display = "block"
     service.style.display = "none"


})


let imgConttains2 = document.querySelector(".img_container_2")
let service2 = document.querySelector(".Services_2")


imgConttains2.addEventListener('mouseover', () => {
     imgConttains2.style.display = "none"
     service2.style.display = "block"


})



service2.addEventListener('mouseout', () => {
     imgConttains2.style.display = "block"
     service2.style.display = "none"

})



let imgConttains3 = document.querySelector(".img_container_3")
let service3 = document.querySelector(".Services_3")


imgConttains3.addEventListener('mouseover', () => {
     imgConttains3.style.display = "none"
     service3.style.display = "block"


})



service3.addEventListener('mouseout', () => {
     imgConttains3.style.display = "block"
     service3.style.display = "none"

})










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




// let expert = document.querySelector(".epert_driver_container")
let expert = document.querySelector(".expert_driver_container_content")
let content = document.querySelector(".container_content_text_1")




expert.addEventListener("mouseover", () => {
   content.style.backgroundColor = 'white'
})

expert.addEventListener("mouseout", () => {
   content.style.backgroundColor = 'yellow'
})



// let expert = document.querySelector(".epert_driver_container")
let expert1 = document.querySelector(".expert_driver_container_content2")
let content2 = document.querySelector(".container_content_text3")




expert1.addEventListener("mouseover", () => {
   content2.style.backgroundColor = 'white'
})

expert1.addEventListener("mouseout", () => {
   content2.style.backgroundColor = 'yellow'
})


// let expert = document.querySelector(".epert_driver_container")
let expert2 = document.querySelector(".expert_driver_container_content3")
let content3 = document.querySelector(".container_content_text4")




expert2.addEventListener("mouseover", () => {
   content3.style.backgroundColor = 'white'
})

expert2.addEventListener("mouseout", () => {
   content3.style.backgroundColor = 'yellow'
})




// let expert = document.querySelector(".epert_driver_container")
let expert3 = document.querySelector(".expert_driver_container_content4")
let content4 = document.querySelector(".container_content_text5")




expert3.addEventListener("mouseover", () => {
   content4.style.backgroundColor = 'white'
})

expert3.addEventListener("mouseout", () => {
   content4.style.backgroundColor = 'yellow'
})



// let expert = document.querySelector(".epert_driver_container")
let expert4 = document.querySelector(".expert_driver_container_content5")
let content5 = document.querySelector(".container_content_text6")




expert4.addEventListener("mouseover", () => {
   content5.style.backgroundColor = 'white'
})

expert4.addEventListener("mouseout", () => {
   content5.style.backgroundColor = 'yellow'
})



// let expert = document.querySelector(".epert_driver_container")
let expert5 = document.querySelector(".expert_driver_container_content6")
let content7 = document.querySelector(".container_content_text7")




expert5.addEventListener("mouseover", () => {
   content7.style.backgroundColor = 'white'
})

expert5.addEventListener("mouseout", () => {
   content7.style.backgroundColor = 'yellow'
})