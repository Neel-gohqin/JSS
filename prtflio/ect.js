
var prevScrollpos = window.scroll
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navhad").style.top = "0";
  } else {
    document.getElementById("navhad").style.background="black opacity=20%";
    document.getElementById("navhad").style.top = "-340px";
  }
  prevScrollpos = currentScrollPos;

}

window.addEventListener('scroll',()=>{
  let scrolled = window.scrollY;
  let sdb = document.getElementById("sdebox")

  if (scrolled > 320) {
    sdb.style.display = 'block';

    setTimeout(() => {
      sdb.style.height = '66vh'; 
    }, 10);
  } else {
    sdb.style.height = '0vh'; 
    setTimeout(() => {
      sdb.style.display = 'none'; 
    }, 500); 
  }
});









