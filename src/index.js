const ramenMenuDiv = document.getElementById("ramen-menu")
const newRamenData = document.getElementById("new-ramen")
document.getElementById("new-ramen").addEventListener("submit",newRamen)
fetch("http://localhost:3000/ramens")
     .then(response => response.json())
     .then(data => {
      data.forEach(ramen => {
      
        displayRamen(ramen);
      })
})
.catch((err) => console.log(err));

function displayRamen(ramen){
  const ramenImageElement = document.createElement("img");
  ramenImageElement.src = ramen.image;
  ramenMenuDiv.append(ramenImageElement);

  ramenImageElement.addEventListener("click",() => clickHand(ramen))
}



function clickHand(ramen) {
  document.querySelector(".detail-image").src = ramen.image;
  document.querySelector(".detail-image").alt = ramen.name;  
  document.getElementById("name").textContent = ramen.name;
  document.getElementById("restaurant").textContent = ramen.restaurant;
  document.getElementById("rating-display").textContent = ramen.rating;
  document.getElementById("comment-display").textContent = ramen.comment;
}

function newRamen(e) {
     e.preventDefault();
        
          const newRamenData = {
           name: e.target.name.value,
           restaurant: e.target.restaurant.value,
           image: e.target.image.value,
           rating: e.target.rating.value,
           comment: e.target["new-comment"].value
          };
     displayRamen(newRamenData) 
     e.target.reset(); 
  }



function el(id) {
  return document.getElementById(id);
}


    
        
        // Callbacks
const handleClick = (ramen) => {
  // Add code
};

const addSubmitListener = () => {
  // Add code
}

const displayRamens = () => {
  // Add code
};

const main = () => {
  displayRamen()// Invoke displayRamens here
  addSubmitListener()// Invoke addSubmitListener here
}

main()

document.addEventListener("DOMContentLoaded", main);// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
