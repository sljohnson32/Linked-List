// var linkCount = 100;
// var enterButton = document.querySelector('.enter-button');
// var readButton = document.querySelector('.link-read');
// var deleteButton = document.querySelector('.link-delete');

function grabTitle() {
  return (document.querySelector('.website-title').value);
}
function grabURL() {
  return document.querySelector('.website-url').value;
}

function LinkedList() {
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
}

// LinkedList.prototype.readFunction = function() {
//   $('.link-read').on(click, function() {
//     this.read = !this.read;

$('.enter-button').on('click', function() {
  var newLink = new LinkedList();
  $('.right-side').append(newLink.rightSideCode);
});

$('.right-side').on('click', '.link-read',function() {
  $(this).toggleClass('true');
});

$('.right-side').on('click', '.link-delete', function() {
  $(this).parent().parent().remove();
});
