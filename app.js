const nav = document.querySelector(".nav");

window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}

// hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// uploading image to the imageUpload container: add event listener to the input type of file
document.querySelector("#file").addEventListener("change", loadFile);

let imageBox = document.querySelector(".imageUpload");

function loadFile(event) {
  imageBox.style.backgroundImage = `url(${URL.createObjectURL(
    event.target.files[0]
  )})`;
}
