function calculateBMI() {
    const name = document.querySelector('#name').value;
    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);

    if (!name || !height || !weight || height <= 0 || weight <= 0) {
        alert('Molimo unesite ispravne vrijednosti.');
        return;
    }

    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
    let category = '';

    if (bmi < 18.5) {
        category = 'Pothranjenost';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normalna težina';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Prekomjerna težina';
    } else {
        category = 'Gojaznost';
    }

    const table = document.querySelector('#bmiTable tbody');
    const newRow = table.insertRow();

    newRow.innerHTML = `
        <td>${name}</td>
        <td>${height}</td>
        <td>${weight}</td>
        <td>${bmi}</td>
        <td>${category}</td>
    `;

    document.querySelector('#bmiForm').reset();
}