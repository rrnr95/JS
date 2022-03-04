// Item Controller
const ItemCtrl = (function () {
  // Item Constructor
  const Item = function (id, name, cals) {
    this.id = id;
    this.name = name;
    this.cals = cals;
  }

  // Data Structure / State
  const data = {
    items: [
      // {id: 0, name: 'Steak', cals: 300},
      // {id: 1, name: 'Cookie', cals: 200},
      // {id: 2, name: 'Eggs', cals: 150},
    ],
    currentItem: null,
    totalCals: 0
  }

  // Public methods
  return {
    getItems: function() {
      return data.items;
    },

    getTotalCals: function() {
      let total = 0;

      // Loop through items and add calories to total calories
      data.items.forEach(function(item) {
        total += item.cals;
      })

      // Set total calories in data structure
      data.totalCals = total;

      return data.totalCals;
    },

    getItemByID(id){
      let match;
      // Loop through the items
      data.items.forEach(function(item) {
        if(item.id === id) {
          match = item;
        }
      })
      return match;
    },

    setCurrentItem(item){
      data.currentItem = item;
    },

    getCurrentItem(){
      return data.currentItem;
    },

    addItem: function(name, cals) {
    
      // Create auto-incremented ID
      let ID;

      if (data.items.length > 0) {
        //ID = data.items[data.items.length - 1].id + 1;
        ID = data.items.length;
      } else {
        ID = 0;
      }

      // Calories to number
      cals = parseInt(cals);

      // Create new item
      newItem = new Item(ID, name, cals); 

      // Add to items array
      data.items.push(newItem);

      return newItem;
    },

    updateItem(name, cals) {
      data.currentItem.name = name;
      data.currentItem.cals = parseInt(cals);

      return data.currentItem;
    },

    logData: function () {
      return data;
    }
  }
})();