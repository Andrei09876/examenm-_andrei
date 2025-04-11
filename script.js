document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const message = document.getElementById('message');
  
    if (user === 'admin' && pass === 'password') {
      message.textContent = 'Autentificare reușită!';
      message.classList.remove('red');
      message.classList.add('green');
    } else {
      message.textContent = 'Utilizator sau parolă greșită!';
      message.classList.remove('green');
      message.classList.add('red');
    }
  });
  