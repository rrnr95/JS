const http = new EasyHTTP();

// // Get posts
// http.get('https://jsonplaceholder.typicode.com/posts', function (error, posts) {
  
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(posts);
//   }

// });

// // GET single post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function (error, post) {
  
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(post);
//   }

// });

// Create data
const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
};

// // create post request
// http.post('https://jsonplaceholder.typicode.com/posts', data, function (error, post) {

//   if (error) {
//     console.log(error);
//   } else {
//     console.log(post);
//   }

// });

// // Update post
// http.put('https://jsonplaceholder.typicode.com/posts/5', data, function(error, post){

//   if (error) {
//     console.log(error);
//   } else {
//     console.log(post);
//   }

// });

// Delete a post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function (error, response) {
  
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }

});