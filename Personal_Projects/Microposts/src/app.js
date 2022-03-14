import {http} from './http';
import {ui} from './ui';

// Get posts on DOM load
document.addEventListener('DOMContentLoaded', getPosts);

// Listen for add post
document.querySelector('.post-submit').addEventListener('click', submitPost);

// Listen for delete post
document.querySelector('#posts').addEventListener('click', deletePost);

// Listen for edit state
document.querySelector('#posts').addEventListener('click', enableEdit);

// Listen for cancel edit
document.querySelector('.card-form').addEventListener('click', cancelEdit);

function getPosts() {
  http.get('http://localhost:3000/posts')
    .then(data => ui.showPosts(data))
    .catch(error => console.log(error));
}

function submitPost() {
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;
  const id = document.querySelector('#id').value;


  // Validate input
  if (title === '' || body === '') {
    ui.showAlert('Please fill in all fields', 'alert alert-danger');
    return;
  }

  const data = {
    title,
    body
  };
    
  // Check for hidden id. If it exists it means it's and edit submit
  if (id === '') {
    // Create Post
    http.post('http://localhost:3000/posts', data)
    .then(data => {
      ui.showAlert('Post added', 'alert alert-success');
      ui.clearFields();
      getPosts();
    })
    .catch(error => console.log(error));
  } else {
    // Update Post
    http.put(`http://localhost:3000/posts/${id}`, data)
    .then(data => {
      ui.showAlert('Post updated', 'alert alert-success');
      ui.clearFields();
      ui.changeFormState('add');
      getPosts();
    })
    .catch(error => console.log(error));
  }  
}

// Delete Post
function deletePost(e) {

  if (e.target.parentNode.classList.contains('delete')) {
    const id = e.target.parentNode.dataset.id;
    if (confirm('Are you sure?')) {
      http.delete(`http://localhost:3000/posts/${id}`)
        .then(data => {
          ui.showAlert('Post removed', 'alert alert-success');
          getPosts(); 
        })
        .catch(error => console.log(error));
    }
  }
  e.preventDefault();
}

function enableEdit(e){
  if(e.target.parentNode.classList.contains('edit')) {
    const parent = e.target.parentElement;
    const postId = parent.dataset.id;

    const postBody = parent.previousElementSibling;
    const postTitle = postBody.previousElementSibling;

    const post = {
      id: postId,
      title: postTitle.textContent,
      body: postBody.textContent
    }
    console.log(post);

    // Fill form with current post
    ui.fillForm(post);
  }

  e.preventDefault();
}

function cancelEdit(e) {
  if (e.target.classList.contains('post-cancel')) {
    ui.changeFormState('add');
    ui.clearFields();
  };
  e.preventDefault();
}



