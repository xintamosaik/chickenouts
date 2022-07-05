const birdcage = document.getElementById("birdcage");
console.log(birdcage);
const cardspaces = birdcage.getElementsByClassName("cardspace");
console.log(cardspaces);
for (let cardspace of cardspaces) {
  cardspace.addEventListener("click", (event) => {
    const target = event.currentTarget;
    const back = target.querySelector(".back");
    const front = target.querySelector(".front");
    back.classList.toggle("visible");
    front.classList.toggle("visible");
  });
  console.log(cardspace);
}
