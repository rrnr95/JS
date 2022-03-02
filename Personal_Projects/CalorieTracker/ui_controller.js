// UI Controller
const UICtrl = (function () {
  
  const UISelectors = {
    itemList: '#item-list',
    addBtn: '.add-btn',
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

    hideList: function() {
      document.querySelector(UISelectors.itemList).getElementsByClassName.display = 'none';
    },

    showList: function() {
      document.querySelector(UISelectors.itemList).getElementsByClassName.display = 'block';
    },

    getSelectors: function() {
      return UISelectors;
    }
    
  }
})();