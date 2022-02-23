// Search input
const search = document.getElementById('searchUser');

// Init GitHub
const github = new Github;

// Init UI
const ui = new UI;



// Search input event listener
search.addEventListener('keyup', (e) => {
  
  //Get input text
  let input = e.target.value;

  if(input !== ''){
    
    // Make HTTP request'
    github.getUser(input)
    .then(data => {
      if (data.profile.message === 'Not Fount') {
        // Show alert TODO

      } else {
        // Show profile TODO
        ui.showProfile(data.profile);
        
        //console.log(data);      
      }
    })
  } else {
    // Clear profile

  }



  

});