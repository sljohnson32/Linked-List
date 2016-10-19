var linkCount = 0;
var enterButton = document.querySelector('.enter-button');
// var readButton = document.querySelector('.link-read');
// var deleteButton = document.querySelector('.link-delete');

function grabTitle() {
  console.log(document.getElementById('website-title').value);
  return document.getElementByID('website-title').value;
}
function grabURL() {
  console.log(document.getElementById('website-url').value);
  return document.selectElementByID('website-url').value;
}

function ListedLink() {
  this.title = grabTitle();
  this.url = grabURL();
  /*jshint multistr: true */
  this.rightSideCode = "<article class='link-info-container'>\
      <div class='link-info'>\
        <h2 class='link-title'>" + this.title + "</h2>\
      <hr class='hr1'>\
        <a href='" + this.url + "' class='link-url'>" + this.url + "</a>\
      <hr class='hr2'>\
      </div>\
      <div class='link-info-buttons'>\
        <button class='link-read'>Read</button>\
        <button class='link-delete'>Delete</button>\
      </div>\
    </article>";
    // this.createLinkBox = function() {
    //   $('right-side').append(this.rightSideCode);
}

enterButton.addEventListener('click', function() {
  var newLink = new ListedLink();
  $('right-side').append(ListedLink.rightSideCode);
});


// $('enter-button').click(function() {
//   var newLink = new ListedLink();
//   $('right-side').append(ListedLink.rightSideCode);
// });
