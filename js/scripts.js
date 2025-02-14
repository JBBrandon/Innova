document.addEventListener('DOMContentLoaded', function() {
    // Verifica que la ruta al navbar.html sea correcta
    fetch('/navbar.html')  // Ajusta la ruta dependiendo de la ubicación
        .then(response => response.text())
        .then(data => {
            // Asegúrate de que el navbar se inserte correctamente en el contenedor
            document.getElementById('navbar-container').innerHTML = data;
        })
        .catch(error => {
            console.error('Error al cargar la navbar:', error);
        });
});
