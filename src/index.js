import "./styles.css";
import { heroContent } from "./home";
import { menuContent } from "./menu";
import { aboutContent } from "./about";

const content = document.getElementById("content");
content.appendChild(heroContent());

const homeBtn = document.getElementById("home");
homeBtn.addEventListener("click", () => {
  content.innerHTML = "";
  content.appendChild(heroContent());
  menuBtn.classList.remove("active");
  aboutBtn.classList.remove("active");
});

const menuBtn = document.getElementById("menu");
menuBtn.addEventListener("click", () => {
  content.innerHTML = "";
  content.appendChild(menuContent());
  menuBtn.classList.add("active");
  homeBtn.classList.remove("active");
  aboutBtn.classList.remove("active");
});

const aboutBtn = document.getElementById("about");
aboutBtn.addEventListener("click", () => {
  content.innerHTML = "";
  content.appendChild(aboutContent());
  aboutBtn.classList.add("active");
  homeBtn.classList.remove("active");
  menuBtn.classList.remove("active");
});