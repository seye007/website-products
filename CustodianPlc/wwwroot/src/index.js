import Step1Page from "./step-1.handlebars";
import Step2Page from "./step-2.handlebars";
import Step3Page from "./step-3.handlebars";
import { Utility } from "./utility";
import "./form-element.css";
import "./responsive.css";
import "./utilities.css";
import "./smart-forms/smart-addons.css";
import "./smart-forms/smart-forms.css";
import "./moneypage.css";
import "./modal.css";

export class Esusu {
    constructor(elem) {
        this.targetElement = elem;
        this.currentStep = 1;
        this.stepArray = [
            { stepId: 1, validation: this.#validateStep1.bind(this), loadPage: this.#loadStep1.bind(this) },
            { stepId: 2, validation: this.#validateStep2.bind(this), loadPage: this.#loadStep2.bind(this) },
            { stepId: 3, validation: null, loadPage: this.#loadStep3.bind(this) }
        ];
    }

    show() {
        const stepObject = this.#getStepObject();
        stepObject.loadPage();
    }

    #loadStep1() {
        const page = Step1Page({});
        this.targetElement.innerHTML = page;
    }

    #loadStep2() {
        const page = Step2Page({});
        this.targetElement.innerHTML = page;
    }

    #loadStep3() {
        const page = Step3Page({});
        this.targetElement.innerHTML = page;
    }

    #validateStep1() {
        
        console.log("validating step 2");
        return Utility.validateStep1();
    }

    #validateStep2() {
        console.log("validating step 2");
        return Utility.validateStep2();
    }

    #getStepObject() {
        return this.stepArray.find((item) => item.stepId == this.currentStep);
    }

    validateStep() {
        const stepObject = this.#getStepObject();
        return stepObject.validation();
    }

    setNewStep(newValue) {
        this.currentStep = newValue;
    }
}
