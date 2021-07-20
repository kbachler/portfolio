const sideNav = document.getElementById('sidenav');
const main = document.getElementById('main');
const image = document.getElementById('image');
const width = document.documentElement.clientWidth;

alert("This site is a work in progress! Updates coming soon :)");

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  if (width <= 480) {
    sideNav.style.width = "70vw";
  } else {
    sideNav.style.width = "25%";
    main.style.marginLeft = "20rem";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    image.style.opacity = "0.4";
  }
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  sideNav.style.width = "0";
  main.style.marginLeft = "0";
  document.body.style.backgroundColor = "#FFF";
  image.style.opacity = "1";
}