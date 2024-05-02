document.addEventListener("DOMContentLoaded", function(){
    //Retrieve elements
    const nextChapterBtn = 
    document.getElementById('next-chapter');
    const prevChapterBtn = 
    document.getElementById('prev-chapter');

    //Event listeners for next and previous chapter buttons

    nextChapterBtn.addEventListener('click', function(){
        navigateChapter(1);
    });

    prevChapterBtn.addEventListener('click',function(){
        navigateChapter(-1);
    });

    //Function to navigate chapters
    function navigateChapter(step){
        //Get the currently displayed chapetr
        const currentChapter = 
        document.querySelector('.chapter.active');
        //Get the next chapter
        let nextChapter;
        if (step === 1){
            nextChapter = 
            currentChapter.nextElementSibling;
        } else {
            nextChapter = 
            currentChapter.previousElementSibling;
        }
        //Check if there is a next chapter
        if (nextChapter){
            //Hide the current chapter
            currentChapter.classList.remove('active');
            //Display the next chapter
            nextChapter.classList.add('active');
        }
    }
});