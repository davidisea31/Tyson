
                document.addEventListener("DOMContentLoaded", function () {
                    const formulario = document.getElementById("formulario-comentario");
            
                    formulario.addEventListener("submit", function (event) {
                        event.preventDefault();
            
                        // Aquí puedes agregar código para validar los campos del formulario si es necesario
            
                        // Simulación de envío AJAX (reemplazar con la lógica real)
                        setTimeout(function () {
                            alert("Comentario enviado con éxito"); // Mostrar un mensaje de éxito
                            formulario.reset(); // Limpiar el formulario
                        }, 1000);
                    });
                });
        

