const nav = document.querySelector(".home__nav");
const navMenu = document.querySelector(".nav__menu");
const menuList = document.querySelector(".menu__list");
const hero = document.querySelector(".home__hero");

const div = document.createElement("div");
div.classList.add("showHam");

const listItems = document.createElement("li");
listItems.innerHTML = ` 
          <li><a href="#">Home</a></li>
          <li><a href="#">New</a></li>
          <li><a href="#">Popular</a></li>
          <li><a href="#">Trending</a></li>
          <li><a href="#">Categories</a></li>`;
div.appendChild(listItems);

function showHam() {
  const existingHam = navMenu.querySelector(".fa-bars");
  const ham = document.createElement("i");
  if (window.innerWidth < 450) {
    menuList.style.display = "none";

    if (!existingHam) {
      ham.classList.add("fas", "fa-bars");
      navMenu.appendChild(ham);
    }
    ham.addEventListener("click", () => {
      if (!div.classList.contains("activeHam")) {
        hero.appendChild(div);
        div.classList.toggle("activeHam");
      } else {
        div.classList.remove("activeHam");
        hero.removeChild(div);
      }
    });
  } else {
    menuList.style.display = "flex";
    if (existingHam) {
      navMenu.removeChild(existingHam);
    }
    if (div.classList.contains("activeHam")) {
      div.classList.remove("activeHam");
      if (div.parentNode) {
        hero.removeChild(div);
      }
    }
  }
}

showHam();
window.addEventListener("resize", showHam);
