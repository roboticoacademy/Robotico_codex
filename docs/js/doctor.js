const scriptURL ="https://script.google.com/macros/s/AKfycbwJ-RUkcm5LERS8rZIn_bTZY7fGLD1P2D45Dt_YssYW22NmyjOG0VZW0O7RD1Zu3mav_w/exec";

const buttons = document.querySelectorAll(".book");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    
    const doctorName = button.dataset.name;

    if (!doctorName) {
      alert("data-name");
      return;
    }

   fetch(scriptURL, {
  method: "POST",
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