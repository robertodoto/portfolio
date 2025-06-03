const sorry = document.getElementById('secret-p');
const button = document.getElementById('showprojects');

const showHiddenElement = (domELement) => {
    if (domELement.style.display === 'none') {
        domELement.style.display = 'block';
        button.textContent = 'Hide projects';
    } else {
        domELement.style.display = 'none';
        button.textContent = 'Show porjects';
    }
}


button.addEventListener('click', () => {showHiddenElement(sorry)});