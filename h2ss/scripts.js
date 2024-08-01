
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("shop-registration-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Perform any validation or processing here if needed

        // Redirect to the shops-directory.html page
        window.location.href = "shops-directory.html";
    });
});

