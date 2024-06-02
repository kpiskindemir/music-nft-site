document.addEventListener('DOMContentLoaded', () => {
  const accountForm = document.getElementById('accountForm');
  const commentForm = document.getElementById('commentForm');
  const commentsSection = document.getElementById('commentsSection');

  accountForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Account created and wallet connected!');
  });

  commentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('commentUsername').value;
    const comment = document.getElementById('commentText').value;

    const commentElement = document.createElement('div');
    commentElement.classList.add('comment');
    commentElement.innerHTML = `<strong>${username}:</strong> <p>${comment}</p>`;

    commentsSection.appendChild(commentElement);
    commentForm.reset();
  });

  document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', () => {
      const price = button.getAttribute('data-price');
      const title = button.getAttribute('data-title');
      alert(`You are about to buy ${title} for ${price} ETH!`);
    });
  });
});
