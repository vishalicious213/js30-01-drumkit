console.log("drum kit")
const keys = document.querySelectorAll(".key")

function playSound(e) {
    // console.log(e.key)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)

    if (!audio) return
    audio.currentTime = 0 // on repeated keypress, rewind sound so it plays from start instead of waiting for previous play to finish
    audio.play()

    key.classList.add("playing")

    // console.log(audio)
    // console.log(key)
}

function removeTransition(e) {
    // skip if its not a transform
    if (e.propertyName !== "transform") return
    this.classList.remove("playing")
    // console.log(e)
    console.log(e.propertyName)
}

keys.forEach(key => key.addEventListener("transitionend", removeTransition))

document.addEventListener("keydown", playSound)