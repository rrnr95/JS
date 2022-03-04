//App Controller 
const App = (function (ItemCtrl, UICtrl) {
  
  // Load event listeners
  const loadEventListeners = function() {
    // Get UI Selectors
    const UISelectors = UICtrl.getSelectors();

    // Add Item event
    document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);

    // Disable submit on <ENTER>
    document.addEventListener('keypress', function(e) {
      if (e.keycode === 13) {
        e.preventDefault();
        return false;
      }
    });


    // Edit icon click event
    document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick);

    // Update button submit event
    document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);

  }

  // Add item submit
  const itemAddSubmit = function(e) {

    // Get form input from UI Controller
    const input = UICtrl.getItemInput();

    // Check for both inputs
    if (input.name !== '' & input.cals !== '') {
      
      // Add item to ItemCtrl list
      const newItem = ItemCtrl.addItem(input.name, input.cals);

      // Add item to UI list
      // UICtrl.populateItemList(ItemCtrl.getItems());
      UICtrl.addListItem(newItem);

      // Get total calories
      const totalCals = ItemCtrl.getTotalCals();

      // Show total calories in UI
      UICtrl.updateTotalCals(totalCals);

      // Clear fields
      UICtrl.clearInput();

    }
    e.preventDefault();
  }

  // Click to edit item
  const itemEditClick = function(e) {

    if(e.target.classList.contains('edit-item')) {
      // Get list item id in format 'item-x'
      const unformatedID = e.target.parentNode.parentNode.id;
      
      // Break ID into an array 'item-x' => [(item), (x)]
      const itemIDArr = unformatedID.split('-');

      // Get actual item ID
      const itemID = parseInt(itemIDArr[1]);

      // Get item by the id
      const itemToEdit = ItemCtrl.getItemByID(itemID);

      // Set current item
      ItemCtrl.setCurrentItem(itemToEdit);

      // // Add item to form
      // UICtrl.addItemToForm();

      // Add current item to form
      UICtrl.addCurrentItemToForm();
      
    }
    e.preventDefault();
  }

  // Update item submit
  const itemUpdateSubmit = function(e) {
    // Get edit input
    const input = UICtrl.getItemInput();

    // Update in ItemCtrl
    const updatedItem = ItemCtrl.updateItem(input.name, input.cals);

    // Update in UICtrl
    UICtrl.updateListItem(updatedItem);    

    // Get total calories
    const totalCals = ItemCtrl.getTotalCals();

    // Show total calories in UI
    UICtrl.updateTotalCals(totalCals);

    UICtrl.clearEditState();

    e.preventDefault();
  }


  // Public methods
  return {
    init: function() {
      console.log('init...');

      // Clear edit state/ set initial state
      UICtrl.clearEditState();
      
      // Fetch items from data structure
      const items = ItemCtrl.getItems();

      // Check if any items
      if (items.length === 0) {
        UICtrl.hideList();
      } else {
        // Populate list with items
      UICtrl.populateItemList(items);
      }

      // Get total calories
      const totalCals = ItemCtrl.getTotalCals();

      // Show total calories in UI
      UICtrl.updateTotalCals(totalCals);

      // Load event listeners
      loadEventListeners();
    }
  }

})(ItemCtrl, UICtrl);


// Initialize App
App.init();