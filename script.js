function playAll(songNumber){
    var audioElement=document.getElementById("song");
    var playBtn =document.getElementById("play-pause");
    var songFileName = "music/"+songNumber+".mp3";

    if(audioElement.getAttribute("src")==songFileName && !audioElement.paused){
        audioElement.pause();
        playBtn.innerHTML='<img src="images/play-button.png">';
        currentRow.classList.remove("highlight");
    }
    else{
        audioElement.setAttribute("src",songFileName);
        audioElement.play();
        playBtn.innerHTML='<img src="images/pause-button.png">';
        currentRow.classList.remove("highlight");

    }
}
function palyaudio(){
    var audio=document.getElementById("song");
    var playBtn=document.getElementById("play-pause");
    if(audio.paused){
        audio.paly();
        playBtn.innerHTML='<img src="images/pause-button.png">';
    }
    else{
        audio.pause();
        playBtn.innerHTML='<img src="images/play-button.png">';
    }
}