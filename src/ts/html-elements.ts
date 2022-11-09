export const app: HTMLFormElement = document.querySelector('#app')!;

// Text Inputs
export const billInput: HTMLInputElement = document.querySelector('#bill')!;
export const customInput: HTMLInputElement = document.querySelector('#custom')!;
export const peopleInput: HTMLInputElement = document.querySelector('#numOfPeople')!;

// Buttons
export const button5: HTMLButtonElement = document.querySelector('#5')!;
export const button10: HTMLButtonElement = document.querySelector('#10')!;
export const button15: HTMLButtonElement = document.querySelector('#15')!;
export const button25: HTMLButtonElement = document.querySelector('#25')!;
export const button50: HTMLButtonElement = document.querySelector('#50')!;
export const resetButton: HTMLButtonElement = document.querySelector('#reset')!;
export const buttons: HTMLButtonElement[] = [button5, button10, button15, button25, button50];

// Outputs
export const tipOutput: HTMLOutputElement = document.querySelector('#tipAmount')!;
export const totalOutput: HTMLOutputElement = document.querySelector('#total')!;

// Alerts
export const billAlert: HTMLParagraphElement = document.querySelector('#billAlert')!;
export const customAlert: HTMLParagraphElement = document.querySelector('#customAlert')!;
export const peopleAlert: HTMLParagraphElement = document.querySelector('#peopleAlert')!;
