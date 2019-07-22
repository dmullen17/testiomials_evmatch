const testimonialsParent = document.querySelector('.Testimonials__parent-wrapper___1UEvz');
const testimonials = document.querySelectorAll('.Testimonials__person___3fb82');
const initialHeight = 184.562;
const initialWidth = 184.562;
const width = window.innerWidth;
const lowerBound = .5;

//=======================================================
//                  First Iteration                    //
//=======================================================
// Add a lower limit to this 
const updateTestimonialContent = function() {
    testimonials.forEach(testimonial => { 
        const image = testimonial.querySelector('img');
        const coords = testimonial.getBoundingClientRect();
        const x = coords.x + initialWidth/2;
        // Return if testimonial element is outside of the parent element 
        if (x > width || x < 0) return; 
        
        if (x < width/2) {
            const percent = x/(width/2);
            const adjustedPercent = lowerBound + lowerBound * percent;
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

window.addEventListener('load', updateTestimonialContent);
testimonialsParent.addEventListener('scroll', updateTestimonialContent);

