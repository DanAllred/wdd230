const copyrightyear = document.querySelector("#copyrightyear");
copyrightyear.textContent = new Date().getFullYear();

const lastupdated = document.lastModified;
document.getElementById("lastupdate").textContent = lastupdated;