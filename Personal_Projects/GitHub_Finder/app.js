// Search input
const search = document.getElementById('searchUser');

// Init GitHub
const github = new Github;

// Init UI
const ui = new UI;



// Search input event listener
search.addEventListener('keyup', (e) => {
  
  if (e.key === 'Enter') {

    //Get input text
    let input = e.target.value;

    if(input !== ''){
      
      // Make HTTP request'
      github.getUser(input)
      .then(data => {
        
        if (data.profile.message === 'Not Found') {
          // Show alert
          ui.showAlert('User not found', 'alert alert-danger');
        } else {
          // Show profile
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);     
        }
      })
    } else {
      // Clear profile
      ui.clearProfile();
    }

  }
});