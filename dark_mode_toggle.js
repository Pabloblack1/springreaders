//function to toggle between dark mode and light mode
function toggleDarkMode(){
    const body = document.body;
    body.classList.toggle('dark-mode');

//Save user preference to local storage
const isDarkModeEnabled = body.classList.contains('dark-mode');
localStorage.setItem('darkModeEnabled',isDarkModeEnabled);
}

//Check if dark modeis enabled from local storage
const darkModeEnabled = localStorage.getItem('darkModfeEnabled')=== 'true';
if (darkModeEnabled) {
    document.body.classList.add('dark-mode');
}