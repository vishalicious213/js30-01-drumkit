console.log("drum kit")

document.addEventListener("keydown", (e) => {
    // console.log(e.key)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)

    if (!audio) return
    audio.currentTime = 0 // on repeated keypress, rewind sound so it plays from start instead of waiting for previous play to finish
    audio.play()

    key.classList.add("playing")

    // console.log(audio)
    // console.log(key)
})