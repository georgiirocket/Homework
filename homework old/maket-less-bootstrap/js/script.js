$('#oneColorTextBlock').on('click', function () {
    $('#mainBlock p').css('color', '#28282e');
    $('#mainBlock a').removeClass('active');
    $('#pills-tabContent div').removeClass('active');
    $('#pills-home').addClass('show active');
    $('#one a').addClass('active');
    $('#one p').css('color', '#ffffff');
})

$('#twoColorTextBlock').on('click', function () {
    $('#mainBlock p').css('color', '#28282e');
    $('#mainBlock a').removeClass('active');
    $('#pills-tabContent div').removeClass('active');
    $('#pills-profile').addClass('show active');
    $('#two a').addClass('active');
    $('#two p').css('color', '#ffffff');
});

$('#threeColorTextBlock').on('click', function () {
    $('#mainBlock p').css('color', '#28282e');
    $('#mainBlock a').removeClass('active');
    $('#pills-tabContent div').removeClass('active');
    $('#pills-contact').addClass('show active');
    $('#three a').addClass('active');
    $('#three p').css('color', '#ffffff');
});

$(function () {
    $('#forColorTextBlock').on('click', function () {
        $('#mainBlock p').css('color', '#28282e');
        $('#mainBlock a').removeClass('active');
        $('#pills-tabContent div').removeClass('active');
        $('#pills-home').addClass('show active');
        $('#for a').addClass('active');
        $('#for p').css('color', '#ffffff');
    });
    $("#forColorTextBlock").trigger('click');
});



$('#fiveColorTextBlock').on('click', function () {
    $('#mainBlock p').css('color', '#28282e');
    $('#mainBlock a').removeClass('active');
    $('#pills-tabContent div').removeClass('active');
    $('#pills-profile').addClass('show active');
    $('#five a').addClass('active');
    $('#five p').css('color', '#ffffff');
});

$('#sixColorTextBlock').on('click', function () {
    $('#mainBlock p').css('color', '#28282e');
    $('#mainBlock a').removeClass('active');
    $('#pills-tabContent div').removeClass('active');
    $('#pills-contact').addClass('show active');
    $('#six a').addClass('active');
    $('#six p').css('color', '#ffffff');
});

$('#sevenColorTextBlock').on('click', function () {
    $('#mainBlock p').css('color', '#28282e');
    $('#mainBlock a').removeClass('active');
    $('#pills-tabContent div').removeClass('active');
    $('#pills-home').addClass('show active');
    $('#seven a').addClass('active');
    $('#seven p').css('color', '#ffffff');
});

$('#eightColorTextBlock').on('click', function () {
    $('#mainBlock p').css('color', '#28282e');
    $('#mainBlock a').removeClass('active');
    $('#pills-tabContent div').removeClass('active');
    $('#pills-profile').addClass('show active');
    $('#eight a').addClass('active');
    $('#eight p').css('color', '#ffffff');
});

$('#pills-home-tab-oneS').on('click', function () {
    $('#mainTabPhoto li a').removeClass('active');
    $('#mainTabPhoto p').css('display', 'none');
    $('#oneTextCase, #twoTextCase, #threeNextCase').css('display', 'none');
    $('#pills-home-tab-oneS').addClass('active');
    $('#pills-home-tab-oneS p').css('display', 'inline-block');
    $('#oneTextCase').css('display', 'inline-block');
});

$('#pills-profile-tab-twoS').on('click', function () {
    $('#mainTabPhoto li a').removeClass('active');
    $('#mainTabPhoto p').css('display', 'none');
    $('#oneTextCase, #twoTextCase, #threeNextCase').css('display', 'none');
    $('#pills-profile-tab-twoS').addClass('active');
    $('#twoTextCase').css('display', 'inline-block');
    $('#pills-profile-tab-twoS p').css('display', 'inline-block');
});

$('#pills-contact-tab-threeS').on('click', function () {
    $('#mainTabPhoto li a').removeClass('active');
    $('#mainTabPhoto p').css('display', 'none');
    $('#oneTextCase, #twoTextCase, #threeNextCase').css('display', 'none');
    $('#pills-contact-tab-threeS').addClass('active');
    $('#threeNextCase').css('display', 'inline-block');
    $('#pills-contact-tab-threeS p').css('display', 'inline-block');
});

$(function () {
    $('#pills-home-tab-forS').on('click', function () {
        $('#mainTabPhoto li a').removeClass('active');
        $('#mainTabPhoto p').css('display', 'none');
        $('#oneTextCase, #twoTextCase, #threeNextCase').css('display', 'none');
        $('#pills-home-tab-forS').addClass('active');
        $('#pills-home-tab-forS p').css('display', 'inline-block');
        $('#oneTextCase').css('display', 'inline-block');

    });
    $("#pills-home-tab-forS").trigger('click');
});


$('#pills-profile-tab-fiveS').on('click', function () {
    $('#mainTabPhoto li a').removeClass('active');
    $('#mainTabPhoto p').css('display', 'none');
    $('#oneTextCase, #twoTextCase, #threeNextCase').css('display', 'none');
    $('#pills-profile-tab-fiveS').addClass('active');
    $('#pills-profile-tab-fiveS p').css('display', 'inline-block');
    $('#twoTextCase').css('display', 'inline-block');
});

$('#pills-contact-tab-sixS').on('click', function () {
    $('#mainTabPhoto li a').removeClass('active');
    $('#mainTabPhoto p').css('display', 'none');
    $('#oneTextCase, #twoTextCase, #threeNextCase').css('display', 'none');
    $('#pills-contact-tab-sixS').addClass('active');
    $('#pills-contact-tab-sixS p').css('display', 'inline-block');
    $('#threeNextCase').css('display', 'inline-block');
});

$('#pills-home-tab-sevenS').on('click', function () {
    $('#mainTabPhoto li a').removeClass('active');
    $('#mainTabPhoto p').css('display', 'none');
    $('#oneTextCase, #twoTextCase, #threeNextCase').css('display', 'none');
    $('#pills-home-tab-sevenS').addClass('active');
    $('#pills-home-tab-sevenS p').css('display', 'inline-block');
    $('#oneTextCase').css('display', 'inline-block');
});

$('#pills-profile-tab-eightS').on('click', function () {
    $('#mainTabPhoto li a').removeClass('active');
    $('#mainTabPhoto p').css('display', 'none');
    $('#oneTextCase, #twoTextCase, #threeNextCase').css('display', 'none');
    $('#pills-profile-tab-eightS').addClass('active');
    $('#pills-profile-tab-eightS p').css('display', 'inline-block');
    $('#twoTextCase').css('display', 'inline-block');
});