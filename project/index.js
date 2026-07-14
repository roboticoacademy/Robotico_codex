   const scriptURL = "https://script.google.com/macros/s/AKfycbxRvJiduonpWcEMTsgTaJBfAyVx_AIPEe9OJqttjrlZyjWFnEloOnLLue0viuNxhlFzQw/exec";

const form = document.getElementById("registerForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const gender =
        document.querySelector('input[name="gender"]:checked')?.value || "";

    const data = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        password: document.getElementById("password").value,
        confirmPassword: document.getElementById("confirmPassword").value,
        gender: gender
    };

    fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(data)
    })
    .then(() => {
        alert("Account Created Successfully ✅");
        form.reset();
    })
    
});