/**
 *  FishList which renders individual fish objects as HTML
 */

// TODO: Import `useFish` from the data provider module

import { useFish } from './FishDataProvider.js';
import { Fish } from './Fish.js';
export const FishList = () => {

    // Get a reference to the `<article class="content">` element
    // Reference to the DOm, reference to the array
    const contentElement = document.querySelector(".fishList");
    const allTheBigAndSmallFish = useFish()

    let fishHTMLRepresentations = ""
    for (const oneThingFromTheSea of allTheBigAndSmallFish) {
        fishHTMLRepresentations += Fish(oneThingFromTheSea);   
    
    // Add to the existing HTML in the content element
    }
    contentElement.innerHTML += `
        
            ${fishHTMLRepresentations}
       
    `
}
