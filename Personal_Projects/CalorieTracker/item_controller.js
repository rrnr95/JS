// Item Controller
const ItemCtrl = (function(){
  // Item Constructor
  class Item {
    constructor(id, name, calories) {
      this.id = id;
      this.name = name;
      this.calories = calories;
    }
  }

  // Data Structure / State
  const data = {
    items: StorageCtrl.getItemsFromStorage(),
    currentItem: null,
    totalCalories: 0
  }

  // Public methods
  return {
    getItems: function(){
      console.log('ItemCtrl: getItems -> ', data.items);
      return data.items;
    },

    updateDataItems: function() {
      data.items = StorageCtrl.getItemsFromStorage();
      console.log('ItemCtrl: updateDataItems -> ', data.items);
    },

    addItem: function(name, calories){
      let ID;
      // Create ID
      if(data.items.length > 0){
        ID = data.items[data.items.length - 1].id + 1;
      } else {
        ID = 0;
      }

      // Calories to number
      calories = parseInt(calories);

      // Create new item
      newItem = new Item(ID, name, calories);

      // Add to items array
      data.items.push(newItem);
      console.log('ItemCtrl: addItem -> ', newItem);
      console.log('ItemCtrl: data.items -> ', data.items);

      return newItem;
    },

    getItemById: function(id){
      let found = null;
      // Loop through items
      data.items.forEach(function(item){
        if(item.id === id){
          found = item;
        }
      });
      console.log('ItemCtrl: getItemByID -> ', found);
      return found;
    },

    updateItem: function(name, calories){
      // Calories to number
      calories = parseInt(calories);

      let found = null;

      data.items.forEach(function(item){
        if(item.id === data.currentItem.id){
          item.name = name;
          item.calories = calories;
          found = item;
        }
      });
      
      console.log('ItemCtrl: Updated ->', found);
      return found;
    },

    deleteItem: function(id){
      // Get ids
      const ids = data.items.map(function(item){
        return item.id;
      });

      // Get index
      const index = ids.indexOf(id);
      
      // Remove item
      data.items.splice(index, 1);
    },

    clearAllItems: function(){
      data.items = [];
      console.log('ItemCtrl: clearAllItems -> ', data.items);
    },

    setCurrentItem: function(item){
      data.currentItem = item;
      console.log('ItemCtrl: Setting Current Item: ', data.currentItem);
    },

    getCurrentItem: function(){
      console.log('ItemCtrl: Accessing Current Item: ', data.currentItem);
      return data.currentItem;
    },

    getTotalCalories: function(){
      let total = 0;

      // Loop through items and add cals
      data.items.forEach(function(item){
        total += item.calories;
      });

      // Set total cal in data structure
      data.totalCalories = total;

      // Return total
      return data.totalCalories;
    },
    
    logData: function(){
      return data;
    }
  }
})();


