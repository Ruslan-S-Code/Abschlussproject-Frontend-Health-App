document.querySelector('.btn-calculate').addEventListener('click', calculateCalories);

function calculateCalories() {
    const userBody = parseFloat(document.getElementById('body').value);
    const userAge = parseInt(document.getElementById('age').value);
    const userWeight = parseFloat(document.getElementById('weight').value);
    const userActivity = parseFloat(document.getElementById('activity').value);
    const gender = document.querySelector('input[name="gender"]:checked').value;

    if (isNaN(userBody) || isNaN(userAge) || isNaN(userWeight) || isNaN(userActivity)) {
        alert('Please fill out all fields correctly.');
        return;
    }

    let bmr, tdee;

    // BMR Calculation
    if (gender === 'male') {
        bmr = 88.362 + (13.397 * userWeight) + (4.799 * userBody) - (5.677 * userAge);
    } else {
        bmr = 447.593 + (9.247 * userWeight) + (3.098 * userBody) - (4.330 * userAge);
    }

    // TDEE Calculation
    tdee = bmr * userActivity;

    // Display Results
    document.getElementById('bmrKcal').textContent = bmr.toFixed(2);
    document.getElementById('bmrKj').textContent = (bmr * 4.184).toFixed(2); // convert kcal to kJ

    document.getElementById('tdeeKcal').textContent = tdee.toFixed(2);
    document.getElementById('tdeeKj').textContent = (tdee * 4.184).toFixed(2); // convert kcal to kJ
}
