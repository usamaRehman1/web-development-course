const playPuseicon = document.querySelector(".fa-solid");
const video = document.querySelector("#video");

let playPuseBtn = () => {
    playPuseicon.classList.toggle("fa-play")
    playPuseicon.classList.toggle("fa-pause")

    if (playPuseicon.classList.contains("fa-play")) {
        video.pause()
    }else{
        video.play()
    }
}