function slidesPlugin() {

    const slides = document.querySelectorAll(".slide")
    console.log(slides.length);
    let activeSlide = getRandomInt(slides.length-1)
    console.log(activeSlide);
    slides[activeSlide].classList.add('active')
    for (const slide of slides) {
    slide.addEventListener("click", () => {
        clearActiveClasses();
        slide.classList.add('active')
    })
}

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}    
}

slidesPlugin()

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}