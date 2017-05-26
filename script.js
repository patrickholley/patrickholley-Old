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
    } else {     
        $('.myNav').animate({'background-color':'rgba(51, 58, 86, 0)', 'height':'80px', 'color':'#333a56'}, {duration: 200, queue: false});
        $('.myNav a').animate({'color':'#333a56'}, {duration: 200, queue: false});
    }
})

let sendEmail = () => {
    emailjs.send("outlook","template_pAKc748q",{name: "James", notes: "Check this out!"})
    .then((res) => {
        alert('Your email has been sent. Thank you for reaching out to me, and I will get back to you as quickly as possible.')
    }, (err) => {
        alert('Something happened while the email was trying to send itself. Please try again or email me directly at patrick_holley@outlook.com.')
    });
}
