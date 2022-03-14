class UI {
  constructor() {
    this.post = document.querySelector('#posts');
    this.titleInput = document.querySelector('#title');
    this.bodyInput = document.querySelector('#body');
    this.idInput = document.querySelector('#id');
    this.postSubmit = document.querySelector('.post-submit');
    this.formState = 'add';
  }

  showPosts(posts) {
    let output = '';

    posts.forEach( (post) => {
      output += `
      <div class="card mb-3">
        <div class="card-body">
          <h4 class="card-title">${post.title}</h4>
          <p class="card-text">${post.body}</p>
          <a href="#" class="edit card-link" data-id="${post.id}">
            <i class="fa fa-pencil"></i>
          </a>

          <a href="#" class="delete card-link" data-id="${post.id}">
          <i class="fa fa-remove"></i>
        </a>
        </div>
      </div>
      `;
    });
    this.post.innerHTML = output;
  }

  showAlert(msg, className) {
    this.clearAlert();

    // Create a div
    const div = document.createElement('div');
    // Add class
    div.className = className;
    // Add text
    div.appendChild(document.createTextNode(msg));
    // Get parent
    const container = document.querySelector('.postsContainer');
    // Get posts div
    const posts = document.querySelector('#posts');
    // Insert alert before the posts div
    container.insertBefore(div, posts);

    // Timeout
    setTimeout(() => {
      this.clearAlert();
      }
      ,3000);
  }

  clearAlert() {
    const currentAlert = document.querySelector('.alert');
    if (currentAlert) {
      currentAlert.remove();  
    }
  }

  clearFields() {
    this.titleInput.value = '';
    this.bodyInput.value = '';
  }

  // Fill form to edit
  fillForm(post) {
    this.titleInput.value = post.title;
    this.bodyInput.value = post.body;
    this.idInput.value = post.id;

    this.changeFormState('edit');
  }

  // Clear ID hidden value
  clearIdInput() {
    this.idInput.value = '';
  }

  changeFormState(state) {
    if(state === 'edit') {
      this.postSubmit.textContent = 'Update Post';
      this.postSubmit.className = 'post-submit btn btn-warning btw-block';

      // Create cancel button
      const cancelBtn = document.createElement('button');
      cancelBtn.className = 'post-cancel btn btn-danger btn-block';
      cancelBtn.appendChild(document.createTextNode('Cancel Edit'));

      // Get parent card
      const cardForm = document.querySelector('.card-form');
      // Get element to insert before
      const formEnd = document.querySelector('.form-end');
      // Inser cancel button
      cardForm.insertBefore(cancelBtn, formEnd);
    } else {
      this.postSubmit.textContent = 'Post It';
      this.postSubmit.className = 'post-submit btn btn-primary btw-block';
      // Remove cancel button if there is one
      if(document.querySelector('.post-cancel')) {
        document.querySelector('.post-cancel').remove();
      }

      // Clear ID from hidden field
      this.clearIdInput();
    }
  }

}

export const ui = new UI();