var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
  popupoverlay.style.display="block"
  popupbox.style.display="block"

})

var cancelbutton=document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function(){
  event.preventDefault()
  popupoverlay.style.display="none"
  popupbox.style.display="none"
})
