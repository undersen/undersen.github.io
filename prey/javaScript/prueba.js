// Code goes here

function stringGenerator(param) {
  var character ='';
  var number =0;
  debugger;
  if (parseInt(param) === 10) {
    for (var i = 0; i <= 9; i++) {
      number = Math.floor((Math.random() *94) + 33);
      character =  character + String.fromCharCode(number);
  }
  alert(character);
} else {
    for (var j = 0; j <= 41; j++) {
      number = Math.floor((Math.random() *94) + 33);
      character =  character + String.fromCharCode(number);
    }
     alert(character);
  }
}
