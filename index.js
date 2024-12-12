function action(){
    let gif = document.getElementById("gif");
    gif.style.display = "block";

    let message = document.getElementById("message");
    message.style.display = "block"

    let audio = document.getElementById("audio");
    audio.play();

    audio.onended = function() {
        window.location.href = 'https://patents.google.com/patent/US6506148B2/en';
    };

    document.getElementById("button1").style.display = "none";
}