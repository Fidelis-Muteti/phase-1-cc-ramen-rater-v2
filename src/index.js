const ramenMenuDiv = document.getElementById("ramen-menu");
const newRamenData = document.getElementById("new-ramen");
const baseUrl = "http://localhost:3000/ramens";

document.getElementById("new-ramen").addEventListener("submit", newRamen);


fetch(baseUrl)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((ramen) => {
      displayRamen(ramen);
    });
  })
  .catch((err) => console.log(err));


function displayRamen(ramen) {
  const ramenImageElement = document.createElement("img");
  ramenImageElement.src = ramen.image;
  ramenMenuDiv.append(ramenImageElement);

  ramenImageElement.addEventListener("click", () => clickHand(ramen)); 
}


function clickHand(ramen) {
  document.querySelector(".detail-image").src = ramen.image;
  document.querySelector(".detail-image").alt = ramen.name;
  document.querySelector(".name").textContent = ramen.name; 
  document.querySelector(".restaurant").textContent = ramen.restaurant; 
  document.getElementById("rating-display").textContent = ramen.rating;
  document.getElementById("comment-display").textContent = ramen.comment;
}


function newRamen(e) {
  e.preventDefault(); 

  const newRamenData = {
    name: e.target.name.value,
    restaurant: e.target.restaurant.value,
    image: e.target.image.value,
    rating: parseInt(e.target.rating.value), 
    comment: e.target["new-comment"].value,
  };

 
  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newRamenData),
  })
    .then((res) => res.json())
    .then((data) => {

      displayRamen(data);
      alert(`${data.name} created successfully!`);
    })
    .catch((err) => console.log(err));

  e.target.reset(); 
}


function main() {
  addSubmitListener(); 
}

function addSubmitListener() {
  newRamenData.addEventListener("submit", newRamen);
}

document.addEventListener("DOMContentLoaded", main);
