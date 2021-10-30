const lastVisit = localStorage.getItem('lastVisit') || today; 
const displayDate = '';
const millisecondsToDays = 8640000;
if (lastVisit == today) {
    document.querySelector('#galleryVisits').textContent = `Last visit: First timer! &#x1F609;`;
}
else {
    displayDate = (lastVisit - today / millisecondsToDays).toFixed(0);
    document.querySelector('#galleryVisits').textContent =  `Last visit: ${displayDate}`;
}
 localStorage.setItem('lastVisit', today); 