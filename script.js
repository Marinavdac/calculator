const display = document.getElementById('display');

display.addEventListener('input', () => {
    const savedItems = localStorage.setItem('numbers', display.value);
    return savedItems;
})

window.onload = function() {
    const show = localStorage.getItem('numbers');
    return display.value = show;
  };