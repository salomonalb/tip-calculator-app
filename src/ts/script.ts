import * as el from './html-elements';
import * as val from './value-variables';
import  validate  from './validate'

//import the function, now eberthing you export and import has to be namespaced

// Events
el.app.addEventListener('submit',  (event)=> {
    event.preventDefault()
})

el.billInput.addEventListener('input', ()=> {
    validate(el.billInput, el.billAlert, val.billValue, el.billMessage)
})

el.customInput.addEventListener('input', ()=> {
    validate(el.customInput, el.customAlert, val.percentageValue, el.customMessage)

    el.buttons.forEach((button) => {
        button.classList.remove('--selected')
    })
})

el.peopleInput.addEventListener('input', ()=> {
    validate(el.peopleInput, el.peopleAlert, val.peopleValue, el.peopleMessage)
})


/*
buttons.forEach((button) => {
    
    button.addEventListener('click', () => {
        button.classList.add('--selected');
        percentageValue = Number(button.value);

        
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

resetButton.addEventListener('click', event => {
    clearOutput()
    clearCustomInput()
    billValue = 0;
    percentageValue = 0;
    peopleValue = 0;

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
})
*/
