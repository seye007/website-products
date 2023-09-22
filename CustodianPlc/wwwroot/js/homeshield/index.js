﻿import {
  getCurrentDate,
  ValidateArray,
  validateFile
} from './../global.js';
import {
  createPersonalInformationStep,
  getPersonalInformationValidationArray,
  getFirstStepValidationButton,
  getUploadedImageInput,
} from './personalinformation.js';


import {
  createSavingsAndInvestmentStep,
  getDetailsNextStepButton,
  getDetailsPrevStepButton,
  getPremiumInputElement,
  setPremiumElement,
  getDetailsValidationArray
}
from './detailsStepForm.js'

const formElement = document.getElementById("product-form");
let stepOneElement = null;
let stepTwoElement = null;
let stepThreeElement = null;


// Step 1
const setupStep1 = () => {
  createPersonalInformationStep(getCurrentDate, formElement);
  stepOneElement = document.getElementById("step-1");
  const firstStepButton = getFirstStepValidationButton();
  const stepOneArr = getPersonalInformationValidationArray();
  const uploadImageInput = getUploadedImageInput();

  firstStepButton.addEventListener('click', () => {
    const stepOneIsValid = ValidateArray(stepOneArr);

    if (stepOneIsValid) {
      stepOneElement.style.display = 'none';
      setupStep2();
    }
  });

  uploadImageInput.addEventListener('change', (event) => {
    const fileInput = event.target;
    const fileTextDOM = document.getElementById('idUploaderFileText');
    validateFile(fileInput, fileTextDOM, 512000);
  });
};


// Step 2
const setupStep2 = () => {
  createSavingsAndInvestmentStep(getCurrentDate,formElement);
  stepTwoElement = document.getElementById("step-2");
  stepTwoElement.style.display = 'block';
  const stepTwoPrevElement = getDetailsPrevStepButton();
  const secondStepButton = getDetailsNextStepButton();
  const calculatePremiumButton = getPremiumInputElement();
  const stepTwoArr = getDetailsValidationArray();

  stepTwoPrevElement.addEventListener('click', () => {
    stepTwoElement.style.display = 'none';
    stepOneElement.style.display = 'block';
  });

  secondStepButton.addEventListener('click', () => {
    const stepTwoIsValid = ValidateArray(stepTwoArr);
    if (stepTwoIsValid) {
      setupStep3();
    }
  });

  calculatePremiumButton.addEventListener('change', async () => {
     const premium = 10000;
     setPremiumElement(premium);
  });
};



// Initialize the first step
setupStep1();