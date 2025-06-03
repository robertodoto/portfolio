const sorry = document.getElementById('secret-p');
const button = document.getElementById('showprojects');

const showHiddenElement = (domElement) => {
    const isHidden = window.getComputedStyle(domElement).display === 'none';
    
    if (isHidden) {
        domElement.style.display = 'block';
        button.textContent = 'Hide Projects';
    } else {
        domElement.style.display = 'none';
        button.textContent = 'Show Projects';
    }
};

button.addEventListener('click', () => { showHiddenElement(sorry); });