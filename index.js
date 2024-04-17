const form = document.querySelector('.page')
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const height = parseFloat(document.querySelector('#height').value)
    const weight = parseFloat(document.querySelector('#weight').value)
    const result = document.querySelector('#result')
    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please enter valid height ⚠️`
        result.style.backgroundColor = '#FF2828'
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please enter valid weight ⚠️`
        result.style.backgroundColor = '#FF2828'
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if (bmi < 18.6) {
            result.innerHTML = `BMI is ${bmi}. You are Under Weight.`
            result.style.backgroundColor = '#FF2828'
        }
        else if (bmi > 24.9) {
            result.innerHTML = `BMI is ${bmi}. You are Over Weight.`
            result.style.backgroundColor = '#FF2828'
        }
        else {
            result.innerHTML = `BMI is ${bmi}. You are Normal.`
            result.style.backgroundColor = '#00ff1e'
        }
    }
})