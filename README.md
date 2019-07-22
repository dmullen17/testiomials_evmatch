# EVmatch Testimonials

A sample customer and host testimonials page for Electric Vehicle Match. The images resize as the user scrolls through the testiomonials.  

## How the algorithm works

You can view the full algorithm in [`app.js`](https://github.com/dmullen17/testiomials_evmatch/blob/master/resources/app.js)

Variables: 
  + `testimonialsParent` - the parent `div` element that contains the testimonials. `updateTestimonialContent` is added as the callback to `scroll` events on this element.  
  + `testimonials` - all of the testimonial `div` containers
  + `initialHeight` - initial img element height 
  + `initialWidth` - initial img element width 
  + `width` - window inner width in pixels
  + `lowerBound` - the lower bound that images will shrink to in percentage (.5 = 50% image reduction).


Callback function: 
Each time the callback function is fired the bounding client rectangle for each `testimonial` container is calculated with `getBoundingClientRect`.  The image element is also selected.  

Next, the midpoint of each image is determined by adding the x coordinate from the client rectangle (top left) and `initialWidth/2`. The function will now optionally return if the selected `img` element is outside of the parent element.  

Finally, it will check to see if the midpoint of the image is to the left or right of parent midpoint.  It then either shrinks or grows elements accordingly by calculating how close each image is to the midpoint as a percentage, adjusting the value to incorporate the lower bound, and converting to pixels by multiplying by the initial image height (or width as they're square). The image's height and width properties are then set to this value. 
