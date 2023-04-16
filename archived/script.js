const sideNav = document.getElementById('sidenav');
const main = document.getElementById('main');
const image = document.getElementById('image');
const width = document.documentElement.clientWidth;

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  if (width <= 480) {
    sideNav.style.width = "70vw";
  } else {
    sideNav.style.width = "25%";
    main.style.marginLeft = "20rem";
  }
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  sideNav.style.width = "0";
  main.style.marginLeft = "0";
}

/* Reset contact form after submit */
window.onbeforeunload = () => {
  for(const form of document.getElementsByTagName('form')) {
    form.reset();
  }
}