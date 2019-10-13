function selectBackgroundPrev(woodSelector, device) {
    const woodPrev = document.getElementById(`wood-prev-${device}`);
    const woodText = document.getElementById(`wood-text-${device}`);
    if (device === 'desktop') {
        const woodName = woodSelector.children[0].innerHTML;
        woodPrev.style.backgroundImage = woodSelector.style.backgroundImage;
        woodText.innerHTML = woodName;
    } else {
        woodPrev.style.backgroundImage = `url(${woodSelector})`;
    }
}

function goTo(element) {
    document.querySelector(element).scrollIntoView({
        behavior: 'smooth'
    });
}