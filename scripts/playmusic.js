
//Автопереход к следующему треку
var audio = document.getElementsByTagName("audio");
for (let i = 0; i < audio.length; i++)
{
  audio[i].addEventListener('ended', function()
  {
    if (audio[i].duration === audio[i].currentTime) {
      audio[i + 1].play();
    }
  });
}

//Остановка и откат к началу всех треков, кроме играющего 
document.addEventListener('play', function(d){
    var audio = document.getElementsByTagName('audio');
    for(let i = 0; i < audio.length; i++){
        if(audio[i] != d.target){
            audio[i].pause(); // строку можно удалить
            audio[i].load();
        }
    }
}, true);

//var beeNoise = document.getElementsByClassName("wibro");

  function beeNoise(){
        var audio = document.createElement('audio');
        audio.setAttribute("autoplay","true");
        audio.innerHTML = "<source src=\"audio/puh_bee_voice.mp3\" type=\"audio/mpeg\">";
        document.body.appendChild(audio);
    }

  /* var pocik = document.getElementById('pocik'),
      pocikAudio = document.getElementById('pocikAudo');
    pocik.addEventListener('click', fPlay, false);
    function fPlay() {
      pocikAudio.play();
    }
*/



