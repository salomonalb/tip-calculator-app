import * as el from './html-elements';
import * as val from './value-variables';
import { clearOutput } from './clear-functions';

export function calculation() {

    let tipAmount: number = ((val.billValue * val.percentageValue) / 100) / val.peopleValue || 0;

    let totalAmount: number = (val.billValue + ((val.billValue * val.percentageValue) / 100)) / val.peopleValue || 0; 
    
    if (tipAmount === NaN || tipAmount === Infinity || tipAmount === 0 ||totalAmount === NaN || totalAmount === Infinity) {
        clearOutput()   
    } else {
        el.tipOutput.textContent = `$${tipAmount.toFixed(2)}`;
        el.totalOutput.textContent = `$${totalAmount.toFixed(2)}`;
    }
}