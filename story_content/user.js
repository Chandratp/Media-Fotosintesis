function ExecuteScript(strId)
{
  switch (strId)
  {
      case "61rKj9TwYOv":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="opening.mp3";
audio.load();
audio.play();
audio.volume=0.8;
}

