import { clearOutput, calculation } from "./functions";

export default function validate(
    input: HTMLInputElement, 
    alert: HTMLParagraphElement, 
    value: number, 
    message: string): void {

    if (input.validity.valid === false || input.value === "" || Number(input.value) < 1) {
        input.classList.remove('--valid');
        input.classList.add('--invalid');
        alert.style.display = 'block';
        alert.textContent = message;
        value = 0;
        clearOutput()
    } else {
        input.classList.remove('--invalid');
        input.classList.add('--valid');
        alert.style.display = 'none';
        alert.textContent = '';
        value = Number(input.value);
        calculation()
    }
}
