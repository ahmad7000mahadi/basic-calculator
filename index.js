let calculation = localStorage.getItem('calculation') || '';
displayCalculation();
    function updateCalculation (value) {
        calculation += value;   
        displayCalculation();
        localStorage.setItem('calculation', calculation);
    }

    function displayCalculation() {
        document.querySelector('.js-result')
            .innerHTML = calculation;
    }

function openPopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'block';
}

function closePopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'none';
}
