//add event listener to start reading button 1
document.getElementById('start-reading-btn1').addEventListener('click', () => {
    //you can implement the logic to redirect to the last read chapter
    window.location.href = 'spec reader novel1.html?novel=${getnovelIdFromUrl()}'
});

//Function to extract novel ID from URL
function getnovelIdFromUrl(){
    const urlParams = new
    URLSearchParams(window.location.search);
    return urlParams.get('novel');
}