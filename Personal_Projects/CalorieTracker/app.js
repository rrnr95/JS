// Storage Controller

//App Controller 
const App = (function (ItemCtrl, UICtrl) {
  
  // Load event listeners
  const loadEventListeners = function() {
    // Get UI Selectors
    const UISelectors = UICtrl.getSelectors();

    // Add Item event
    document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);

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


  // Public methods
  return {
    init: function() {
      console.log('init...');
      
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