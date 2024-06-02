document.addEventListener('DOMContentLoaded', () => {
  const uploadForm = document.getElementById('uploadForm');
  const accountForm = document.getElementById('accountForm');
  const musicGallery = document.querySelector('.music-gallery .grid');

  uploadForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(uploadForm);
    const response = await fetch('/upload', {
      method: 'POST',
      body: formData,
    });
    const result = await response.text();
    alert(result);
  });

  accountForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(accountForm);
    const response = await fetch('/account', {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: { 'Content-Type': 'application/json' },
    });
    const result = await response.text();
    alert(result);
  });

  async function loadMusicGallery() {
    const response = await fetch('/music');
    const musicList = await response.json();

    musicList.forEach(music => {
      const musicItem = document.createElement('div');
      musicItem.classList.add('music-item');
      
      const coverImage = document.createElement('img');
      coverImage.src = music.coverPath;
      coverImage.alt = `Albüm Kapak: ${music.title}`;
      
      const musicInfo = document.createElement('div');
      musicInfo.classList.add('music-info');
      
      const title = document.createElement('h3');
      title.textContent = music.title;
      
      const audio = document.createElement('audio');
      audio.controls = true;
      const source = document.createElement('source');
      source.src = music.musicPath;
      source.type = 'audio/mpeg';
      audio.appendChild(source);
      
      musicInfo.appendChild(title);
      musicInfo.appendChild(audio);
      musicItem.appendChild(coverImage);
      musicItem.appendChild(musicInfo);
      
      musicGallery.appendChild(musicItem);
    });
  }

  loadMusicGallery();
});
