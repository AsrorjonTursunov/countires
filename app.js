const searchEl = document.querySelector("#search");
const countiresEl = document.querySelector(".info");
const formEl = document.querySelector("#form");
console.log(countiresEl);

// console.log(search);
searchEl.addEventListener("search", () => {
  const natija = Array.form(countiresEl).filter((d) =>
    d.textContent.includes(searchEl.value),
  );

  countiresEl.forEach((d) => {
    d.style.display = natija.includes(d) ? "block" : "none";
  });
});
