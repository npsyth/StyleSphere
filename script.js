let languageButton = document.querySelector('rus');

languageButton.addEventListener('click', () => {
    let rus = document.querySelectorAll('.rus');
    let eng = document.querySelectorAll('.eng');
    if(rus.style.display = 'block') {
        rus.style.display = 'none';
        eng.style.display = 'block';
    }
    else(eng.style.display = 'block') {
        eng.style.display = 'none';
        rus.style.display = 'block';
    }
}) 