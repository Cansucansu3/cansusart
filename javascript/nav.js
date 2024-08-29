const nav = document.getElementById("nav");
const mobileNav = document.getElementById("mobile-nav");

window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight) {
    nav.classList.add("active");
    mobileNav.style.display = "none";
  } else {
    nav.classList.remove("active");
    mobileNav.style.display = "none";
  }
}

fixNav();

function mobileNavHandler() {
  window.addEventListener("resize", () => {
    let windowWidth = window.innerWidth;
    console.log(windowWidth);

    if (windowWidth < 768) {
      nav.style.display = "none";
      mobileNav.style.display = "flex";
    } else {
      nav.style.display = "flex";
      mobileNav.style.display = "none";
    }
  });
}

mobileNavHandler();

function checkMobileNavOnLoad() {
  let windowWidth = window.innerWidth;

  console.log(window.innerWidth);

  if (windowWidth < 768) {
    nav.style.display = "none";
    mobileNav.style.display = "flex";
  } else {
    nav.style.display = "flex";
    mobileNav.style.display = "none";
  }
}

checkMobileNavOnLoad();

toggleMobileNav = () => {
  if (mobileNav.classList.contains("active")) {
    mobileNav.classList.remove("active");
  } else {
    mobileNav.classList.add("active");
  }
};

// anim
const toggle = document.getElementById("toggle");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active"); //If the element already has the specified class, toggle will remove it visa versa
});
