
function displayNav() {
  $(".navLinks").toggle("slide", {
    direction: "right",
    duration: 500,
  });
  if(!$('.navLinks').hasClass('open')) {
    console.log('open');
    $('.navLinks').addClass('open');
    $("#btnHamburger").html('<i class="fas fa-times"></i>');
  } else {
    $('.navLinks').removeClass('open');
    $("#btnHamburger").html('<i class="fas fa-bars"></i>');
    console.log('closed');
  }
}

new ClipboardJS(".btnCopyEmail");

$(function () {
  console.log("ready");
  AOS.init({
    duration: 1500,
  });
  $('#btnHamburger').on('click', event => {
    displayNav();
  })
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('#arrowDown').fadeOut();
    }
    else {
      $('#arrowDown').fadeIn();
    }
  });
});
