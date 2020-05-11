(() => {
  const hash = window.location.hash;
  const message = atob(hash.replace('#', ''));

  if (message) {
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');

    document.querySelector('h1').innerHTML = message;
  }

  document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();

    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');

    const messageInput = document.querySelector('#message-input');
    const linkInput = document.querySelector('#link-input');

    const encrypted = btoa(messageInput.value);

    linkInput.value = `${window.location}#${encrypted}`;
    linkInput.select();
    linkInput.setSelectionRange(0, 9999); // for mobile devices
    document.execCommand('copy');
  });
})();
