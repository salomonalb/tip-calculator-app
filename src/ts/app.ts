const app = document.querySelector('#app') as HTMLFormElement;

// Text Inputs
const billInput = document.querySelector('#bill') as HTMLInputElement;
const customInput = document.querySelector('#custom') as HTMLInputElement;
const peopleInput = document.querySelector('#numOfPeople') as HTMLInputElement;

// Buttons
const button5 = document.getElementById('5') as HTMLButtonElement;
const button10 = document.getElementById('10') as HTMLButtonElement;
const button15 = document.getElementById('15') as HTMLButtonElement;
const button25 = document.getElementById('25') as HTMLButtonElement;
const button50 = document.getElementById('50') as HTMLButtonElement;
const resetButton = document.getElementById('reset') as HTMLButtonElement;
const buttons: HTMLButtonElement[] = [button5, button10, button15, button25, button50];

// Outputs
const tipOutput = document.querySelector('#tipAmount') as HTMLOutputElement;
const totalOutput = document.querySelector('#total') as HTMLOutputElement;

// Alerts elements
const billAlert = document.querySelector('#billAlert') as HTMLParagraphElement;
const customAlert = document.querySelector('#customAlert') as HTMLParagraphElement;
const peopleAlert = document.querySelector('#peopleAlert') as HTMLParagraphElement;

//Alert messages
const billMessage: string = "Only numbers, Can't be zero, up to two decimal points";
const peopleMessage: string = "Can't be zero, Only whole numbers up to three digits";
const customMessage: string = "Can't be zero, Only whole numbers up to three digits";

// values

interface Values {
    billValue: number,
    percentageValue: number,
    peopleValue: number
}

const Values: Values = {
    billValue: 0, 
    percentageValue: 0,
    peopleValue:  0
}

//Clear Functions
function clearCustomInput(): void {
    customInput.value = '';
    customInput.classList.remove('--valid');
    customInput.classList.remove('--invalid');
    customAlert.style.display = 'none';
    customAlert.textContent = ``;
}

function clearOutput(): void {
    tipOutput.textContent = `$0.00`;
    totalOutput.textContent = `$0.00`;
}

function reset(): void {
    clearOutput()
    clearCustomInput()

    Values.billValue = 0;
    Values.peopleValue = 0;
    Values.percentageValue = 0;

    buttons.forEach(otherButton => {
        otherButton.classList.remove('--selected')
    })

    peopleInput.classList.remove('--invalid');
    peopleInput.classList.remove('--valid');
    peopleInput.value = "";
    peopleAlert.style.display = 'none';
    peopleAlert.textContent = ``;

    billInput.classList.remove('--invalid');
    billInput.classList.remove('--valid');
    billInput.value = "";
    billAlert.style.display = 'none';
    billAlert.textContent = ``;
}

//Calculation
function calculation(): void {

    const tipAmount: number = ((Values.billValue * Values.percentageValue) / 100) / Values.peopleValue || 0;
    
    const totalAmount: number = (Values.billValue + ((Values.billValue * Values.percentageValue) / 100)) / Values.peopleValue || 0; 
    
    if (tipAmount === NaN || tipAmount === Infinity || tipAmount === 0 ||totalAmount === NaN || totalAmount === Infinity) {
        clearOutput()   
    } else {
        tipOutput.textContent = `$${tipAmount.toFixed(2)}`;
        totalOutput.textContent = `$${totalAmount.toFixed(2)}`;
    }
    
}

// Validate
function validate(
    input: HTMLInputElement, 
    alertPara: HTMLParagraphElement, 
    valueObj: Object,
    valueProp: string, 
    message: string): void {
    if (input.validity.valid === false || input.value === "" || Number(input.value) < 1) {
        input.classList.remove('--valid');
        input.classList.add('--invalid');
        alertPara.style.display = 'block';
        alertPara.textContent = message;
        valueObj[valueProp] = 0;
        clearOutput()
    } else {
        input.classList.remove('--invalid');
        input.classList.add('--valid');
        alertPara.style.display = 'none';
        alertPara.textContent = '';
        valueObj[valueProp] = Number(input.value);
        calculation()
    }
}

// Events
app.addEventListener('submit',  (event)=> {
    event.preventDefault()
})

billInput.addEventListener('input', ()=> {
    validate(billInput, billAlert, Values, 'billValue', billMessage)
})

customInput.addEventListener('input', ()=> {
    validate(customInput, customAlert, Values, 'percentageValue', customMessage)

    buttons.forEach((button) => {
        button.classList.remove('--selected')
    })
})

peopleInput.addEventListener('input', ()=> {
    validate(peopleInput, peopleAlert, Values, 'peopleValue', peopleMessage)
})

resetButton.addEventListener('click', (): void => {
    reset()
})

buttons.forEach((button) => {
    
    button.addEventListener('click', () => {

        button.classList.add('--selected');
        Values.percentageValue = Number(button.value);

        
        const otherButtons = buttons.filter( otherButton => {
            return otherButton !== button;
        })

        otherButtons.forEach(otherButton => {
            otherButton.classList.remove('--selected')
        })
        clearCustomInput()
        calculation()
    })
})
