

var prevScrollpos = window.scrollY
window.onscroll = function() {
  var currentScrollPos = window.scrollY;

  if (prevScrollpos < 400) {
    document.getElementById("navhad").style.top = "-130px";
    document.getElementById("useruc").style.display = "none";
    document.getElementById("navhad").style.background="black"
    document.getElementById("navlis").style.display="flex"
         document.getElementById("navhad").style.backdropFilter = "blur(10px)"
  } else {
    document.getElementById("navhad").style.top = "0px";
    document.getElementById("navhad").style.backdropFilter = "blur(12px)"
    document.getElementById("navlis").style.display="none"
    document.getElementById("navhad").style.background="transparent";
    document.getElementById("useruc").style.display = "block";
  }
  prevScrollpos = currentScrollPos;

}










