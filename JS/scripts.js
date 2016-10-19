
var titleInput = document.querySelector('#website-title')

var urlInput = document.querySelector('#website-url')

var enterButton = document.querySelector('.enter-button')

// var card = new Card(titleInput, urlInput)

var display = document.querySelector(".link-info-container")

// var displayCard =
// '<div class="link-info">'+
// '<h2 class="link-title">The Website Title</h2>' + titleInput.value + '</h2>' + '</div>'


var displayCard =
  '<div class="link-info">'+
  '<h2 class="link-title">The Website Title</h2>' + titleInput.value + '<hr class="hr1">' + '<a href="URL" class="link-url">www.thewebsiteurl.com</a>' + urlInput.value + '<hr class="hr2">' + '</div>';

display.innerHTML = displayCard

var enterButton = document.querySelector('.enter-button')

function appendCard(){
  display.innerHTML = displayCard;
  console.log(document.querySelector('.link-title').innerText= titleInput.value)
  console.log(titleInput.value)
  display.innerText.value
}

  enterButton.addEventListener('click', appendCard)
