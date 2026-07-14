const scriptURL = "";

const buttons = document.querySelectorAll(".book");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const doctorName = button.dataset.name;

        fetch(scriptURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                doctor: doctorName
            })
        })
        .then(response => response.text())
        .then(() => {
            alert("✅ " + doctorName + " booked successfully!");
        })
        .catch(error => {
            console.error(error);
            alert("❌ Booking failed.");
        });

    });

});