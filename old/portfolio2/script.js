
var scrollNode = document.getElementById("scroll");
var arrayGambar = ["url('assets/image0.jpeg')", "url('assets/image1.jpeg')", "url('assets/image2.jpeg')", "url('assets/image3.jpeg')"];
var counter = 0;

function nextImage() {
  counter++;
  if (counter === 4) {
    counter = 0;
  }
  scrollNode.style.backgroundImage = arrayGambar[counter];
}

var intervalId = 0;
function startSlideShow() {
  if (intervalId === 0) {
    intervalId = setInterval(nextImage, 3000);
  }
}

startSlideShow();