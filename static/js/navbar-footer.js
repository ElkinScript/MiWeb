document.addEventListener("DOMContentLoaded", function () {
    fetch("/html/index.html")
        .then(response => response.text())
        .then(data => {
            // Crear un objeto DOM temporal a partir del contenido de index.html
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            
            // Extraer el navbar y el footer del documento
            const navbar = doc.querySelector(".navbar");
            const footer = doc.querySelector(".pie-pagina");

            // Insertar navbar solo si no existe en la página
            if (!document.querySelector(".navbar") && navbar) {
                document.body.insertAdjacentHTML("afterbegin", navbar.outerHTML);
            }

            // Insertar footer solo si no existe en la página
            if (!document.querySelector(".footer") && footer) {
                document.body.insertAdjacentHTML("beforeend", footer.outerHTML);
            }
        })
        .catch(error => console.error("Error cargando el navbar y footer:", error));
});
