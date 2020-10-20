

const myApp = {};

// display slide out navigation
myApp.displayNav = function () {
  $(".navLinks").toggle("slide", {
    direction: "right",
    duration: 500,
  });
  if (!$(".navBar").hasClass("open")) {
    $(".navBar").removeClass("closed").addClass("open");
    $("#btnHamburger").html('<i class="fas fa-times"></i>');
  } else {
    $(".navBar").removeClass("open").addClass("closed");
    $("#btnHamburger").html('<i class="fas fa-bars"></i>');
  }
};

myApp.init = function() {
  // initiate the AOS library.
  AOS.init({
    duration: 1500,
  });
  // navigation menu handler
  $("#btnHamburger").on("click", (event) => {
    myApp.displayNav();
  });

  // scroll for the arrow
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $("#arrowDown").fadeOut();
    } else {
      $("#arrowDown").fadeIn();
    }
  });
}



// document ready
$(function () {
  myApp.init();
});
