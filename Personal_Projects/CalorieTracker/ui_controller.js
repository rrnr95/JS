// UI Controller
const UICtrl = (function () {
  
  const UISelectors = {
    itemList: '#item-list',
    addBtn: '.add-btn',
    updateBtn: '.update-btn',
    deleteBtn: '.delete-btn',
    backBtn: '.back-btn',
    itemNameInput: '#item-name',
    itemCalsInput: '#item-calories',
    totalCals: '.total-calories'
  }

  // Public methods
  return {
    populateItemList(items){

      let html = '';

      items.forEach(function(item) {
        html += `
          <li class="collection-item" id="item-${item.id}">
            <strong>${item.name}: </strong> <em>${item.cals} Calories</em>
            <a href="#" class="secondary-content">
              <i class="edit-item fa fa-pencil"></i>
            </a>
          </li>
        `;
      })

      // Insert list items
      const ul = document.querySelector(UISelectors.itemList);
      ul.innerHTML = html;
    },

    getItemInput: function() {
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        cals: document.querySelector(UISelectors.itemCalsInput).value
      }
    },

    addListItem(item){
      // Show list
      this.showList();

      // Create li element
      const li = document.createElement('li')
      // Add class
      li.className = 'collection-item'
      // Add ID
      li.id = `item-${item.id}`;
      // Add HTML
      li.innerHTML = `
        <strong>${item.name}: </strong> <em>${item.cals} Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      `;

      // Insert item
      document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
    },

    updateTotalCals: function(totalCals) {
      document.querySelector(UISelectors.totalCals).textContent = totalCals;
    },

    clearInput: function() {
      document.querySelector(UISelectors.itemNameInput).value = '';
      document.querySelector(UISelectors.itemCalsInput).value = '';
    },

    // addItemToForm: function(item) {
    //   document.querySelector(UISelectors.itemNameInput).value = item.name;
    //   document.querySelector(UISelectors.itemCalsInput).value = item.cals;
    // },

    addCurrentItemToForm: function() {
      document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCUrrentItem().name;
      document.querySelector(UISelectors.itemCalsInput).value = ItemCtrl.getCUrrentItem().cals;
      UICtrl.showEditState();
    },

    hideList: function() {
      document.querySelector(UISelectors.itemList).style.display = 'none';
    },

    showList: function() {
      document.querySelector(UISelectors.itemList).style.display = 'block';
    },

    clearEditState: function() {
      UICtrl.clearInput();
      document.querySelector(UISelectors.updateBtn).style.display = 'none';
      document.querySelector(UISelectors.deleteBtn).style.display = 'none';
      document.querySelector(UISelectors.backBtn).style.display = 'none';
      document.querySelector(UISelectors.addBtn).style.display = 'inline';
    },

    showEditState: function name(params) {
      document.querySelector(UISelectors.updateBtn).style.display = 'inline';
      document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
      document.querySelector(UISelectors.backBtn).style.display = 'inline';
      document.querySelector(UISelectors.addBtn).style.display = 'none';
    },

    getSelectors: function() {
      return UISelectors;
    }
    
  }
})();