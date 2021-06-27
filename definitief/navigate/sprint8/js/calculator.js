//  thema switcher
const switchTheme = document.querySelector('.theme-switcher');

if (switchTheme) {
    switchTheme.addEventListener('click', function(){
        const theBody = document.querySelector(".colorbg , .colorbgcalc");
        const switchers = document.querySelectorAll('.switchers')
        theBody.classList.toggle('colorbgcalc_dark')

        for (let i = 0; i < switchers.length; i++) {
            const changeSwitcher = switchers[i];
            changeSwitcher.classList.toggle('switch-dark')
        }

    })

}

// get welcome to calcultor alert

const getAlert = document.querySelector('.alert-get');

if (getAlert) {
    getAlert.addEventListener('click', function(){
       alert('Welcome to the Calculator');
    })
}

console.log('Calculator ingeladen')
window.onload = () => {
	let button = document.querySelector(".btn");
	button.addEventListener("click", calculateBMI);
};

function calculateBMI() {

	let height = parseInt(document.querySelector(".height").value);

	let weight = parseInt(document.querySelector(".weight").value);

	let result = document.querySelector(".result");

	if (height === "" || isNaN(height))
		result.innerHTML = "Provide a valid Height!";

	else if (weight === "" || isNaN(weight))
		result.innerHTML = "Provide a valid Weight!";

	else {

		let bmi = (weight / ((height * height)
							/ 10000)).toFixed(2);

		// bmi condition
		if (bmi < 18.6) result.innerHTML =
			`Under Weight : <span>${bmi}</span>`;

		else if (bmi >= 18.6 && bmi < 24.9)
			result.innerHTML =
				`Normal : <span>${bmi}</span>`;

		else result.innerHTML =
			`Over Weight : <span>${bmi}</span>`;
	}
}
