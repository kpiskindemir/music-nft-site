document.addEventListener('DOMContentLoaded', () => {
  const accountForm = document.getElementById('accountForm');

  accountForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // Hesap oluşturma ve cüzdan bağlama işlemleri burada yapılacak
    alert('Hesap oluşturuldu ve cüzdan bağlandı!');
  });
});
