// Get references to DOM elements
const itemInput = document.getElementById('itemInput');
const addShopItemForm = document.getElementById('addshopitem');
const itemList = document.getElementById('itemList');
const clearListButton = document.getElementById('clearList');

// Add event listener for form submission
addShopItemForm.addEventListener('submit', function (event) {
    // Prevent form submission
    event.preventDefault();

    // Get the input value
    const itemName = itemInput.value.trim();

    // Check if input is not empty
    if (itemName !== '') {
        // Create a new list item
        const listItem = document.createElement('li');
        listItem.className = 'list-item';
        listItem.textContent = itemName;

        // Add a "Mark as Purchased" button
        const purchaseButton = document.createElement('button');
        purchaseButton.textContent = 'Mark as Purchased';
        purchaseButton.addEventListener('click', function () {
            listItem.classList.toggle('list-item-purchased');
        });

        // Add a "Remove" button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', function () {
            listItem.remove();
        });

        // Add buttons to the list item
        listItem.appendChild(purchaseButton);
        listItem.appendChild(removeButton);

        // Append the list item to the list
        itemList.appendChild(listItem);

        // Clear the input field
        itemInput.value = '';
    }
});

// Add event listener for clearing the list
clearListButton.addEventListener('click', function () {
    itemList.innerHTML = '';
});
