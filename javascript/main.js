/*
const mainTitle = document.getElementById( 'mainTitle');
const nameIpt = document.getElementById( 'nameIpt');
const formBtn = document.getElementById( 'formBtn');
const greeting = document.getElementById( 'greeting');
const feedbackAlert = document.getElementById( 'feedbackAlert');

formBtn.addEventListener( 'click',(evento) => {
    evento.preventDefault();
    if ( nameIpt.value === ''){
        feedbackAlert.style.display = 'block';
        greeting.innerText = '';
    } else{
        greeting.innerText = `¡Hola, ${nameIpt.value}!`;
        feedbackAlert.style.display = 'none';
    }
});
*/

const registroForm = document.getElementById('registroForm');
const nombreIpt = document.getElementById('nombreIpt');
const emailIpt = document.getElementById('emailIpt');
const edadIpt = document.getElementById('edadIpt');
const alertaNombre = document.getElementById('alertaNombre');
const alertaEmail = document.getElementById('alertaEmail');
const alertaEdad = document.getElementById('alertaEdad');
const limpiarBtn = document.getElementById('limpiarBtn');

registroForm.addEventListener('submit', (evento) => {
    evento.preventDefault();
    let isValid = true;

    const nombre = nombreIpt.value.trim();
    const email = emailIpt.value.trim();
    const edad = edadIpt.value.trim();

    const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]{3,}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const edadRegex = /^[1-9]\d*$/;

    if (!nombreRegex.test(nombre)) {
        alertaNombre.classList.remove('d-none');
        isValid = false;
    } else {
        alertaNombre.classList.add('d-none');
    }

    if (!emailRegex.test(email)) {
        alertaEmail.classList.remove('d-none');
        isValid = false;
    } else {
        alertaEmail.classList.add('d-none');
    }

    if (!edadRegex.test(edad)) {
        alertaEdad.classList.remove('d-none');
        isValid = false;
    } else {
        alertaEdad.classList.add('d-none');
    }

    if (isValid) {
        alert('¡Formulario enviado correctamente!');
        registroForm.reset();
    }
});

limpiarBtn.addEventListener('click', () => {
    registroForm.reset();
    alertaNombre.classList.add('d-none');
    alertaEmail.classList.add('d-none');
    alertaEdad.classList.add('d-none');
});

edadIpt.addEventListener('keydown', (evento) => {
    if (['e', 'E', '+', '-', '.'].includes(evento.key)) {
        evento.preventDefault();
    }
});
