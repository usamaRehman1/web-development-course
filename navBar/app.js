const toggleBtn = document.querySelector("#toggleBtn");
const pages = document.querySelector("#pages");
const linkIcons = document.querySelector("#linkIcons");
const navBarSlider = document.querySelector("#navBarSlider");
let currWithOfScreen;

const handleScreenSize = (width) => {
    if (width < 950) {
        toggleBtn.style.display = 'block';
        pages.style.display = 'none';
        linkIcons.style.display = 'none';
    } else {
        toggleBtn.style.display = 'none';
        navBarSlider.style.display = 'none';
        pages.style.display = 'block';
        linkIcons.style.display = 'block';
        toggleBtn.children[0].classList.remove("fa-xmark")
        toggleBtn.children[0].classList.add("fa-bars")
    }
}

window.onload = () => {
    currWithOfScreen = window.innerWidth;
    navBarSlider.style.display = 'none';
    handleScreenSize(currWithOfScreen)
}

window.addEventListener("resize", () => {
    currWithOfScreen = window.innerWidth;
    handleScreenSize(currWithOfScreen)
})

toggleBtn.addEventListener("click", () => {
    if (navBarSlider.style.display == 'none') {
        navBarSlider.style.display = 'block'
    } else {
        navBarSlider.style.display = 'none'
    }
    toggleBtn.children[0].classList.toggle("fa-xmark")
    toggleBtn.children[0].classList.toggle("fa-bars")
})