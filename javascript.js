function openCenteredWindow(url) {
  // Define the width and height of the popup window.
  const popupWidth = 900;
  const popupHeight = 600;

  // Calculate the center position based on the screen dimensions.
  const centerX = window.screenX + (window.innerWidth - popupWidth) / 2;
  const centerY = window.screenY + (window.innerHeight - popupHeight) / 2;

  // Open the popup window with the calculated position.
  window.open(
    url,
    "_blank",
    `width=${popupWidth}, height=${popupHeight}, left=${centerX}, top=${centerY}`
  );
}
function openWebsiteWindow(url) {
  // Define the width and height of the popup window.
  const popupWidth = 900;
  const popupHeight = 600;

  // Calculate the center position based on the screen dimensions.
  const centerX = window.screenX + (window.innerWidth - popupWidth) / 2;
  const centerY = window.screenY + (window.innerHeight - popupHeight) / 2;

  // Open the popup window with the calculated position.
  window.open(
    url,
    "_blank",
    `width=${popupWidth}, height=${popupHeight}, left=${centerX}, top=${centerY}`
  );
}
function openMultiPageWebsiteWindow(url) {
  // Define the width and height of the popup window.
  const popupWidth = 450;
  const popupHeight = 700;

  // Calculate the center position based on the screen dimensions.
  const centerX = window.screenX + (window.innerWidth - popupWidth) / 2;
  const centerY = window.screenY + (window.innerHeight - popupHeight) / 2;

  // Open the popup window with the calculated position.
  window.open(
    url,
    "_blank",
    `width=${popupWidth}, height=${popupHeight}, left=${centerX}, top=${centerY}`
  );
}
function openAppWindow(url) {
  // Define the width and height of the popup window.
  const popupWidth = 600;
  const popupHeight = 600;

  // Calculate the center position based on the screen dimensions.
  const centerX = window.screenX + (window.innerWidth - popupWidth) / 2;
  const centerY = window.screenY + (window.innerHeight - popupHeight) / 2;

  // Open the popup window with the calculated position.
  window.open(
    url,
    "_blank",
    `width=${popupWidth}, height=${popupHeight}, left=${centerX}, top=${centerY}`
  );
}

let mybutton = document.getElementById("BackToTopButton");
let uparrow = document.getElementById("arrowsBody");

// When the user scrolls down 200px from the top of the document, show the button and  show the pulsing arrow
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    mybutton.style.display = "block";
    uparrow.style.display = "flex";
  } else {
    mybutton.style.display = "none";
    uparrow.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
