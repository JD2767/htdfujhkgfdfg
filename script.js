document.getElementById("searchBox").addEventListener("input", function (e) {
  const keyword = e.target.value.toLowerCase();
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    const match = card.innerText.toLowerCase().includes(keyword);
    card.style.display = match ? "block" : "none";
  });
});
