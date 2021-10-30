const d = new Date();
const year = d.getFullYear();
const fulldate = `${year}`;
document.querySelector("#dateyear").textContent = fulldate;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const fdate = d.toLocaleDateString("en-UK", options);
document.querySelector("#lastUpdated").textContent = fdate;



function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

WebFont.load({
    google: {
      families: [
         'Oswald', 'sans serif'
      ]
    }
  });

//Last Visit
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