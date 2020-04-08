let moveNumber = 0;
let customSlider = document.querySelector('.custem_slider');


customSlider.customSlider = function (sliderSetting) {
    let inputWidth = sliderSetting.sliderWidth;
    let mSlider = sliderSetting.maxSlide;

    let slidesOffset;

    buildSlider();

    let nOne = customSlider.querySelectorAll('.one_slide');
    let contNone = customSlider.querySelector('.outar_conteiner');


    if (inputWidth == 300) {
        slidesOffset = 300;

    } else {
        slidesOffset = inputWidth;
    }

    if (mSlider == 1) {
        contNone.style.width = `${slidesOffset}px`;
    } else {
        contNone.style.width = `${slidesOffset * mSlider}px`;
    }

    nOne.forEach(item => item.style.width = `${slidesOffset}px`);
    nOne.forEach(item => item.style.height = `${slidesOffset}px`);




    let nextSlideBt = document.querySelector('.custem_slider .next_slide');
    let prevSlideBtn = document.querySelector('.custem_slider .prev_slide');

    nextSlideBt.addEventListener('click', nextSlidedClick);
    prevSlideBtn.addEventListener('click', prevSlidedClick);

    function nextSlidedClick() {
        moveNumber = moveNumber - slidesOffset;
        let customSlider = this.closest('.custem_slider');
        let innerConteiner = customSlider.querySelector('.inner_container');

        innerConteiner.style.transform = `translate(${moveNumber}px, 0)`;

    }

    function prevSlidedClick() {
        moveNumber = moveNumber + slidesOffset;
        let customSlider = this.closest('.custem_slider');
        let innerConteiner = customSlider.querySelector('.inner_container');

        innerConteiner.style.transform = `translate(${moveNumber}px, 0)`;

    }


}


function buildSlider() {


    let oneSliderarr = customSlider.querySelectorAll('div');
    oneSliderarr.forEach(item => item.classList.add('one_slide'));

    customSlider.innerHTML = `<div class="outar_conteiner">
    <div class="inner_container">
        ${customSlider.innerHTML}
    </div>
</div>

<div class="navs">
    <a href="#" class="prev_slide"> < </a>
    <a href="#" class="next_slide"> > </a>
</div>`

}