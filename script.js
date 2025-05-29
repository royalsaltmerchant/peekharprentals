var myIndex = 0;
carousel();

function carousel() {
  var i;
  var slide = document.getElementsByClassName('slide')
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > slide.length) {myIndex = 1}    
  slide[myIndex-1].style.display = "inline-block";  
  setTimeout(carousel, 9000);
}