let features = document.querySelector(".Features");
let link1 = document.querySelector(".link1");
let link2 = document.querySelector(".link2");
let menu1 = document.querySelector(".menu1");
let menu2 = document.querySelector(".menu2");
let up1 = document.querySelector(".Features .up");
let up2 = document.querySelector(".Company .up");

let down1 = document.querySelector(".Features .down");
let down2 = document.querySelector(".Company .down");

let a1 = document.querySelector(".Features a");
let a2 = document.querySelector(".Company a");

let path1 = document.querySelector(".Features .up path");
let path2 = document.querySelector(".Company .up path");

let imgIcon = document.querySelector(".Features .menu1 ul li img");
let span = document.querySelector("span");
console.log(menu1);

link1.addEventListener("click", function (menu, up, down, a, path) {
  menu = menu1;
  up = up1;
  down = down1;
  a = a1;
  path = path1;
  pirority(menu, up, down, a, path);
});
link2.addEventListener("click", function (menu, up, down, a, path) {
  menu = menu2;
  up = up2;
  down = down2;
  a = a2;
  path = path2;
  pirority(menu, up, down, a, path);
});

document.addEventListener(
  "click",
  function outside(e, menu, up, down, a, path) {
    if (!link1.contains(e.target)) {
      menu = menu1;
      up = up1;
      down = down1;
      a = a1;
      path = path1;
      pirority2(menu, up, down, a, path);
    }
    if (!link2.contains(e.target)) {
      menu = menu2;
      up = up2;
      down = down2;
      a = a2;
      path = path2;
      pirority2(menu, up, down, a, path);
    }
  }
);

function pirority(menu, up, down, a, path) {
  menu.style.cssText = "display: flex;";
  up.style.cssText = "display: flex; margin-left: 5px;";
  down.style.cssText = "display: none;";
  // a.style.cssText = "color: hsl(0, 0%, 8%)";
  // path.style.cssText = "stroke: hsl(0, 0%, 8%)";
}
function pirority2(menu, up, down, a, path) {
  menu.style.display = "none";
  up.style.cssText = "display: none;";
  down.style.cssText = "margin-left: 5px;";
  a.style.cssText = "color: hsl(0, 0%, 41%)";
  path.style.cssText = "stroke: hsl(0, 0%, 41%)";
}

let menuMobile = document.querySelector(".menuMobile");
let close = document.querySelector(".close");
console.log(close);
let page = document.querySelector(".page");
console.log(page);
let log = document.querySelector(".log");
console.log(log);
let logUl = document.querySelector(".logUl");
console.log(logUl);
let logLi = document.querySelector(".logLi");
let active = document.querySelector(".active");

let w = window.innerWidth;
if (w > 775) {
  link1.addEventListener("click", function () {
    link1.style.cssText = "padding: 0px 0px 0px;";
    menu1.style.cssText = "display: flex; visibility: visible;";
  });
}
if (w <= 775) {
  menuMobile.addEventListener("click", function () {
    menuMobile.style.cssText = "display: none; cursor: pointer; ";
    close.style.cssText = "display: flex; cursor: pointer; z-index: 2;";
    page.style.cssText =
      "display: flex; position: absolute; flex-direction: column; background-color: hsl(0, 0%, 98%); width: 220px; height: 100%; top: 0; right: 0; margin: 0; justify-content: flex-start; align-items: flex-start; gap: 20px; padding-top: 70px; z-index: 1; padding-left: 20px;";
    // a1.style.cssText = "color: hsl(0, 0%, 8%) !important;";
    // a2.style.cssText = "color: hsl(0, 0%, 8%) !important;";
    // path1.style.cssText = "stroke: hsl(0, 0%, 8%) !important;";
    // path2.style.cssText = "stroke: hsl(0, 0%, 8%) !important;";
    span.style.cssText =
      "width: 100%; position: absolute; height: 100%; background-color: #0000005e; top: 0; left: 0; z-index: -1;";
    log.style.cssText =
      "display:flex; width: 220px; height: 120px; position: absolute; right: 0px; top: 349px; padding: 0 30px; z-index: 4;";
    logUl.style.cssText = "width: 100%; flex-direction: column; padding: 0;";
    logLi.style.cssText =
      "width: 100%; position: relative; text-align: center;";
    active.style.cssText = "position: absolute; width: 100%;";
    link1.addEventListener("click", function () {
      link1.style.cssText = "padding: 0px 0px 140px;";
      menu1.style.cssText =
        "display: flex; background-color: hsl(0, 0%, 98%); box-shadow: 0px 0px 0px 0px;";
    });
    link2.addEventListener("click", function () {
      link2.style.cssText = "padding: 0px 0px 110px;";
      menu2.style.cssText =
        "display: flex; background-color: hsl(0, 0%, 98%) !important; box-shadow: 0px 0px 0px 0px;";
    });

    close.addEventListener("click", function () {
      page.style.cssText = "display: none;";
      log.style.cssText = "display: none;";
      span.style.cssText = "display: none;";
      menuMobile.style.cssText = "display: flex;";
      close.style.cssText = "display: none;";
    });
  });
}
