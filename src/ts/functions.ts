import * as el from './html-elements';
import * as val from './value-variables';



export function calculation() {

    billValue = Number.parseInt(billValue);
    percentageValue = Number.parseInt(percentageValue);
    peopleValue = Number.parseInt(peopleValue);

    console.log(typeof billValue + " " + billValue)
    console.log(typeof percentageValue + " " + percentageValue);
    console.log(typeof peopleValue + " " + peopleValue);


    const tipAmount = ((billValue * percentageValue) / 100) / peopleValue || 0;

    const totalAmount = (billValue + ((billValue * percentageValue) / 100)) / peopleValue || 0; 
    

    if (tipAmount === NaN || tipAmount === Infinity || tipAmount === 0 ||totalAmount === NaN || totalAmount === Infinity  ) {

        clearOutput()
        
    } else {

        console.log('tip amount ' + typeof tipAmount + ` ${tipAmount}`);

        tipOutput.textContent = `$${tipAmount.toFixed(2)}`;
        totalOutput.textContent = `$${totalAmount.toFixed(2)}`;
    }
}





/*
export function billValidate() {
    
    if (billInput.validity.valid === false || billInput.value === "" || billInput.value < 1) {
        billInput.classList.remove('--valid');
        billInput.classList.add('--invalid');
        billAlert.style.display = 'inline-block';
        billAlert.textContent = `Only numbers, Can't be zero, up to two decimal points`;

        billValue = 0;
        clearOutput()

        

    } else  {
        billInput.classList.remove('--invalid');
        billInput.classList.add('--valid');
        billAlert.style.display = 'none';
        billAlert.textContent = ``;

        billValue = billInput.value;
        calculation()
    }
}

export function peopleValidate() {
    
    if (peopleInput.validity.valid === false || peopleInput.value === "" || peopleInput.value < 1) {

        peopleInput.classList.remove('--valid');
        peopleInput.classList.add('--invalid');
        peopleAlert.style.display = 'block';
        peopleAlert.textContent = `Can't be zero, Only whole numbers up to three digits`;

        
        peopleValue = 0;
        clearOutput()

    } else {
        peopleInput.classList.remove('--invalid');
        peopleInput.classList.add('--valid');
        peopleAlert.style.display = 'none';
        peopleAlert.textContent = ``;

        peopleValue = peopleInput.value;
        calculation()
    }
}

export function customValidate() {
    if (customInput.validity.valid === false || customInput.value === "" || customInput.value < 1) {
        customInput.classList.remove('--valid');
        customInput.classList.add('--invalid');
        customAlert.style.display = 'block';
        customAlert.textContent = `Can't be zero, Only whole numbers up to three digits`;

        
        percentageValue = 0;
        clearOutput()

    } else {
        customInput.classList.remove('--invalid');
        customInput.classList.add('--valid');
        customAlert.style.display = 'none';
        customAlert.textContent = ``;

        percentageValue = customInput.value;
        calculation()
    }

    const otherButtons = [button5, button10, button15, button25, button50];
    otherButtons.forEach((button) => {
        button.classList.remove('--selected')

    })

    
}
*/