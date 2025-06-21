// Get references to the input fields and message display element
let nombre = document.getElementById('nombre');
let edad = document.getElementById('edad');
let message = document.getElementById('message');
let boton = document.getElementById('boton')

// Add a click event listener to the button
boton.addEventListener('click', function () {
    // Get the values from the input fields
    let nombre = document.getElementById('nombre').value;
    let edad = document.getElementById('edad').value;       

    // Check if any field is empty
    if (nombre === '' || edad === '') {
        // Show a message if fields are empty
        mensaje.textContent = 'Por favor, llena todos los campos.';
        return;
    }

    // Convert age to a number
    edad = Number(edad);

    // Check if the user is an adult or minor and display the appropriate message
    if (edad >= 18) {
        message.textContent ='Hola ' + nombre + ' , eres mayor de edad. Preparate para grandes oportunidades en el mundo de la programación!';
    } else {
        message.textContent ='Hola ' + nombre + ' , eres menor de edad. Sigue aprendiendo y disfrutando del codigo!';
    }
});