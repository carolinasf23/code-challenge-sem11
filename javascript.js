document.getElementById("registroForm").addEventListener("submit", function (event) {
    event.preventDefault(); 

    // Obtiene los valores del formulario.
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const fechaNacimiento = document.getElementById("fecha_nacimiento").value;

    const formData = {
        nombre: nombre,
        apellido: apellido,
        fechaNacimiento: fechaNacimiento,
    };

     
    fetch ("https://jsonplaceholder.typicode.com/users") {
        method:"POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        }
    }
    .then((response) => response.json())
    .then (responseData) => {
        console.log ("Respuesta servidor",data)
    }