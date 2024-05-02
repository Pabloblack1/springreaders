//add event listener to novel tiles
document.querySelectorAll('.novel-tile').forEach(tile => {
    tile.addEventListener('click', () => {
        const novelId = title.dataset.novelId;
        window.location.href = 'spec reader chapters1.html?novel=${novelId}';
    });
});

//add event listener to novel tiles
document.querySelectorAll('.novel-tile').forEach(tile => {
    tile.addEventListener('click', () => {
        const novelId = title.dataset.novelId;
        window.location.href = 'spec reader chapters2.html?novel=${novelId}';
    });
});