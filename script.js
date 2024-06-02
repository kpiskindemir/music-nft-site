document.addEventListener('DOMContentLoaded', () => {
  const uploadForm = document.getElementById('uploadForm');
  const accountForm = document.getElementById('accountForm');

  uploadForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // NFT oluşturma işlemleri burada yapılacak
    alert('NFT Oluşturuldu!');
  });

  accountForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // Hesap oluşturma ve cüzdan bağlama işlemleri burada yapılacak
    alert('Hesap oluşturuldu ve cüzdan bağlandı!');
  });
});

