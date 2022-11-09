import * as el from './html-elements';

export function clearCustomInput() {
    el.customInput.value = '';
    el.customInput.classList.remove('--valid');
    el.customInput.classList.remove('--invalid');
    el.customAlert.style.display = 'none';
    el.customAlert.textContent = ``;
}

export function clearOutput() {
    el.tipOutput.textContent = `$0.00`;
    el.totalOutput.textContent = `$0.00`;
}
