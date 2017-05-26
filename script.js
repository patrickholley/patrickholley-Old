$('.myLinks a').click((e) => {
    e.preventDefault();
    let idLink = e.currentTarget.text.toLowerCase();
    let margin = 60;
    if (idLink == "home") margin = 80;
     $('html, body').animate({
          scrollTop: $(`#${idLink}`).offset().top-margin
     }, {duration: 800, queue: false});
});

$(window).scroll(() => {
    let value = $(this).scrollTop();
    if (value > 80) {
        $('.myNav').animate({'background-color':'rgba(51, 58, 86, 1)', 'height':'60px', 'color':'white'}, {duration: 200, queue: false});
        $('.myNav a').animate({'color':'white'}, {duration: 200, queue: false});
    }
    else {     
        $('.myNav').animate({'background-color':'rgba(51, 58, 86, 0)', 'height':'80px', 'color':'#333a56'}, {duration: 200, queue: false});
        $('.myNav a').animate({'color':'#333a56'}, {duration: 200, queue: false});
    }
})