// JavaScript Validation Library

// Configuration options
const showErrorMessages = true; // Set to true to show error messages, false to highlight with red outline only

// Function to validate form fields
function validateForm(event) {
    event.preventDefault(); // Prevent form submission initially
    const currentForm = event.target;

    console.log(currentForm);
    
    

    // Reset previous error messages and outlines
    clearErrorClass(currentForm);
    clearErrorMessages(currentForm);
    clearRedOutlines();

    // Select all input elements with class 'jn-input-wrap'
    const inputWraps = currentForm.querySelectorAll(".jn-input-wrap");

    let isValid = true;

    // Iterate over each input wrapper
    inputWraps.forEach((inputWrap) => {
        const input = inputWrap.querySelector("input, select, textarea");

        if (input) {
            let inputType;
            if (input.tagName == "SELECT" || input.tagName == "TEXTAREA") {
                inputType = input.tagName.toLowerCase();
            } else {
                inputType = input.getAttribute("type");
            }
            const value = input.value.trim();
            const errMsg = inputWrap.getAttribute('data-error');

            // Validate based on input type
            switch (inputType) {
                case "text":
                case "password":
                case "textarea":
                case "select":
                case "search": // Added 'search' type
                    if (value === "") {
                        if (showErrorMessages) {
                            if (errMsg !== null && errMsg !== '') {
                                appendError(inputWrap, errMsg);
                                return;
                            }
                            appendError(inputWrap, "This field is required.");
                        } else {
                            addRedOutline(input);
                        }
                        isValid = false;
                    }
                    break;
                case "email":
                    if (!isValidEmail(value)) {
                        if (showErrorMessages) {
                            appendError(
                                inputWrap,
                                "Please enter a valid email address."
                            );
                        } else {
                            addRedOutline(input);
                        }
                        isValid = false;
                    }
                    break;
                case "tel":
                    if (!isValidPhoneNumber(value)) {
                        if (showErrorMessages) {
                            appendError(
                                inputWrap,
                                "Please enter a valid phone number (10 digits only)."
                            );
                        } else {
                            addRedOutline(input);
                        }
                        isValid = false;
                    }
                    break;
                case "url":
                    if (!isValidURL(value)) {
                        if (showErrorMessages) {
                            appendError(inputWrap, "Please enter a valid URL.");
                        } else {
                            addRedOutline(input);
                        }
                        isValid = false;
                    }
                    break;
                case "number":
                    if (!isValidNumber(value)) {
                        if (showErrorMessages) {
                            appendError(inputWrap, "Please enter a valid number.");
                        } else {
                            addRedOutline(input);
                        }
                        isValid = false;
                    }
                    break;
                case "file":
                    const file = input.files[0];
                    if (!isValidFile(file)) {
                        if (showErrorMessages) {
                            appendError(
                                inputWrap,
                                "Please upload a valid file (PNG, JPG, GIF, PDF)."
                            );
                        } else {
                            addRedOutline(input);
                        }
                        isValid = false;
                    }
                    break;
                case "date":
                case "time":
                    if (value === "") {
                        if (showErrorMessages) {
                            appendError(inputWrap, "This field is required.");
                        } else {
                            addRedOutline(input);
                        }
                        isValid = false;
                    }
                    break;
                case "radio":
                case "checkbox":

                    const name = input.getAttribute("name");
                    const group = document.querySelectorAll(`input[name="${name}"]`);
                    const isChecked = Array.from(group).some((radio) => radio.checked);

                    if (!isChecked) {
                        if (showErrorMessages) {
                            appendError(inputWrap, "This option must be checked.");
                        } else {
                            group.forEach(radio => addRedOutline(radio));
                        }
                        isValid = false;
                    }
                    break;
                default:
                    break;
            }
        }
    });

    // If form is valid, submit it
    if (isValid) {
        event.target.submit();
    }
}


// Function to append error message to input wrapper
function appendError(inputWrap, errorMessageText) {
    const errorMessage = document.createElement("div");
    inputWrap.classList.add("error-wrap");
    errorMessage.classList.add("error-message");
    errorMessage.textContent = errorMessageText;
    inputWrap.appendChild(errorMessage);
}

// Function to clear error Class from Input Wrap
function clearErrorClass(currentForm) {
    currentForm.querySelectorAll(".jn-input-wrap").forEach((element) => {
        element.classList.remove("error-wrap")
    }); /// need to work here 
}

// Function to clear error Class Messages
function clearErrorMessages(currentForm) {
    const errorMessages = currentForm.querySelectorAll(".jn-input-wrap .error-message");
    errorMessages.forEach((errorMessage) => {
        errorMessage.remove();
    });
}

// Function to add red outline to input
function addRedOutline(input) {
    // input.classList.add("error-outline");
    input.style.setProperty("outline", "1px solid #ff2200", "important");
}

// Function to clear red outlines
function clearRedOutlines() {
    const inputs = document.querySelectorAll(
        ".jn-input-wrap input, .jn-input-wrap select, .jn-input-wrap textarea"
    );
    inputs.forEach((input) => {
        input.classList.remove("error-outline");
    });
}

// Validation functions for specific input types
function isValidEmail(email) {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhoneNumber(phone) {
    // Regular expression to match 10 digit phone number
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
}

function isValidURL(url) {
    // Regular expression for basic URL validation
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlRegex.test(url);
}

function isValidNumber(number) {
    // Regular expression for integer number validation
    const numberRegex = /^\d+$/;
    return numberRegex.test(number);
}

function isValidFile(file) {
    // Check file type (example checks for PNG, JPG, GIF, PDF)
    if (!file) return false;
    const fileType = file.type;
    return (
        fileType === "image/png" ||
        fileType === "image/jpeg" ||
        fileType === "image/gif" ||
        fileType === "application/pdf"
    );
}

// Attach validation function to form submit event
const forms = document.querySelectorAll("form");

forms.forEach(form => {
    form.addEventListener("submit", validateForm);
});

