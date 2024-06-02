document.addEventListener('DOMContentLoaded', () => {
  const uploadMusicForm = document.getElementById('uploadMusicForm');
  const uploadCoverForm = document.getElementById('uploadCoverForm');
  const accountForm = document.getElementById('accountForm');

  uploadMusicForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // Müzik NFT oluşturma işlemleri burada yapılacak
    alert('Müzik NFT Oluşturuldu!');
  });

  uploadCoverForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // Albüm Kapağı NFT oluşturma işlemleri burada yapılacak
    alert('Albüm Kapağı NFT Oluşturuldu!');
  });

  accountForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // Hesap oluşturma ve cüzdan bağlama işlemleri burada yapılacak
    alert('Hesap oluşturuldu ve cüzdan bağlandı!');
  });
});
