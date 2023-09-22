import {
  getCurrentDate,
  ValidateArray,
  validateFile
} from './global.js';
import {
  createPersonalInformationStep,
  getPersonalInformationValidationArray,
  getFirstStepValidationButton,
  getUploadedImageInput
} from './personalInformation.js';

import {
  createSavingsAndInvestmentStep,
  getDetailsValidationArray,
  calculatePolicy,
  getDetailsNextStepButton,
  getCalculatePolicyButton,
  getPremiumValidationArray,
  getDetailsPrevStepButton
} from './detailsStep.js';

import {
  CreateSavingsAndInvestmentStepThree,
  geSummarytPreviousButton
} from './summary.js';

const formElement = document.getElementById("product-form");
const policyUrlElement = document.querySelector('[data-premium-url]');
const crsfTokenElement = document.querySelector('input[name="__RequestVerificationToken"]');
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
  createSavingsAndInvestmentStep(formElement);
  stepTwoElement = document.getElementById("step-2");
  stepTwoElement.style.display = 'block';
  const stepTwoPrevElement = getDetailsPrevStepButton();
  const secondStepButton = getDetailsNextStepButton();
  const calculatePolicyButton = getCalculatePolicyButton();
  const stepTwoArr = getDetailsValidationArray();
  const premiumArr = getPremiumValidationArray();

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



  calculatePolicyButton.addEventListener('click', async () => {
    const isValid = ValidateArray(premiumArr);
    if (isValid) {
      if (policyUrlElement) {
        const policyUrl = policyUrlElement.getAttribute('data-premium-url');
        const crsfToken = crsfTokenElement.value;
        const header = {
          'RequestVerificationToken': crsfToken,
        };

        await calculatePolicy(policyUrl, header);
      }
    }
  });
};


// Initialize the first step
setupStep1();
