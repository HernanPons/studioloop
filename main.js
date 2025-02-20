document.getElementById("contact-form").addEventListener("submit", function(event) {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        event.preventDefault(); // Evita que el formulario se envíe si falta algún campo
    } else {
        alert("Message sent successfully!");
        this.reset(); // Limpia el formulario
    }
});
