
export function createSavingsAndInvestmentStep(callback, formElement) {
  const stepTwoHTML = `  <div class="row setup-content" id="step-2" style="display: none">
                <div class="col-md-12  ">
                    <h3 class="text-center fontn">Details</h3>
                    <div class="smart-forms">
                        <div class="frm-row">

                            <div class="colm colm6">
                                <div class="section">
                                    <label for="fullname" class="field-label">Insurance start date</label>
                                    <label class="field">
                                    <input type="date" name="DateOfBirth" id="start_date" class="gui-input datepicker-here"
										data-language="en" data-min-view="days" data-view="years" data-date-format="yyyy-mm-dd"
										placeholder="yyyy-mm-dd" required="" min=${callback()}>
                                    </label>
                                </div>
                            </div>

                            <div class="colm colm6">
                                <div class="section">
                                    <label for="state" class="field-label">Policy Period</label>
                                    <label class="field select">
                                        <select name="policy_period" id="policy_period" required="">
                                            <option value="Annually">Annually</option>
                                        </select>
                                        <i class="arrow double"></i>
                                    </label>
                                </div>
                            </div>

                            <div class="colm colm6">
                                <div class="section">
                                    <label for="state" class="field-label">Number of Units required</label>
                                    <label class="field select">
                                        <select name="units" id="units" required="">
                                            <option value="" selected="">Select...</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                        </select>
                                        <i class="arrow double"></i>
                                    </label>
                                </div>
                            </div>

                            <div class="colm colm6">
                                <div class="section">
                                    <div class="section">
                                        <label for="budget" class="field-label">Insured Property Address</label>
                                        <label class="field">
                                            <input type="text" name="property_address" id="property_address" value="" class="gui-input" placeholder="Enter Insured Property Address" required="">
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="colm colm6">
                                <div class="section">
                                    <div class="section">
                                        <label for="budget" class="field-label">List of insured properties</label>
                                        <label class="field prepend-icon">
                                            <textarea required="required" name="property_list" id="property_list" class="gui-textarea" placeholder="Enter list of properties"></textarea>
                                            <span class="field-icon"><i class="fa fa-comments"></i></span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="colm colm6">
                                <div class="section">
                                    <div class="section">
                                        <label for="budget" class="field-label">Premium (NGN)</label>
                                        <label class="field">
                                            <input type="text" id="showcase-premium" value="0.00" style="font-weight: 1000;background-color: #a50505;color: white;font-size: 18px;" class="gui-input" placeholder=" NGN 10,000" required="" readonly="">
                                        </label>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <button class="btn btn-primary prevBtn btn-class pull-left" id="step-two-prev" type="button">
                        Previous
                    </button>

                    <button class="btn btn-primary btn-class pull-right" id="house-holder-next-second" type="button">
                        Next
                    </button>
                </div>
            </div>`
  formElement.insertAdjacentHTML('beforeend', stepTwoHTML);
}

export function getDetailsNextStepButton() {
  let detailsNextStepButton = document.getElementById("house-holder-next-second");
  return detailsNextStepButton;
}

export function getDetailsPrevStepButton() {
  let detailsPrevStepButton = document.getElementById('step-two-prev');
  return detailsPrevStepButton;
}


export function getPremiumInputElement() {
  const input = document.getElementById('units');
  return input;
}

export function setPremiumElement(input) {
  const premiumInput = document.getElementById('showcase-premium');
  premiumInput.value = input;
}

export function getDetailsValidationArray() {
  return [
    { id: "start_date", name: "Start Date" },
    { id: "policy_period", name: "Policy Period" },
    { id: "units", name: "Units" },
    { id: "property_address", name: "Property Address" },
    { id: "property_list", name: "Property List" },
    { id: "showcase-premium", name: "Premium" }
  ];
}



