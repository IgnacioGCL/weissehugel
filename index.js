function selectBackgroundPrev(woodSelector) {
    const woodPrev = document.getElementById('wood-prev');
    const woodText = document.getElementById('wood-text');
    const woodName = woodSelector.children[0].innerHTML;
    woodPrev.style.backgroundImage = woodSelector.style.backgroundImage;
    woodText.innerHTML = woodName;
}

function nextSlide(where) {
    const guitarSlides = document.getElementsByClassName('guitar-slide');
    let visibleSlide = findIndex(guitarSlides);
    if (where === 'right') {
        if (parseInt(visibleSlide) === guitarSlides.length - 1) {
            guitarSlides[visibleSlide].classList.replace('active', 'inactive');
            guitarSlides[0].classList.replace('inactive', 'active');
        } else {
            guitarSlides[visibleSlide].classList.replace('active', 'inactive');
            visibleSlide++;
            guitarSlides[visibleSlide].classList.replace('inactive', 'active');
        }
    } else {
        if (parseInt(visibleSlide) === 0) {
            guitarSlides[0].classList.replace('active', 'inactive');
            let lastIndex = guitarSlides.length - 1;
            guitarSlides[lastIndex].classList.replace('inactive', 'active');
        } else {
            guitarSlides[visibleSlide].classList.replace('active', 'inactive');
            visibleSlide--;
            guitarSlides[visibleSlide].classList.replace('inactive', 'active');
        }
    }
}

function findIndex(objectToIterate) {
    let index;
    for (const key in objectToIterate) {
        for (const classKey in objectToIterate[key].classList) {
            if (objectToIterate[key].classList[classKey] === 'active') {
                index = key;
            }
        }
    }
    return index;
}

function goTo(y) {
    window.scroll({
        top: y,
        left: 0,
        behavior: 'smooth'
    });
}