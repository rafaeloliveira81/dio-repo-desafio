// var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0
var addBtn = document.querySelector('button[name="adicionar"]')
var subBtn = document.querySelector('button[name="subtrair"]')
var textResult = document.querySelector('#currentNumber')

// 		## Chamando função com onClick no HTML
// function increment() {
// 	currentNumber = currentNumber + 1 
// 	currentNumberWrapper.innerHTML = currentNumber
// }
// 
// function decrement() {
// 	currentNumber = currentNumber - 1
// 	currentNumberWrapper.innerHTML = currentNumber
// }

//		## Utilizando Listener

addBtn.addEventListener('click', function(event) {
	currentNumber = currentNumber + 1
  textResult.textContent = currentNumber
})

subBtn.addEventListener('click', {
	handleEvent: function(event) {
		currentNumber = currentNumber - 1
		textResult.textContent = currentNumber
	}
})
