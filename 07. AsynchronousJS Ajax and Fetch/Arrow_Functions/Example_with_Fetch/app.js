document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJSON);

document.getElementById('button3').addEventListener('click', getExternal);

// Get local txt file data
function getText() {
  fetch('test.txt')
    .then(response => response.text())
    .then(data => document.getElementById('output').innerHTML = data)
    .catch(err => console.log(err));

}

// Get local json file data
function getJSON() {
  fetch('posts.json')
    .then(response => response.json())  
    .then(data => {

      let output = '';

      data.forEach(function(entry) {
        output += `<li>${entry.title}</li>`;
      });

      document.getElementById('output').innerHTML = output;
    })  
    .catch(err => console.log(err));

}

// Get from external API
function getExternal() {
  fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(data => {

      let output = '';

      data.forEach(function(entry) {
        output += `<li>${entry.login}</li>`;
      });

      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));

}