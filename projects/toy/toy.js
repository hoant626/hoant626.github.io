var crinkleNoise = document.getElementById('crinkleNoise');
var scratchNoise = document.getElementById('scratchNoise');
var tapNoise =document.getElementById('tapNoise');
var bob =document.getElementById('bob');

console.log("ask for Bob Ross")


//scratch
document.addEventListener("wheel", onScroll)

function onScroll(evt) {
  if (evt.movementY != 0) {
      scratchNoise.play()
      document.body.style.backgroundImage = "url('scratch.png')"
  }

}

//crinkle
document.addEventListener("mousedown", onClick)

function onClick() {
    crinkleNoise.play()
    document.body.style.backgroundImage = "url('crinkle.png')"
}


//tap
document.addEventListener("keydown", onKeyPress)

function onKeyPress() {
    tapNoise.play()
    document.body.style.backgroundImage = "url('tap.png')"
}

//bobby?
var recognizer = new webkitSpeechRecognition()

var wave = document.querySelector("#title")

title.addEventListener("click", onTitleClick)

function onTitleClick() {
  recognizer.start()
}

recognizer.addEventListener("result", onSpeechResult)

function onSpeechResult(evt) {
  console.log(evt.results[0][0].transcript)

    if (evt.results[0][0].transcript == "Bob Ross"){
      console.log("gotchu")
      bob.play()

    }
}
