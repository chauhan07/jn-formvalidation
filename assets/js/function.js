console.log(
    "%cWebsite Built by Aditya Chauhan",
    "background: #0a383f; color: #ffffff; display: block;padding:5px 15px;border-radius:7px"
);

// JavaScript to add class on scroll
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
});

// Create an instance with nested objects
const jn_validation = new JnFormValidation({
    showErrorMessages: true,
    formClass: '.jnForm',
});