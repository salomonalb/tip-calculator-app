export const app = document.querySelector('#app') as HTMLFormElement;

// Text Inputs
export const billInput = document.querySelector('#bill') as HTMLInputElement;
export const customInput = document.querySelector('#custom') as HTMLInputElement;
export const peopleInput = document.querySelector('#numOfPeople') as HTMLInputElement;

// Buttons
export const button5 = document.getElementById('5') as HTMLButtonElement;
export const button10 = document.getElementById('10') as HTMLButtonElement;
export const button15 = document.getElementById('15') as HTMLButtonElement;
export const button25 = document.getElementById('25') as HTMLButtonElement;
export const button50 = document.getElementById('50') as HTMLButtonElement;
export const resetButton = document.getElementById('reset') as HTMLButtonElement;
export const buttons: HTMLButtonElement[] = [button5, button10, button15, button25, button50];

// Outputs
export const tipOutput = document.querySelector('#tipAmount') as HTMLOutputElement;
export const totalOutput = document.querySelector('#total') as HTMLOutputElement;

// Alerts elements
export const billAlert = document.querySelector('#billAlert') as HTMLParagraphElement;
export const customAlert = document.querySelector('#customAlert') as HTMLParagraphElement;
export const peopleAlert = document.querySelector('#peopleAlert') as HTMLParagraphElement;

//Alert messages
export const billMessage: string = "Only numbers, Can't be zero, up to two decimal points";
export const peopleMessage: string = "Can't be zero, Only whole numbers up to three digits";
export const customMessage: string = "Can't be zero, Only whole numbers up to three digits";

// values
// I have to convert the values to an object so i can pass it to function and change the reference and not only the value inside the function

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

/*export let billValue: number = 0;
export let percentageValue: number = 0;
export let peopleValue: number = 0;*/

//Clear Functions
export function clearCustomInput(): void {
    customInput.value = '';
    customInput.classList.remove('--valid');
    customInput.classList.remove('--invalid');
    customAlert.style.display = 'none';
    customAlert.textContent = ``;
}

export function clearOutput(): void {
    tipOutput.textContent = `$0.00`;
    totalOutput.textContent = `$0.00`;
}

export function reset(): void {
    clearOutput()
    clearCustomInput()

    Values.billValue = 0
    Values.peopleValue = 0
    Values.percentageValue = 0
    /*Values.forEach(value => {
        value = 0;
    })
    */

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
export function calculation(): void {

    //alert(billValue)
    const tipAmount: number = ((Values.billValue * Values.percentageValue) / 100) / Values.peopleValue || 0;
    
    //alert(tipAmount)
    const totalAmount: number = (Values.billValue + ((Values.billValue * Values.percentageValue) / 100)) / Values.peopleValue || 0; 
    
    if (tipAmount === NaN || tipAmount === Infinity || tipAmount === 0 ||totalAmount === NaN || totalAmount === Infinity) {
        clearOutput()   
    } else {
        tipOutput.textContent = `$${tipAmount.toFixed(2)}`;
        totalOutput.textContent = `$${totalAmount.toFixed(2)}`;
    }
    
}

// Validate
export function validate(
    input: HTMLInputElement, 
    alertPara: HTMLParagraphElement, 
    valueObj: Object,
    valueProp: string, 
    message: string): void {
        //window.alert('here')
    if (input.validity.valid === false || input.value === "" || Number(input.value) < 1) {
        //alert('wrong')
        input.classList.remove('--valid');
        input.classList.add('--invalid');
        alertPara.style.display = 'block';
        alertPara.textContent = message;
        valueObj[valueProp] = 0;
        //alert(valuevar)
        clearOutput()
    } else {
        //alert('right')
        input.classList.remove('--invalid');
        input.classList.add('--valid');
        alertPara.style.display = 'none';
        alertPara.textContent = '';
        //alert(valueObj[valueProp])
        valueObj[valueProp] = Number(input.value);
        //alert(valueObj[valueProp])
        calculation()
    }
}

// Events
app.addEventListener('submit',  (event)=> {
    event.preventDefault()
})

billInput.addEventListener('input', ()=> {
    //alert('here')
    validate(billInput, billAlert, Values, 'billValue', billMessage)
})

customInput.addEventListener('input', ()=> {
    //alert('here')
    validate(customInput, customAlert, Values, 'percentageValue', customMessage)

    buttons.forEach((button) => {
        button.classList.remove('--selected')
    })
})

peopleInput.addEventListener('input', ()=> {
    //alert('here')
    validate(peopleInput, peopleAlert, Values, 'peopleValue', peopleMessage)
})

resetButton.addEventListener('click', (): void => {
    //alert('here')
    reset()
})

buttons.forEach((button) => {
    
    button.addEventListener('click', () => {
        //alert('here')
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