/* Top menu UI */
document.addEventListener('DOMContentLoaded', function () {
const customSelectButton = document.getElementById('custom-select-button');
const realSelect = document.getElementById('real-select');

customSelectButton.addEventListener('click', function () {
realSelect.click(); // Симулируем клик по реальному select
});

realSelect.addEventListener('change', function () {
customSelectButton.textContent = realSelect.options[realSelect.selectedIndex].text;
});
});

