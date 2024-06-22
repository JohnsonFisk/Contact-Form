document.getElementById('submitBtn').addEventListener('click', function (e) {
    e.preventDefault();

    const form = document.getElementById('caca');
    const queryTypeSelected = document.querySelector('input[name="queryType"]:checked');
    const emailError = document.querySelector(".emailError");
    const fistNameError = document.querySelector(".fistNameError");
    const lastNameError = document.querySelector(".lastNameError");
    const queryError = document.querySelector(".queryError");
    const notification = document.getElementById('notification');
    let hasError = false;

    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const textArea = document.getElementById('textArea');
    const conscent = document.getElementById('conscent');
    const conscentLabel = document.getElementById('conscentLabel');
    const generalContainer = document.getElementById('generalContainer');
    const supportContainer = document.getElementById('supportContainer');

    if (firstName.value === "") {
        firstName.style.border = "1px solid red";
        fistNameError.style.visibility = "visible";
        hasError = true;
    } else {
        firstName.style.border = "";
        fistNameError.style.visibility = "hidden";
    }

    if (lastName.value === "") {
        lastName.style.border = "1px solid red";
        lastNameError.style.visibility = "visible";
        hasError = true;
    } else {
        lastName.style.border = "";
        lastNameError.style.visibility = "hidden";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value === "") {
        email.style.border = "1px solid red";
        emailError.textContent = "Please enter an email address";
        emailError.style.visibility = "visible";
        hasError = true;
    } else if (!emailRegex.test(email.value)) {
        email.style.border = "1px solid red";
        emailError.textContent = "Please enter a valid email address";
        emailError.style.visibility = "visible";
        hasError = true;
    } else {
        email.style.border = "";
        emailError.style.visibility = "hidden";
    }

    if (queryTypeSelected == null) {
        generalContainer.style.border = "1px solid red";
        supportContainer.style.border = "1px solid red";
        queryError.style.visibility = "visible";
        hasError = true;
    } else {
        generalContainer.style.border = "";
        supportContainer.style.border = "";
        queryError.style.visibility = "hidden";
    }

    if (!conscent.checked) {
        conscentLabel.style.color = "red";
        hasError = true;
    } else {
        conscentLabel.style.color = "";
    }

    if (textArea.value === "") {
        textArea.style.border = "1px solid red";
        hasError = true;
    } else {
        textArea.style.border = "";
    }

    if (!hasError) {
        notification.style.visibility = "visible";
        notification.classList.add('show');

        setTimeout(function () {
            notification.classList.remove('show');
            form.submit(); 
        }, 5000);
    }
});

document.getElementById('firstName').addEventListener("input", function () {
    const firstName = document.getElementById('firstName');
    const fistNameError = document.querySelector(".fistNameError");
    if (firstName.value === "") {
        firstName.style.border = "1px solid red";
        fistNameError.style.visibility = "visible";
    } else {
        firstName.style.border = "";
        fistNameError.style.visibility = "hidden";
    }
});

document.getElementById('lastName').addEventListener("input", function () {
    const lastName = document.getElementById('lastName');
    const lastNameError = document.querySelector(".lastNameError");
    if (lastName.value === "") {
        lastName.style.border = "1px solid red";
        lastNameError.style.visibility = "visible";
    } else {
        lastName.style.border = "";
        lastNameError.style.visibility = "hidden";
    }
});

document.getElementById('email').addEventListener("input", function () {
    const email = document.getElementById('email');
    const emailError = document.querySelector(".emailError");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value === "") {
        email.style.border = "1px solid red";
        emailError.textContent = "Please enter an email address";
        emailError.style.visibility = "visible";
    } else if (!emailRegex.test(email.value)) {
        email.style.border = "1px solid red";
        emailError.textContent = "Please enter a valid email address";
        emailError.style.visibility = "visible";
    } else {
        email.style.border = "";
        emailError.style.visibility = "hidden";
    }
});

document.querySelectorAll('input[name="queryType"]').forEach((radio) => {
    radio.addEventListener("change", function () {
        const queryError = document.querySelector(".queryError");
        const generalContainer = document.getElementById('generalContainer');
        const supportContainer = document.getElementById('supportContainer');
        if (!this.checked) {
            generalContainer.style.border = "1px solid red";
            supportContainer.style.border = "1px solid red";
            queryError.style.visibility = "visible";
        } else {
            generalContainer.style.border = "";
            supportContainer.style.border = "";
            queryError.style.visibility = "hidden";
        }
    });
});

document.getElementById('textArea').addEventListener("input", function () {
    const textArea = document.getElementById('textArea');
    if (textArea.value === "") {
        textArea.style.border = "1px solid red";
    } else {
        textArea.style.border = "";
    }
});
