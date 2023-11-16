bookmark = document.getElementsByClassName("bookmark");
nav = document.getElementsByTagName("nav");
nav_btn = document.getElementsByClassName("nav_link_button");

for (let i = 0; i < bookmark.length; i++) {
  bookmark[i].addEventListener("click", () => {
    if (bookmark[i].getAttribute("src") == "Assets/Images/bookmark.png") {
      bookmark[i].setAttribute("src", "Assets/Images/ribbon.png");
    } else {
      bookmark[i].setAttribute("src", "Assets/Images/bookmark.png");
    }
  });
}

window.onscroll = function (event) {
  if (this.scrollY > 434) {
    nav[0].style.backgroundColor = "#ffffff";
    nav_btn[0].style.backgroundColor = "#1a8917";
  } else {
    nav[0].style.backgroundColor = "#ff9d2d";
    nav_btn[0].style.backgroundColor = "#000000";
  }
};
