const sorry = document.getElementById('secret-p');
const button = document.getElementById('showprojects');

const showHiddenElement = (domELement) => {
    if (domELement.style.display === 'none') {
        domELement.style.display = 'block';
    } else {
        domELement.style.display = 'none';
    }
}


button.addEventListener('click', () => {showHiddenElement(sorry)});