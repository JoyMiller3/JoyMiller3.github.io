function play1() {
    var audio = document.getElementById('music1');
    if (audio.paused) {
        audio.play();
    }
    else{
        audio.pause();
        audio.currentTime = 0;//音乐从头播放
    }
}

function play2() {
    var audio = document.getElementById('music2');
    if (audio.paused) {
        audio.play();
    }
    else{
        audio.pause();
        audio.currentTime = 0;//音乐从头播放
    }
}

function play3() {
    var audio = document.getElementById('music3');
    if (audio.paused) {
        audio.play();
    }
    else{
        audio.pause();
        audio.currentTime = 0;//音乐从头播放
    }
}


function check(){
  var response = prompt("Please enter the number of the song. (You can enter '1', '2' or '3')");
  if (response === "1"){
    alert("The name of the song is 火车驶向云外，梦安魂于九霄. The band is 刺猬.");
  }
  else if(response === "2"){
    alert("The name of the song is 这是我一生中最勇敢的瞬间. The band is 棱镜.");
  }
  else if(response === "3"){
    alert("The name of the song is 想去海边. The band is 夏日入侵企画.");
  }
  else{
    alert("Please enter '1', '2' or '3' when you click the button" )
  }
}
