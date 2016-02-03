window.onload = function (){

var clock = document.getElementById('clock');

writeDate();


};

//võtab aja ja kirjutab #clock elemendi siss
function writeDate(){

  var today =new Date();

  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();


clock.innerHTML = addZeroBefore(hours) + ":" + addZeroBefore(minutes) + ":" + addZeroBefore(seconds);

}

function addZeroBefore(number){

  if(number < 10){
    number = "0" + number;
  }

  return number;
}
