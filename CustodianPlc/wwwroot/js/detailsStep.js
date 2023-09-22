import {
  postAsync
} from './api.js';

export function createSavingsAndInvestmentStep(formElement) {
  const stepTwoHTML = `<div class="row setup-content" id="step-2" style="display:none;">
				<div class="col-md-12" style="padding-bottom: 10px">
					<h3 class="text-center fontn">Benefits</h3>
					<div class="smart-forms">
						<div class="frm-row">
							<div class="colm colm6">
								<div class="section">
									<label for="Premium" class="field-label">Amount to save (Premium)</label>
									<label class="field">
										<input type="text" name="Premium"  id="premium" class="gui-input" required
											oninput="this.value = this.value.replace(/[^0-9]/g, '').substring(0,10);" value=""
										  placeholder="Enter Amount to Save">
									</label>
								</div>
							</div>
							<div class="colm colm6">
								<div class="section">
									<label for="payment_frequency_code" class="field-label">Payment Frequency</label>
									<label class="field select">
										<select id="payment_frequency_code"  name="PaymentFrequency" required="">
											<option value="">Select</option>
											<option value="ANNUALLY">ANNUALLY</option>
											<option value="SINGLE PREMIUM">SINGLE PREMIUM</option>
											<option value="MONTHLY">MONTHLY</option>
											<option value="QUARTERLY">QUARTERLY</option>
											<option value="ANNUALLY">SEMI-ANNUALLY</option>
										</select>
										<i class="arrow double"></i>
									</label>
								</div>
							</div>
							<div class="colm colm12">
								<div class="section">
									<label for="company_address" class="field-label"> Policy Term (No. of years) </label>
									<label class="field select">
										<select id="policy_term" name="PolicyTerm" required="">
											<option value="">Select</option>
											<option value="1">1</option>
											<option value="2">2</option>
											<option value="3">3</option>
											<option value="4">4</option>
											<option value="5">5</option>
										</select>
										<i class="arrow double"></i>
									</label>
								</div>
							</div>
							<div id="display-amounts">

								<div class="colm colm6">
									<div class="section">
										<label for="sum_assured" class="field-label">
											Target Amount
											<span class="small-text fine-grey"><strong></strong></span>
										</label>
										<label class="field">
											<input type="text" name="TargetAmount" id="sum_assured_field" class="gui-input" placeholder="Not Computed"
											 oninput="this.value = this.value.replace(/[^0-9]/g, '').substring(0,10);" required readonly style="font-weight: 900;font-size: 18px;">
										</label>
									</div>
								</div>
								<div class="colm colm6">
									<div class="section">
										<label for="life_sum_assured" class="field-label">Life Sum Assured</label>
										<label class="field">
											<input type="text" name="LifeSumAssured" id="life_sum_assured_field" class="gui-input"
											  oninput="this.value = this.value.replace(/[^0-9]/g, '').substring(0,10);" placeholder="Not Computed" required readonly style="font-weight: 900;font-size: 18px;">
				  						</label>
									</div>
								</div>
							</div>
							<div class="colm colm12">
								<div class="section">
									<label class="field">
										<span class="pull-center" style="display:block;width:100%;">
											<a class="btn standard btn-icon-reveal pull-right" href="javascript:;" style="width:100%; background: #626262"
											   id="calculate-policy-button">
												<i class="fa fa-calculator"></i>
												<span style="color:white;" class="text">Calculate</span>
											</a>
										</span>
									</label>
								</div>
							</div>
						</div>
					</div>
					<button class="btn btn-primary prevBtn btn-class pull-left"
							type="button"
							id="product_second_step_prev">
						Previous
					</button>
					<button class="btn btn-primary btn-class pull-right"
							id="product_second_step"
							type="button">
						Next
					</button>
				</div>
			</div>`
  formElement.insertAdjacentHTML('beforeend', stepTwoHTML);
}

export function getDetailsNextStepButton() {
  let detailsNextStepButton = document.getElementById('product_second_step');
  return detailsNextStepButton;
}

export function getDetailsPrevStepButton() {
  let detailsPrevStepButton = document.getElementById('product_second_step_prev');
  return detailsPrevStepButton;
}

export function getCalculatePolicyButton() {
  let calculatePolicyButton = document.getElementById('calculate-policy-button');
  return calculatePolicyButton;
}

export function getDetailsValidationArray() {
  return [
	{ id: "premium", name: "Premium" },
	{ id: "payment_frequency_code", name: "Payment Frequency" },
	{ id: "policy_term", name: "Policy Term" },
	{ id: "sum_assured_field", name: "Target Amount" },
	{ id: "life_sum_assured_field", name: "Life sum assured" },
  ];
}

export async function calculatePolicy(url, headers) {
  try {
	const data = setPolicyRequestData();
	const response = await postAsync(url, data, headers);
	// Handle the response data here
	let targetAmountInput = document.getElementById("sum_assured_field");
	let lifeSumAssuredInput = document.getElementById("life_sum_assured_field");
	let referenceNumberData = document.getElementById("reference_number_data");
	const displayAmount = document.getElementById('display-amounts');
	 targetAmountInput.value = response.targetAmount;
	 lifeSumAssuredInput.value = response.lifeSumAssured;
	 referenceNumberData.textContent = response.quoteReference;
	displayAmount.style.display = 'block';
  } catch (error) {
	console.log(error);
	// Handle errors here
	Swal.fire({
	  title: error.message || 'An error occurred',
	  icon: 'error',
	});
  } finally {
	// Hide the modal
	document.getElementById('modal').style.display = 'none';
  }
}

function setPolicyRequestData() {
  
  let premuimInput = document.getElementById("premium");
  let policyTermInput = document.getElementById("policy_term");
  let frequencyInput = document.getElementById('payment_frequency_code');

  return `premium=${premuimInput.value}&paymentFrequency=${frequencyInput.value}&policyTerm=${policyTermInput.value}`
}

export function getPremiumValidationArray() {
  const arr = [
	{ id: "premium", name: "Premium" },
	{ id: "payment_frequency_code", name: "Payment Frequency" },
	{ id: "policy_term", name: "Policy Term" }
  ]
  return arr;
}