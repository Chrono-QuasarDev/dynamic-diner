import "./styles.css";
import { heroContent } from "./home";
import { menuContent } from "./menu";

const content = document.getElementById("content");
content.appendChild(heroContent());

const homeBtn = document.getElementById("home");
homeBtn.addEventListener("click", () => {
  content.innerHTML = "";
  content.appendChild(heroContent());
  menuBtn.classList.remove("active");
});

const menuBtn = document.getElementById("menu");
menuBtn.addEventListener("click", () => {
  content.innerHTML = "";
  content.appendChild(menuContent());
  menuBtn.classList.add("active");
  homeBtn.classList.remove("active");
});
