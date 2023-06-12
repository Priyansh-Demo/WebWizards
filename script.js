//Root
const rootEl = document.querySelector(":root");
//Body
const body = document.querySelector(".main").style;
//Nav Bar
const navBar = document.querySelector("nav").style;
//Logo Elements
const logoLightEl = document.querySelector(".logo-light").style;
logoLightEl.display = "block";
const logoDarkEl = document.querySelector(".logo-dark").style;
//Login Button
const themeBtn = document.querySelector(".theme-btn");
//Main Button
const moonEL = document.querySelector(".moon").style;
const sunEl = document.querySelector(".sun").style;
moonEL.display = "block";
sunEl.display = "none";

//Footer Logo
const footerEl = document.querySelector("footer").style;
const logoDarkFooter = document.querySelector(".logo-dark-footer").style;
const logoLightFooter = document.querySelector(".logo-light-footer").style;
logoDarkFooter.display = "block";
logoLightFooter.display = "none";

themeBtn.addEventListener("click", () => {
  if (logoLightEl.display === "block") {
    rootEl.style.setProperty("--typing-bg-light", "#131516");
    rootEl.style.setProperty("--typing-bg-dark", "#e2d9d5");
    logoLightEl.display = "none";
    logoDarkEl.display = "block";
    navBar.boxShadow = "0 3px 10px rgba(247,57,57,0.2)";
    moonEL.display = "none";
    sunEl.display = "block";
    logoDarkFooter.display = "none";
    logoLightFooter.display = "block";
  } else {
    rootEl.style.setProperty("--typing-bg-light", "#e2d9d5");
    rootEl.style.setProperty("--typing-bg-dark", "#131516");
    logoLightEl.display = "block";
    logoDarkEl.display = "none";
    navBar.boxShadow = "0 3px 10px rgba(0,0,0,0.2)";
    moonEL.display = "block";
    sunEl.display = "none";
    logoDarkFooter.display = "block";
    logoLightFooter.display = "none";
  }
});
