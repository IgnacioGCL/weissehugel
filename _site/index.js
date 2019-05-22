function selectBackgroundPrev(woodSelector) {
    const woodPrev = document.getElementById('wood-prev');
    const woodText = document.getElementById('wood-text');
    const woodName = woodSelector.children[0].innerHTML;
    woodPrev.style.backgroundImage = woodSelector.style.backgroundImage;
    woodText.innerHTML = woodName;
}