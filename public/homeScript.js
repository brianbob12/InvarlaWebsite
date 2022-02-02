
var letters = document.getElementsByClassName("titleLetter")
var letterDelay = 65//in miliseconds
var letterIndex = 0
startSloganAnimation()

window.addEventListener("load", () => {
  document.getElementById("Title").style.marginTop = window.innerHeight * 0.2 + "px"
})

function startSloganAnimation() {
  if (letters.length == 0) {
    setTimeout(startSloganAnimation, 15)
  }
  else {
    showLetter(0)
  }
}
function showLetter() {
  letters[letterIndex].style.visibility = "visible"
  if (letterIndex + 1 < letters.length) {
    letterIndex += 1
    setTimeout(showLetter, letterDelay)
  }
}