document.addEventListener("DOMContentLoaded", function () {
    const donationForm = document.getElementById("donationForm");
    const donationItems = document.getElementById("donationItems");
  
    // Event listener for donation form submission
    donationForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const itemName = document.getElementById("itemName").value;
      const itemDescription = document.getElementById("itemDescription").value;
      const itemCategory = document.getElementById("itemCategory").value;
      const itemQuantity = document.getElementById("itemQuantity").value;
      const contactName = document.getElementById("contactName").value;
      const contactEmail = document.getElementById("contactEmail").value;
  
      // Create a new list item for the donated item
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <h3>${itemName}</h3>
        <p>${itemDescription}</p>
        <p>Category: ${itemCategory}</p>
        <p>Quantity: ${itemQuantity}</p>
        <p>Contact Name: ${contactName}</p>
        <p>Contact Email: ${contactEmail}</p>
      `;
  
      donationItems.appendChild(listItem);
  
      // Reset the form fields
      donationForm.reset();
    });
  });