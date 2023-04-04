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

// Mixing mail
// document.getElementById("addr").innerHTML = "<a href='mailto:test@test.com'>&#x69;&#x6E;&#x3C;&#x73;&#x70;&#x61;&#x6E;&#x20;&#x63;&#x6C;&#x61;&#x73;&#x73;&#x3D;&#x22;&#x68;&#x69;&#x64;&#x65;&#x22;&#x3E;&#x6E;&#x66;&#x3C;&#x2F;&#x73;&#x70;&#x61;&#x6E;&#x3E;&#x66;&#x3C;&#x21;&#x2D;&#x2D;&#x69;&#x6E;&#x40;&#x6B;&#x66;&#x2D;&#x2D;&#x3E;&#x6F;&#x40;&#x62;&#x72;&#x75;&#x73;&#x73;&#x65;&#x6C;&#x73;&#x3C;&#x21;&#x2D;&#x2D;&#x69;&#x6E;&#x40;&#x6B;&#x66;&#x2D;&#x2D;&#x3E;&#x73;&#x6F;&#x75;&#x6E;&#x64;&#x74;&#x72;&#x61;&#x63;&#x6B;&#x6F;&#x72;&#x63;&#x68;&#x65;&#x73;&#x74;&#x72;&#x61;&#x3C;&#x73;&#x70;&#x61;&#x6E;&#x20;&#x63;&#x6C;&#x61;&#x73;&#x73;&#x3D;&#x22;&#x68;&#x69;&#x64;&#x65;&#x22;&#x3E;&#x24;&#x3C;&#x2F;&#x73;&#x70;&#x61;&#x6E;&#x3E;&#x2E;&#x62;&#x3C;&#x73;&#x70;&#x61;&#x6E;&#x20;&#x63;&#x6C;&#x61;&#x73;&#x73;&#x3D;&#x22;&#x68;&#x69;&#x64;&#x65;&#x22;&#x3E;&#x7A;&#x3C;&#x2F;&#x73;&#x70;&#x61;&#x6E;&#x3E;&#x65;</a>";
let address = "&#x69;&#x6E;&#x66;&#x6F;&#x40;&#x62;&#x72;&#x75;&#x73;&#x73;&#x65;&#x6C;&#x73;&#x73;&#x6F;&#x75;&#x6E;&#x64;&#x74;&#x72;&#x61;&#x63;&#x6B;&#x6F;&#x72;&#x63;&#x68;&#x65;&#x73;&#x74;&#x72;&#x61;&#x2E;&#x62;&#x65;";
let addressEnc = "aW5mb0BicnVzc2Vsc3NvdW5kdHJhY2tvcmNoZXN0cmEuYmU=";
$(".addr").html(address);
function openMail() {
  window.location.href = "mailto:" + atob(addressEnc);
}

// $("#mail").click(function () {
//   switchLang();
// })

$(".active-thumbnail").focus();
