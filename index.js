document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();

  const messageInput = document.querySelector('#message-input');
  const linkInput = document.querySelector('#link-input');

  const encrypted = btoa(messageInput.value);

  linkInput.value = `${window.location}#${encrypted}`;
  linkInput.select();
  linkInput.setSelectionRange(0, 9999); // for mobile devices
  document.execCommand('copy');
});
