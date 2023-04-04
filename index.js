// Current year for footer
const currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;

// Language selection
var usingFR = true;

// Language selection - Retrieve user preference
if (localStorage.getItem("lang")) {
  if (localStorage.getItem("lang") == "en") {
    switchLang();
  }
}

// Language selection - Handle user changing language
$("#switch-lang").click(function () {
  switchLang();
})

function switchLang() {
  if (usingFR) {
    $(":lang(en)").css("display", "revert");
    $(":lang(fr").css("display", "none");
    usingFR = false;
    $("#switch-lang").html('<img class="language-icon" src="images/language_icon.svg" />EN');
    localStorage.setItem("lang", "en");
  } else {
    $(":lang(en)").css("display", "none");
    $(":lang(fr").css("display", "revert");
    usingFR = true;
    $("#switch-lang").html('<img class="language-icon" src="images/language_icon.svg" />FR');
    localStorage.setItem("lang", "fr");
  }
}

// Mixing mail
let address = "&#x69;&#x6E;&#x66;&#x6F;&#x40;&#x62;&#x72;&#x75;&#x73;&#x73;&#x65;&#x6C;&#x73;&#x73;&#x6F;&#x75;&#x6E;&#x64;&#x74;&#x72;&#x61;&#x63;&#x6B;&#x6F;&#x72;&#x63;&#x68;&#x65;&#x73;&#x74;&#x72;&#x61;&#x2E;&#x62;&#x65;";
let addressEnc = "aW5mb0BicnVzc2Vsc3NvdW5kdHJhY2tvcmNoZXN0cmEuYmU=";
$(".addr").html(address);
function openMail() {
  window.location.href = "mailto:" + atob(addressEnc);
}
$(".active-thumbnail").focus();
