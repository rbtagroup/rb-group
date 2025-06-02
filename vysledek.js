
document.addEventListener("DOMContentLoaded", () => {
  const data = JSON.parse(localStorage.getItem("taxiResult"));
  const container = document.getElementById("resultContent");

  if (!data) {
    container.innerHTML = "<p>❗Data nenalezena. Prosím vraťte se a vyplňte formulář.</p>";
    return;
  }

  const date = new Date().toLocaleString("cs-CZ");

  container.innerHTML = `
    <p><strong>📅 Datum:</strong> ${date}</p>
    <p><strong>👤 Řidič:</strong> ${data.ridic}</p>
    <p><strong>🕒 Směna:</strong> ${data.smena}</p>
    <hr>
    <p><strong>💰 Tržba:</strong> ${data.trzba} Kč</p>
    <p><strong>⛽ Palivo:</strong> ${data.palivo} Kč</p>
    <p><strong>🚗 Mytí:</strong> ${data.myti} Kč</p>
    <p><strong>💳 Kartou:</strong> ${data.kartou} Kč</p>
    <p><strong>📄 Faktura:</strong> ${data.fakturou} Kč</p>
    <p><strong>📍 Přístavné:</strong> ${data.pristavne} Kč</p>
    <p><strong>💸 Jiné platby:</strong> ${data.jine} Kč</p>
    <hr>
    <p><strong>📦 K odevzdání:</strong> <span class="highlight">${data.kOdevzdani} Kč</span></p>
    <p><strong>👛 Výplata řidiče:</strong> <span class="green">${data.vyplata} Kč</span></p>
    ${data.doplatek > 0 ? `<p class="alert blikajici-hlaska">🚨 Tržba/km je příliš nízká: Doplatek řidiče ${data.doplatek} Kč (min. 15 Kč/km)</p>` : ""}
  `;
});

function goBack() {
  localStorage.removeItem("taxiResult");
  window.location.href = "index.html";
}

function share() {
  const shareText = document.getElementById("resultContent").innerText;
  if (navigator.share) {
    navigator.share({
      title: "RB TAXI Výčetka",
      text: shareText,
    });
  } else {
    alert("Sdílení není podporováno v tomto prohlížeči.");
  }
}
