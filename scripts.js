document.getElementById("btn").addEventListener("click", () => {
    let resultContainer = document.getElementById("result");
    let heightInput = document.getElementById("height");
    let weightInput = document.getElementById("weight");
    let heightValue = parseFloat(heightInput.value) / 100; // Convertir en nombre
    let weightValue = parseFloat(weightInput.value); // Convertir en nombre
    let imc = weightValue / (heightValue * heightValue);
    if(isNaN(heightValue)||isNaN(weightValue) || heightValue<=0 ||weightValue<=0){
        alert("Valeur non Valide");
    }
    else{
    let result = document.createElement("p"); // Créer l'élément <p> une seule fois

    if (imc < 18.5) {
        result.textContent = "Sous-poids : " + imc.toFixed(2); // Afficher avec 2 décimales
    } else if (imc >= 18.5 && imc <= 24.9) {
        result.textContent = "Normal : " + imc.toFixed(2);
    } else if (imc >= 25 && imc <= 29.9) {
        result.textContent = "Surpoids : " + imc.toFixed(2);
    } else if (imc >= 30) {
        result.textContent = "Obésité : " + imc.toFixed(2);
    }

    resultContainer.appendChild(result);

    }
 // Ajouter le résultat dans le conteneur
});
