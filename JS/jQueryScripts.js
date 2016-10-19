var linkCount = 0;
var enterButton = document.querySelector('.enter-button');
// var readButton = document.querySelector('.link-read');
// var deleteButton = document.querySelector('.link-delete');

function grabTitle() {
  return document.querySelector('.website-title').value;
}
function grabURL() {
  return document.querySelector('.website-url').value;
}

function ListedLink() {
  this.title = grabTitle();
  this.url = grabURL();
  this.read = false;
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
}

$('.enter-button').on('click', function() {
  var newLink = new ListedLink();
  $('.right-side').append(newLink.rightSideCode);
  linkCount = linkCount + 1;
  console.log(linkCount);
});
