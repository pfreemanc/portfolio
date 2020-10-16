
function displayNav() {
  $(".navLinks").toggle("slide", {
    direction: "right",
    duration: 500,
  });
  if(!$('.navBar').hasClass('open')) {
    $('.navBar').removeClass('closed').addClass('open');
    $("#btnHamburger").html('<i class="fas fa-times"></i>');
  } else {
    $('.navBar').removeClass('open').addClass('closed')
    $("#btnHamburger").html('<i class="fas fa-bars"></i>');
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
