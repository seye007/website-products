export function CreateSavingsAndInvestmentStepThree(formElement,summaryObj) {
  const stepThreeHtml = `<!-- Step 3 :  -->
			<span id="summaryEmail"></span>
			<div class="row setup-content pady" id="step-3" style="margin:0px; display:none">
				<div class="col-md-12" style="margin-top: 10px;">
					<div class="col-md-12">
						<section class="section-primary pt-none">
							<div class="container">
								<div class="row">
									<div class="col-md-12 mt-5" style="margin-top:40px;">
										<table class="table table-bordered">
											<caption style="font-size: 16px;">Quotation Detail</caption>
											<tbody>
												<tr>
													<td><strong>Client Name: </strong></td>
													<td><span id="pre_client_name_data"></span></td>
												</tr>
												<tr>
													<td><strong>Product Name: </strong></td>
													<td><span id="product_name_data"></span></td>
												</tr>
												<tr>
													<td><strong>Quote Code: </strong></td>
													<td><span id="reference_number_data"></span></td>
												</tr>
												<tr>
													<td><strong>Start Date: </strong></td>
													<td><span id="start_date_data"></span></td>
												</tr>
												<tr>
													<td><strong>Payment Frequency: </strong></td>
													<td><span id="payment_frequency_data"></span></td>
												</tr>
												<tr>
													<td><strong>Premium: </strong></td>
													<td><span id="premium_data"></span></td>
												</tr>
												<tr>
													<td><strong>Policy Term: </strong></td>
													<td><span id="policy_term_data"></span></td>
												</tr>
												<tr>
													<td><strong>Target Amount: </strong></td>
													<td><span id="target_amount_data"></span></td>
												</tr>
												<tr>
													<td><strong>Life Sum Assured: </strong></td>
													<td><span id="life_sum_assured_data"></span></td>
												</tr>
												<tr>
													<td colspan="2">
														<p style="text-align: center;">
															If you have questions about the status of your quotation, please contact:
															carecentre@custodianinsurance.com
														</p>
													</td>
												</tr>
											</tbody>
										</table>
										<nav id="tp-and-ft-buttonset"
											 class="c-breadcrumb-1 c-breadcrumb-1-onCheckout -style-icons pull-left">
											<ol class="c-breadcrumb-1-inner">
												<li class="c-breadcrumb-1-item">
													<a href="javascript:;"
													   onclick="#" class="c-breadcrumb-1-link">
														<i class="c-breadcrumb-1-icon fa fa-download" aria-hidden="true"></i>
														Download Quote
													</a>
												</li>

												<li class="c-breadcrumb-1-item">
													<a href="javascript:;"
													   onclick="#"
													   class="c-breadcrumb-1-link">
														<i class="c-breadcrumb-1-icon fa fa-envelope" aria-hidden="true"></i>
														Email Quote
													</a>
												</li>
												<li class="c-breadcrumb-1-item">
													<a href="javascript:;"
													   onclick="#"
													   class="c-breadcrumb-1-link">
														<i class="c-breadcrumb-1-icon fa fa-envelope" aria-hidden="true"></i>
														Save Quote
													</a>
												</li>
											</ol>
										</nav>
									</div>
								</div>
							</div>
						</section>

						<div class="col-md-12 pady" style="margin-bottom: 15px">
							<div class="row">
								<div class="col-md-6 col-sm-12">
									<button class="btn btn-primary btn-class prevBtn pull-left" id="product_third_step_prev" type="button">Previous</button>
								</div>
								<div class="col-md-6 col-sm-12">
									<button style="color: #fff;" id="buy-now-button" class="btn btn-success btn-class pull-right color1" type="submit">
										Buy Now!
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>`;
  formElement.insertAdjacentHTML('beforeend', stepThreeHtml);
}


export function geSummarytPreviousButton() {
  const button = document.getElementById('product_third_step_prev');
  return button;
}