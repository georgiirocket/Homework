menu.onclick = function myFunction() {
    var x = document.getElementById('myNav');
    if (x.className == 'nav') {
        x.className += ' responsive';
    } else {
        x.className = 'nav';
    }
}

$('.input-informationName').attr('placeholder', 'Name').addClass('placeholder-style');
$('.input-informationEmail').attr('placeholder', 'Email').addClass('placeholder-style');
$('.input-informationSubject').attr('placeholder', 'Subject').addClass('placeholder-style');
$('.input-informationMessage').attr('placeholder', 'Message').addClass('placeholder-style');



$(function () {
    $("#tabsOne").on("click", function () {
        $(".town-text-block").removeClass("tab-active");
        $('#tabTextContentOne').addClass("tab-active");
    });
    $("#tabsOne").trigger('click');
});



$("#tabsTwo").on("click", function () {
    $(".town-text-block").removeClass("tab-active");
    $('#tabTextContentTwo').addClass("tab-active");
});

$("#tabsThree").on("click", function () {
    $(".town-text-block").removeClass("tab-active");
    $('#tabTextContentThree').addClass("tab-active");
});