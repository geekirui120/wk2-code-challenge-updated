# Shopping List Application

A simple shopping list web application that allows users to:
- Add items to the shopping list.
- Mark items as purchased.
- Remove individual items.
- Clear the entire list.

## Features

1. **Add Items:**
   - Enter an item name in the input field and click the **Add** button to add it to the list.
2. **Mark as Purchased:**
   - Click the "Mark as Purchased" button next to an item to toggle its purchased status.
   - Purchased items are highlighted and have a strikethrough effect.
3. **Remove Items:**
   - Click the "Remove" button to delete a specific item from the list.
4. **Clear List:**
   - Click the **Clear List** button to remove all items from the list.

## File Structure

```
shopping-list-app/
│
├── index.html    # The main HTML structure.
├── style.css     # Styling for the application (inlined in this example).
├── index.js      # JavaScript logic for dynamic interactions.
└── README.md     # Project documentation.
```

## How to Run

1. Clone or download the repository to your local machine.
2. Open the `index.html` file in any modern web browser.

## Technologies Used

- **HTML5**: For the structure of the application.
- **CSS3**: For styling the user interface.
- **JavaScript**: For adding interactivity.
## Code Explanation

### HTML (`index.html`)
- Contains the layout for the shopping list.
- Includes placeholders for input, buttons, and the list of items.

### CSS (`style.css`)
- Provides styles for the background, list items, and buttons.
- Ensures a visually appealing and user-friendly design.

### JavaScript (`index.js`)
- Handles the core functionality:
  - Adding items to the list.
  - Marking items as purchased.
  - Removing individual items.
  - Clearing all items from the list.

## Future Enhancements

1. **Persistence:**
   - Save the list to local storage so it persists across page reloads.
2. **Categories:**
   - Allow users to group items into categories.
3. **Search/Filter:**
   - Add functionality to search or filter items in the list.
