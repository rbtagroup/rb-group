

document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("taxiForm");



  form.addEventListener("submit", function (e) {
    e.preventDefault();
    calculate();
  });
    e.preventDefault();

    calculate();

  });



  

function calculate() {
  const name = document.getElementById("driverName").value.trim();
  const trzba = parseFloat(document.getElementById("trzba").value) || 0;
  const km = parseFloat(document.getElementById("km").value) || 0;
  const palivo = parseFloat(document.getElementById("palivo").value) || 0;
  const myti = parseFloat(document.getElementById("myti").value) || 0;
  const kartou = parseFloat(document.getElementById("kartou").value) || 0;
  const fakturou = parseFloat(document.getElementById("fakturou").value) || 0;
  const pristavne = parseFloat(document.getElementById("pristavne").value) || 0;
  const jine = parseFloat(document.getElementById("jine").value) || 0;
  const smena = document.getElementById("typSměny").value;

  if (!name || isNaN(trzba) || isNaN(km)) {
    alert("Zadejte prosím jméno řidiče, platnou tržbu a kilometry.");
    return;
  }

  const odevzdani = trzba - palivo - myti - kartou - fakturou - jine;

  let vyplata = 0;
  let doplatek = 0;
  const minimalni = smena === "pul" ? 500 : 1000;

  if (trzba >= 3330) {
    vyplata = 0.3 * (trzba - pristavne);
    if (smena === "pul" && vyplata < 500) vyplata = 500;
    if (smena !== "pul" && vyplata < 1000) vyplata = 1000;
  } else {
    vyplata = minimalni;
  }

  if (trzba < km * 15) {
    doplatek = parseFloat((km * 15 - trzba).toFixed(2));
  }

  const result = {
    ridic: name,
    smena,
    trzba,
    km,
    palivo,
    myti,
    kartou,
    fakturou,
    pristavne,
    jine,
    vyplata: vyplata.toFixed(2),
    kOdevzdani: odevzdani.toFixed(2),
    doplatek
  };

  localStorage.setItem("taxiResult", JSON.stringify(result));
  window.location.href = "vysledek.html";
}