$('.myLinks a').click( function() {
    let idLink = $(this).text().toLowerCase()
     $('html, body').animate({
          scrollTop: $(`#${idLink}`).offset().top-80
     }, 800);
});