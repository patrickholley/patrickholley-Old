let isSending = false;

let checkScroll = () => {
    let value = $(this).scrollTop();
    if (value > 80) {
        $('.my-nav').animate({'background-color':'rgba(51, 58, 86, 1)', /*'height':'60px',*/ 'color':'white'}, {duration: 200, queue: false});
        $('.my-nav a').animate({'color':'white'}, {duration: 200, queue: false});
    } else {     
        $('.my-nav').animate({'background-color':'rgba(51, 58, 86, 0)', /*'height':'80px',*/ 'color':'#333a56'}, {duration: 200, queue: false});
        $('.my-nav a').animate({'color':'#333a56'}, {duration: 200, queue: false});
    }
}

checkScroll();

$('.my-links a').click((e) => {
    e.preventDefault();
    let idLink = e.currentTarget.text.toLowerCase();
    let margin = 60;
    if (idLink == "home") margin = 80;
     $('html, body').animate({
          scrollTop: $(`#${idLink}`).offset().top-margin
     }, {duration: 800, queue: false});
});

$(window).scroll(() => {
    checkScroll();
})

let submitMessage = () => {
    if (!isSending) {
        isSending = true;
        let name = $('#contact-name').val();
        let email = $('#contact-email').val();
        let phone = $('#contact-phone').val();
        let message = $('#contact-message').val();
        if (/\S/.test(name) || /\S/.test(email) || /\S/.test(phone) || /\S/.test(message)) {
            $('#contact-submit').fadeOut(500, function() {
                $(this).text('Please wait . . .').fadeIn(500)
            });
            sendEmail(name, email, phone, message)
        }
        else {
            isSending = false;
            alert('All fields are required before submitting a message.')
        }
    }
}

let animateSubmit = () => {
    $('#contact-submit').fadeOut(500, function() {
        $(this).text('Submit Message').fadeIn(500)
    });
}

let sendEmail = (name, email, phone, message) => {
    emailjs.send("outlook","pholley",{name, email, phone, message})
    .then((res) => {
        isSending = false;
        $('#contact-name').val('');
        $('#contact-email').val('');
        $('#contact-phone').val('');
        $('#contact-message').val('');
        animateSubmit()
        alert('Your email thas been sent. Thank you for reaching out to me, and I will get back to you as quickly as possible.')
    }, (err) => {
        isSending = false;                            
        animateSubmit()
        alert('Something happened while the email was trying to send itself. Please try again or email me directly at patrick_holley@outlook.com.')
        console.log(err)
    });
}
