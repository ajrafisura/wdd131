const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

let oLastModif = new Date(document.lastModified);
lastModified.innerHTML = `Last Modification: <span class=highlight">${oLastModif}`;
