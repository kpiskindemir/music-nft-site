document.addEventListener('DOMContentLoaded', () => {
  const uploadForm = document.getElementById('uploadForm');
  const accountForm = document.getElementById('accountForm');
  let isAlbumCover = true;

  uploadForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // NFT creation logic here
    alert('NFT Created!');
  });

  accountForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // Account creation and wallet connection logic here
    alert('Account created and wallet connected!');
  });

  window.toggleUpload = function() {
    const uploadButton = document.getElementById('uploadButton');
    const musicFileInput = document.getElementById('musicFile');
    const coverImageInput = document.getElementById('coverImage');

    if (isAlbumCover) {
      uploadButton.textContent = 'Upload Music File';
      coverImageInput.style.display = 'block';
      musicFileInput.style.display = 'none';
    } else {
      uploadButton.textContent = 'Upload Album Cover';
      coverImageInput.style.display = 'none';
      musicFileInput.style.display = 'block';
    }

    isAlbumCover = !isAlbumCover;
  };
});

