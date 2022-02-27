// Basic structure

// (function () {
//   // Declare private vars and functions

//   return {
//     // Declare public vars and functions    
//   }
// })();

// // STANDARD MODULE pattern
// const UICtrl = (function () {
//   let _text = 'Hello World';

//   const changeText = function () {
//     const element = document.querySelector('h1');
//     element.textContent = _text;
//   }

//   return {
//     callChangeText: function (){
//       changeText();
//       console.log(_text);
//     }
//   }
// })();

// UICtrl.callChangeText();

// // Errors
// UICtrl.changeText();
// console.log(UICtrl.text);


// // REVEALING MODULE pattern
// const ItemCtrl = (function() {
//   let _data = [];

//   function add(item) {
//     _data.push(item);
//     console.log('Item Added');
//   }

//   function get(id) {
//     return _data.find(item => {
//       return item.id === id;
//     });
//   }

//   return {
//     add: add,
//     get: get
//   }

// })();

// ItemCtrl.add({id: 1, name: 'Renato Rosa'});
// ItemCtrl.add({id: 2, name: 'Zé Nando'});

// console.log(ItemCtrl.get(1));
