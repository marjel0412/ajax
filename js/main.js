
var firstRequest = new XMLHttpRequest();
firstRequest.open('GET', 'https://dog.ceo/api/breed/labrador/images/random');
firstRequest.send();

firstRequest.onload = function() {
  var data1st = JSON.parse(firstRequest.responseText).message;
  displayData(data1st);
};




  var grabSel = document.getElementById('species');
  // console.log('grabSel:', grabSel);
  grabSel.addEventListener('change', function(e){
    x = e.target.value;
    // console.log('x:', x);
    getData(x);
    }
  );

function getData(y) {
  var newRequest = new XMLHttpRequest();

  newRequest.open('GET', 'https://dog.ceo/api/breed/' + y + '/images/random');

  newRequest.send();

  newRequest.onload = function() {
    var data = JSON.parse(newRequest.responseText).message;

    displayData(data);
  }
  
}

function displayData(data) {
  // console.log('data:', data);
  var grabImgId = document.getElementById('img');
  // console.log('grabImgId:', grabImgId);
  grabImgId.setAttribute('src', data);
}

