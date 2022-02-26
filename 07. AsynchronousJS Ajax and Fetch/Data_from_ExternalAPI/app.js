document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  
  const number = document.getElementById('number').value;


  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function() {
    if(this.status === 200) {
      const response = JSON.parse(this.responseText);

      let output = '';

      if(response.type === 'success'){

        response.value.forEach(function(element) {
          output += `<li>${element.joke}</li>`;
        });
        
        const jokesUL = document.querySelector('.jokes');
        jokesUL.innerHTML = output;

      } else {
        output = 'Something went wrong';
      }

      // console.log(output);
    }
  };

  xhr.send();

  // console.log(response);
  e.preventDefault();
}