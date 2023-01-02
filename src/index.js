import * as home from "./hp-load.js";
import * as menu from "./menu-load.js";
import * as contacts from "./contacts-load.js";

home.homePageLoad();

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (button.classList.contains("home")) {
      content.innerHTML = "";
      home.homePageLoad();
    } else if (button.classList.contains("menu")) {
      content.innerHTML = "";
      menu.menuLoad();
    } else if (button.classList.contains("contacts")) {
      content.innerHTML = "";
      contacts.contactsLoad();
    }
  });
});
