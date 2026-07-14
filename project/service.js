const scanMenu = document.getElementById('scanMenu');
const scanDropdown = document.getElementById('scanDropdown');

if (scanMenu && scanDropdown) {
  scanMenu.addEventListener('click', e => {
    e.stopPropagation();
    scanDropdown.style.display =
      (scanDropdown.style.display === 'block') ? 'none' : 'block';
  });

  document.addEventListener('click', () => {
    scanDropdown.style.display = 'none';
  });
}

function navAlert(msg) {
  alert(msg);
}

/* Health Care Scan */
function scanGrowth(event) {

  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();

  reader.onload = function(e) {

    const preview = document.getElementById("preview");
    const result = document.getElementById("result");

    preview.src = e.target.result;
    preview.style.display = "block";
    result.style.display = "inline-block";
  ;
         
    const fileName = file.name.toLowerCase();
          let plant = "";
           let tip = "";

if (fileName.includes("heart")) {
    plant = "❤️ Heart Disease";
    tip = "Possible Heart Disease";
}
else if (fileName.includes("child")) {
    plant = "👶 Childhood Infection";
    tip = "Possible Childhood Infection";
}
else if (fileName.includes("skin")) {
    plant = "🩹 Skin Disease";
    tip = "Possible Skin Rash";
}
else if (fileName.includes("bone")) {
    plant = "🦴 Bone Disease";
    tip = "Possible Bone Fracture";
}
else if (fileName.includes("women")) {
    plant = "🤰 Gynecological Disease";
    tip = "Possible Gynecological Condition";
}
else if (fileName.includes("brain")) {
    plant = "🧠 Brain Disease";
    tip = "Possible Neurological Disorder";
}
else if (fileName.includes("cancer")) {
    plant = "🎗️ Cancer";
    tip = "Possible Tumor";
}
else if (fileName.includes("diabetes")) {
    plant = "🩸 Diabetes";
    tip = "Possible Diabetes";
}
else if (
    fileName.includes("tooth") ||
    fileName.includes("teeth") ||
    fileName.includes("dental") ||
    fileName.includes("dentist") ||
    fileName.includes("mouth") ||
    fileName.includes("gum")
) {
    plant = "🦷 Dental Disease";
    tip = "Possible Dental Cavity";
}
else {
    plant = "🏥 Unknown Disease";
    tip = "Unable to identify the disease";
}

result.innerHTML = `
Disease Prediction: <b>${plant}</b><br>
Prediction: <b>${tip}</b>
`;
  };
  reader.readAsDataURL(file);
}