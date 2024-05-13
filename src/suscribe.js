const form = document.querySelector('form');
const input = document.getElementById('emailInput');

function sendEmail() {
  const emailaddress = `${input.value}`;
  Email.send({
    Host: 'smtp.elasticemail.com',
    Username: 'ruggeri.telecomunicaciones@gmail.com',
    Password: '8246E6D32DE4F94769BA445ECCA285F246EC',
    To: 'ruggeri.telecomunicaciones@gmail.com',
    From: 'ruggeri.telecomunicaciones@gmail.com',
    Subject: 'Nueva Suscripción',
    Body: emailaddress,
  }).then(() => alert('Su correo ha sido enviado con éxito'));
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  sendEmail();
});
