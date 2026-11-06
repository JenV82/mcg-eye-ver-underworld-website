
document.addEventListener("DOMContentLoaded", function () {
    // Update the copyright year automatically.
    const yearElements = document.querySelectorAll(".current-year");
    const currentYear = new Date().getFullYear();

    yearElements.forEach(function (element) {
        element.textContent = currentYear;
    });

    // Handle the demo contact form.
    const contactForm = document.querySelector("#contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const formMessage = document.querySelector("#form-feedback");

            if (formMessage) {
                formMessage.textContent =
                    "Thanks for reaching out! This is a demo form and your message has not been sent.";
            }

            contactForm.reset();
        });
    }
});
