// add another button to change color back
// can I add a button to add music???


var buttonEl = document.querySelector('#btn');
var buttonEl2 = document.querySelector('#btn2');

var changeColor = function (event) {
  
    document.getElementById("body").style.backgroundColor = "lightgreen";
  
};

var changeColorBack = function(event) {
    document.getElementById('body').style.backgroundColor = 'aqua';
}




buttonEl.addEventListener("click", changeColor);
buttonEl2.addEventListener('click', changeColorBack);


