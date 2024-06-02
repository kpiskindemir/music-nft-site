document.addEventListener('DOMContentLoaded', () => {
  const accountForm = document.getElementById('accountForm');

  accountForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Account created and wallet connected!');
  });

  document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', () => {
      const price = button.getAttribute('data-price');
      const title = button.getAttribute('data-title');
      alert(`You are about to buy ${title} for ${price} ETH!`);
    });
  });
});
