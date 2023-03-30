// import header from "header.html"
const currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;
// Header and footer

// jQuery(function() {
//   jQuery("header").load("header.html");
// })
// $("header").html('<section id="title"><nav class="navbar navbar-expand-md navbar-dark"><div class="container-fluid"><a class="navbar-brand" href="#"><img class="bso-logo-header" src="images/logo_full_w_top.png" /> <img class="bso-text-header" src="images/logo_full_w_text.png" /></a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarToggler"><ul class="navbar-nav ms-auto"><li class="nav-item"><a class="nav-link" href="#">Events</a></li><li class="nav-item"><a class="nav-link" href="#">About</a></li><li class="nav-item"><a class="nav-link" href="#">Contact</a></li><li class="nav-item"><a class="nav-link" href="#">Gallery</a></li><li class="nav-item"><a class="nav-link" href="#">FR/EN</a></li></ul></div></div></div></nav></section>');


//  Language selection
var usingFR = true;

// Retrieve user preference
if (localStorage.getItem("lang")) {
  if (localStorage.getItem("lang") == "en") {
    switchLang();
  }
}

// Handle user changing language
$("#switch-lang").click(function () {
  switchLang();
})

function switchLang() {
  if (usingFR) {
    $(":lang(en)").css("display", "revert");
    $(":lang(fr").css("display", "none");
    usingFR = false;
    $("#switch-lang").text("FR");
    localStorage.setItem("lang", "en");
  } else {
    $(":lang(en)").css("display", "none");
    $(":lang(fr").css("display", "revert");
    usingFR = true;
    $("#switch-lang").text("EN");
    localStorage.setItem("lang", "fr");
  }
}


