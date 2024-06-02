document.addEventListener('DOMContentLoaded', () => {
  const uploadForm = document.getElementById('uploadForm');
  const accountForm = document.getElementById('accountForm');
  const musicFileInput = document.getElementById('musicFile');
  const coverImageInput = document.getElementById('coverImage');
  const uploadMusicButton = document.getElementById('uploadMusicButton');
  const uploadCoverButton = document.getElementById('uploadCoverButton');

  uploadForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(uploadForm);

    fetch('/upload', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      alert(data.message);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });

  accountForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(accountForm);

    fetch('/account', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      alert(data.message);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });

  uploadMusicButton.addEventListener('click', () => {
    musicFileInput.click();
  });

  uploadCoverButton.addEventListener('click', () => {
    coverImageInput.click();
  });
});
