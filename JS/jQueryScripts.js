var linkCount = 0;
var readLinks = 0;
var unReadLinks = linkCount - readLinks;
var enterButton = document.querySelector('.enter-button');

enterButton.disabled = true;

function grabTitle() {
  return (document.querySelector('.website-title').value);
}
function grabURL() {
  return document.querySelector('.website-url').value;
}

function getAnalytics() {
  $('.full-page').on('click', function() {
    $('.total-links').text(linkCount);
    $('.unread').text(linkCount - readLinks);
    $('.read').text(readLinks);
});}

function inputComplete() {
  if (grabTitle() !== "" && grabURL() !== "") {
    return true;
  }
    else {
      return false;
    }
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

$('.enter-button').on('click', function() {
  if (inputComplete() === false) {
    alert("Please enter a website name AND valid URL to add your link.");
  }
    else {
      var newLink = new LinkedList();
      $('.right-side').append(newLink.rightSideCode);
      linkCount = linkCount + 1;
      getAnalytics();
      console.log(linkCount);
    }
});

$('.right-side').on('click', '.link-read',function() {
  $(this).toggleClass('true');
  readLinks = $('.true').length;
  getAnalytics();
});

$('.right-side').on('click', '.link-delete', function() {
  $(this).parent().parent().remove();
  linkCount = linkCount - 1;
  readLinks = $('.true').length;
  getAnalytics();
});

$('.website-info').on('keyup change',function() {
  if (inputComplete() === true) {
    $('.enter-button').attr('disabled', false);
  }
    else {
      $('.enter-button').attr('disabled', true);
    }
});
