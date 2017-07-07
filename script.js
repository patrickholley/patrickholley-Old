let isSending = false;
let priColor = $('#nav').css('color');
let secColor = $('#nav').css('background-color');

$(window).on('load', () => {
    let centerMargin = (($(window).width()/2)-95);
    if (centerMargin > 380) centerMargin = 380;
    $('#nav').slideDown(1000, () => {
        $('.home-pic')
            .css({'left': `-${centerMargin}px`})
            .animate(
                { opacity: 1 },
                { queue: false, duration: 2000 }
            );


        $('.home-pic')
            .animate(
                {'left': 0 },
                { queue: false, duration: 2000 }
            );
    }).css('display', 'flex');
    
});

const checkWidth = () => {
    let width = $(window).width();
    if (width >= 810) {
        $('.nav-link-ham').fadeOut(200, () => {
            $('.nav-links').fadeIn(200);
        });
    } else {
        $('.nav-links').fadeOut(200, () => {
            $('.nav-link-ham').fadeIn(200);
        });
    }
}

$(window).resize(function() {
    checkWidth();
});

const checkScroll = () => {
    let value = $(this).scrollTop();
    if (value > 80) {
        $('#nav').animate({'background-color':priColor, 'height':'60px', 'color':secColor}, {duration: 200, queue: false});
        $('#nav a').animate({'color':secColor}, {duration: 200, queue: false});
        $('.nav-links').addClass('nav-links-alter');
        $('.nav-links').removeClass('nav-links-base');
    } else if (value <= 80) {     
        $('#nav').animate({'background-color':secColor, 'height':'80px', 'color':priColor}, {duration: 200, queue: false});
        $('#nav a').animate({'color':priColor}, {duration: 200, queue: false});
        $('.nav-links').addClass('nav-links-base');
        $('.nav-links').removeClass('nav-links-alter');
    }
}

checkScroll();
checkWidth();

$('.nav-links a').click((e) => {
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

const submitMessage = () => {
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

const animateSubmit = () => {
    $('#contact-submit').fadeOut(500, function() {
        $(this).text('Submit Message').fadeIn(500)
    });
}

const sendEmail = (name, email, phone, message) => {
    emailjs.send("gmail","pholley",{name, email, phone, message})
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
