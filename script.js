const form = document.querySelector('form');
const factDiv = document.querySelector('.number-facts');

form.addEventListener('submit',(e)=> {
    e.preventDefault();
    const number = e.target.querySelector('input[type="number"]').value;
    const loadText ='Wait a little bit &#8987 ';
    factDiv.innerHTML = loadText;
    const baseURL = "http://numbersapi.com/";
    fetch(baseURL + number)
    .then(response => response.text())
    .then(text => factDiv.innerHTML = text)
    .catch(e=>console.log(e));
})