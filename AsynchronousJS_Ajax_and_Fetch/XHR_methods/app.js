document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // Create XHR object
  const xhr = new XMLHttpRequest();

  // OPEN METHOD
  xhr.open('GET', 'data.txt', true);

  // console.log('readyState: ', xhr.readyState);

  xhr.onload = function () {
    console.log('readyState: ', xhr.readyState);

    if(this.status === 200) {
      // console.log(this.responseText);
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  }

  // Optional - Used for spinners or loaders
  xhr.onprogress = function () {console.log('readyState: ', xhr.readyState);}

  // // Older syntax before the onload
  // xhr.onreadystatechange = function () {
  //   console.log('readyState: ', xhr.readyState);

  //   if(this.status === 200 && this.readyState === 4) {
  //     console.log(this.responseText);
  //   }
  // }

  xhr.onerror = function () {console.log('Request error.');}

  xhr.send();

  /* 
  HTTP Statuses
  200: "OK"
  403: "Forbidden"
  404: "Not Found"
  

  readyState Values
  0: request not initialized 
  1: server connection established
  2: request received 
  3: processing request 
  4: request finished and response is ready
  */
}