const hamburger = document.querySelector("#hamburger")
const hamburgerImg = hamburger.querySelector("img")
const menu = document.querySelector("#menu")

hamburger.addEventListener("click", () => {
    menu.classList.toggle("menu-open")
    if (menu.classList.contains("menu-open")) {
        hamburgerImg.src = "image/close.svg"
        hamburgerImg.alt = "Close button"
    } else {
        hamburgerImg.src = "image/hamburger.svg"
        hamburgerImg.alt = "Hamburger button"
    }
})

// Close menu when a menu item is clicked
const menuItems = document.querySelectorAll(".menu-item")
menuItems.forEach(menuItem => {
    menuItem.addEventListener("click", () => {
        menu.classList.remove("menu-open")
        hamburgerImg.src = "image/hamburger.svg"
        hamburgerImg.alt = "Hamburger button"
    })
});

