const app: HTMLFormElement = document.querySelector('#app')!;

// Text Inputs
const billInput: HTMLInputElement = document.querySelector('#bill')!;
const customInput: HTMLInputElement = document.querySelector('#custom')!;
const peopleInput: HTMLInputElement = document.querySelector('#numOfPeople')!;

// Buttons
const button5: HTMLButtonElement = document.querySelector('#5')!;
const button10: HTMLButtonElement = document.querySelector('#10')!;
const button15: HTMLButtonElement = document.querySelector('#15')!;
const button25: HTMLButtonElement = document.querySelector('#25')!;
const button50: HTMLButtonElement = document.querySelector('#50')!;
const resetButton: HTMLButtonElement = document.querySelector('#reset')!;
const buttons: HTMLButtonElement[] = [button5, button10, button15, button25, button50];

// Outputs
const tipOutput: HTMLOutputElement = document.querySelector('#tipAmount')!;
const totalOutput: HTMLOutputElement = document.querySelector('#total')!;

// Alerts
const billAlert: HTMLParagraphElement = document.querySelector('#billAlert')!;
const customAlert: HTMLParagraphElement = document.querySelector('#customAlert')!;
const peopleAlert: HTMLParagraphElement = document.querySelector('#peopleAlert')!;
