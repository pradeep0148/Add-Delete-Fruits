document.addEventListener("DOMContentLoaded", function () {
    const ul = document.querySelector(".fruits");
  
    ul.addEventListener("click", function (event) {
      if (event.target.classList.contains("delete-btn")) {
        // Handle delete button click
        const listItem = event.target.closest("li");
        ul.removeChild(listItem);
      } else if (event.target.classList.contains("edit-btn")) {
        // Handle edit button click (you can implement the edit functionality here)
        console.log("Edit button clicked");
      }
    });
  
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const fruitInput = document.getElementById("fruit-to-add").value;
      if (fruitInput.trim() !== "") {
        const li = document.createElement("li");
        li.classList.add("fruit");
  
        li.innerHTML = `
          ${fruitInput}
          <button class="delete-btn">x</button>
          <button class="edit-btn">Edit</button>
        `;
  
        ul.appendChild(li);
        form.reset();
      }
    });
  });