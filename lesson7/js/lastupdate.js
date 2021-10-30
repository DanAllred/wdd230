let d = new Date();
document.getElementById("copyrightYear").textContent = d.getFullYear();

const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
}

document.getElementById("currentDate").textContent = d.toLocaleDateString('en-UK', options);


//
function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

//


//datesbetween
const lastVisit = localStorage.getItem('lastVisit') || today; 
//const displayDate = '';
const millisecondsToDays = 86400000;
if (lastVisit == today) {
    document.querySelector('#galleryVisits').textContent = `Last visit: Today is your first visit!`;
}
else {
    displayDate = (lastVisit - today / millisecondsToDays).toFixed(0);
    document.querySelector('#galleryVisits').textContent =  `Last visit: ${displayDate}`;
}
 localStorage.setItem('lastVisit', today); 


//
WebFont.load({
  google: {
    families: [
       'Oswald', 'sans serif'
    ]
  }
});


