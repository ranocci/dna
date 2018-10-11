var msg = 'ようこそ！';
var speed = 500;

var flag = 0;
function blink() {
  if(flag == 0) {
    document.getElementById('kiri').innerHTML = msg;
    flag = 1;
  } else {
    document.getElementById('kiri').innerHTML = "　";
    flag = 0;
  }
  setTimeout("blink()", speed);
}
