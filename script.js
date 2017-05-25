$('.myLinks a').click( function() {
    let idLink = $(this).text().toLowerCase()
     $('html, body').animate({
          scrollTop: $(`#${idLink}`).offset().top-80
     }, 800);
});

$(window).scroll(() => {
    let value = $(this).scrollTop()
    if (value > 80) {
        $('.myNav').css({'padding':'0px, 25px', 'height':'60px'})
    }
    else $('.myNav').css({'padding':'0px', 'height':'80px'})
})