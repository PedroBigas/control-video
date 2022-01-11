

let video = document.getElementById("video1");
let controles = document.getElementById("controles")

    function retroceder() {
        video.currentTime -= 15;
}

    function avancar() {
        video.currentTime += 15;
}

    function diminuirVel() {
        video.playbackRate -= 0.1;
}

    function aumentarVel() {
        video.playbackRate += 0.1;
}

    function play() {
        video.play();
}

    function stop() {
        video.pause();
        video.currentTime = 0;
}    

    function mostrar() {
        controles.style.opacity = "1";
}

    function sumir() {
        controles.style.opacity = "0";
}
