const search = document.querySelector("#search");
const countires = document.querySelector(".info");
const form = document.querySelector("#form");
console.log(countires);

// console.log(search);
search.addEventListener("search", () => {
  const natija = Array.from(countires).filter((d) =>
    d.textContent.includes(search.value),
  );

  countires.forEach((d) => {
    d.style.display = natija.includes(d) ? "block" : "none";
  });
});
