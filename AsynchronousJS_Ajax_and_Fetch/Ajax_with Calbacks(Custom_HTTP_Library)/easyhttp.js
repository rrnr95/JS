// ES5 ORIENTED

function EasyHTTP() {
  this.http = new XMLHttpRequest();

}

// Make an http GET request
EasyHTTP.prototype.get = function(url, callback){
  this.http.open('GET', url, true);

  // Using 'self' enables the possibility to pass the  
  // EasyHTTP object into the scope of the Callback Function
  let self = this;

  this.http.onload = function() {
    if(self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback('Error: ' + self.http.status, null);
    }
  }

  this.http.send();
}

// Make an http POST request
EasyHTTP.prototype.post = function(url, data, callback){
  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;

  this.http.onload = function() {    
    callback(null, self.http.responseText);
  }

  this.http.send(JSON.stringify(data));
}

// Make an http PUT request
EasyHTTP.prototype.put = function(url, data, callback){
  this.http.open('PUT', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;

  this.http.onload = function() {    
    callback(null, self.http.responseText);
  }

  this.http.send(JSON.stringify(data));
}

// Make an http DELETE request
EasyHTTP.prototype.delete = function(url, callback) {
  this.http.open('DELETE', url, true);
  //this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;

  this.http.onload = function() {
    if(self.http.status === 200) {
      callback(null, 'Post Deleted');
    } else {
      callback('Error: ' + self.http.status, null);
    }
  }

  this.http.send();
}