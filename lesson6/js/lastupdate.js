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

