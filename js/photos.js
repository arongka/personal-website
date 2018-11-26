
// code for the start slideshow button
function startSlideshow(){
  document.getElementById("topPanel").style.display = "none";
  document.getElementById("imageStack").style.display = "block";
  document.getElementById("rightArrow").style.display = "block";
  document.getElementById("leftArrow").style.display = "block";
}

// code for the slideshow
let slideNumber=1;
displaySlide(slideNumber);

function moveSlide(n) {
  displaySlide(slideNumber += n);
}

function displaySlide(n) {
  let i;
  var slides = document.getElementsByClassName("image");
  if (n > slides.length) {slideNumber = 1} 
  if (n < 1) {slideNumber = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  slides[slideNumber-1].style.display = "block"; 
}
