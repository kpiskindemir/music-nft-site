document.addEventListener('DOMContentLoaded', () => {
  const uploadForm = document.getElementById('uploadForm');
  const accountForm = document.getElementById('accountForm');
  const musicFileInput = document.getElementById('musicFile');
  const coverImageInput = document.getElementById('coverImage');
  const uploadMusicButton = document.getElementById('uploadMusicButton');

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

  window.uploadMusic = function() {
    musicFileInput.click();
  };

  coverImageInput.addEventListener('change', () => {
    if (coverImageInput.files.length > 0) {
      uploadMusicButton.textContent = 'Upload Music File';
      uploadMusicButton.style.display = 'block';
    }
  });

  musicFileInput.addEventListener('change', () => {
    if (musicFileInput.files.length > 0) {
      uploadMusicButton.style.display = 'none';
    }
  });
});
