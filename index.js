console.log("drum kit")

document.addEventListener("keydown", (e) => {
    // console.log(e.key)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if (!audio) return
    audio.play()
    // console.log(audio)
})