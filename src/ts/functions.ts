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