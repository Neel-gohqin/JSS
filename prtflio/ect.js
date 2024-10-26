var prevScrollpos = window.pageXOffset
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navhad").style.top = "0";
  } else {
    document.getElementById("navhad").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
}