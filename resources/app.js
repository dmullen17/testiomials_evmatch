const cards = document.querySelector('.Testimonials__parent-wrapper___1UEvz');
const cardContent = document.querySelectorAll('.Testimonials__person___3fb82');
const initialHeight = 184.562;
const initialWidth = 184.562;


//=======================================================
//                  First Iteration                    //
//=======================================================
// Add a lower limit to this 
const updateCardContent = function() {
    const width = window.innerWidth;
    const lowerBound = .5;
    
    cardContent.forEach(card => { 
        const image = card.querySelector('img');
        const coords = card.getBoundingClientRect();
        const x = coords.x + initialWidth/2;
        // Return if card element is outside of the parent element 
        if (x > width || x < 0) return; 
        
        if (x < width/2) {
            const percent = x/(width/2);
            const adjustedPercent = lowerBound + lowerBound * percent;
            console.log(adjustedPercent);
            const height = initialHeight * adjustedPercent;
            image.style.height = `${height}px`;
            image.style.width = `${height}px`;
        } else {
            const percent = 2 - (x/(width/2));
            const adjustedPercent = lowerBound + lowerBound * percent;
            const height = initialHeight * adjustedPercent;
            image.style.height = `${height}px`;
            image.style.width = `${height}px`;
        }
    });
}

window.addEventListener('load', updateCardContent);
cards.addEventListener('scroll', updateCardContent);

