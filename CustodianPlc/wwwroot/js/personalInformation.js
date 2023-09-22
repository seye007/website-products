export function createPersonalInformationStep(callback, formElement) {
  const stepOneHTML = `<div class="row setup-content" id="step-1" style="display: flex;">
				<div class="col-md-12" style="padding: 20px 0px">
					<h3 class="text-center fontn">Personal Information</h3>
					<div class="smart-forms">
						<div class="frm-row">
							<div class="colm colm4">
								<div class="section">
									<label for="budget" class="field-label">Title</label>
									<label class="field select">
										<select id="title" name="Title">
											<option value="">Title</option>
											<option value="Miss">Miss</option>
											<option value="Master">Master</option>
											<option value="Mr">Mr</option>
											<option value="Mrs">Mrs</option>
											<option value="Dr">Dr</option>
											<option value="Prof">Prof</option>
											<option value="Chief">Chief</option>
											<option value="Alhaji">Alhaji</option>
											<option value="Pastor">Pastor</option>
											<option value="Rev.">Rev.</option>
										</select>
										<i class="arrow double"></i>
									</label>
								</div>
							</div>
							<div class="colm colm4">
								<div class="section">
									<label for="first_name" class="field-label">First Name</label>
									<label class="field">
										<input type="text" name="FirstName" id="firstname" class="gui-input" placeholder="First Name">
									</label>
								</div>
							</div>
							<div class="colm colm4">
								<div class="section">
									<label for="middle_name" class="field-label">Middle Name</label>
									<label class="field">
										<input type="text" name="MiddleName" id="middlename" class="gui-input" placeholder="Middle Name">
									</label>
								</div>
							</div>
							<div class="colm colm4">
								<div class="section">
									<label for="last_name" class="field-label">Surname</label>
									<label class="field">
										<input type="text" name="Surname" id="surname" class="gui-input" placeholder="Surname" />
									</label>
								</div>
							</div>
							<div class="colm colm4">
								<div class="section">
									<label for="date_of_birth" class="field-label">Date of Birth</label>
									<label class="field">
										<input type="date" name="DateOfBirth" id="date_of_birth" class="gui-input datepicker-here" 
										data-language="en" data-min-view="days" data-view="years" data-date-format="yyyy-mm-dd" 
										placeholder="yyyy-mm-dd" required="" max=${callback()}>
									</label>
								</div>
							</div>
							<div class="colm colm4">
								<div class="section">
									<label for="gender" class="field-label">Gender</label>
									<label class="field select">
										<select id="gender" name="Gender">
											<option value="">Select gender...</option>
											<option value="M"> Male</option>
											<option value="F">Female</option>
										</select>
										<i class="arrow double"></i>
									</label>
								</div>
							</div>
							<div class="colm colm4">
								<div class="section">
									<label for="email" class="field-label">Email</label>
									<label class="field">
										<input type="email" name="Email" id="email" class="gui-input" placeholder="Email">
									</label>
								</div>
							</div>
							<div class="colm colm4">
								<div class="section">
									<label for="telephone" class="field-label">Mobile No.</label>
									<label class="field">
										<input type="tel" name="TelePhone" id="telephone" class="gui-input phone_mask" maxlength="11" placeholder="0xxxxxxxxxx" required="">
									</label>
								</div>
							</div>
							<div class="colm colm4">
								<div class="section">
									<label for="fullname" class="field-label">Insurance start date</label>
									<label class="field">
										<input type="date" name="DateOfBirth" id="startDate" class="gui-input datepicker-here"
										data-language="en" data-min-view="days" data-view="years" data-date-format="yyyy-mm-dd"
										placeholder="yyyy-mm-dd" required="" min=${callback()}>
									</label>
								</div>
							</div>
							<div class="colm colm4">
								<div class="section">
									<label for="identification_type" class="field-label">Identification Type</label>
									<label class="field select">
										<select class="form-control" id="identification_type" name="IdentificationType">
											<option value="">Select One</option>
											<option value="Driver's Licence">Driver's Licence</option>
											<option value="International Passport">International Passport</option>
											<option value="National ID. Card">National ID. Card</option></select>
										<i class="arrow double"></i>
									</label>
								</div>
							</div>
							<div class="colm colm4">
								<div class="section">
									<label for="identification_no" class="field-label">Identification Number</label>
									<label class="field">
										<input type="text" name="IdentificationNumber" id="identification_no" class="gui-input" placeholder="Enter identification number">
									</label>
								</div>
							</div>
							<div class="colm colm4">
								<div class="section">
									<label for="file1" class="field-label">
										Upload means of Identification -
										<span class="small-text fine-grey">(ONLY JPG : PNG : PDF - 500KB MAX)</span>
									</label>
									<label class="field prepend-icon file">
										<span class="button btn-primary">Choose File</span>
										<input class="gui-file" id="idUploaderFile" type="file" required="required">
										<input class="gui-input" id="idUploaderFileText" placeholder="no file selected" readonly="" type="text">
										<span class="field-icon"><i class="fa fa-upload"></i></span>
									</label>
								</div>
							</div>
						</div>
					</div>

					<button class="btn btn-primary btn-class pull-right" style="margin-bottom: 10px;" id="first-next-button" type="button">
						Next
					</button>
				</div>
			</div>`
  formElement.insertAdjacentHTML('beforeend', stepOneHTML);
}

export function getFirstStepValidationButton() {
  const button = document.getElementById('first-next-button');
  return button
}

export function getUploadedImageInput() {
  const imageInput = document.getElementById('idUploaderFile');
  return imageInput;
}


export function getPersonalInformationValidationArray() {
  const arr =  [
	{ id: "title", name: "Title" },
	{ id: "firstname", name: "Firstname" },
	{ id: "middlename", name: "Middlename" },
	{ id: "surname", name: "Surname" },
	{ id: "date_of_birth", name: "Date of birth" },
	{ id: "gender", name: "Gender" },
	{ id: "email", name: "Email" },
	{ id: "telephone", name: "Mobile No" },
	{ id: "startDate", name: "Start date" },
	{ id: "identification_type", name: "Identification type" },
	{ id: "identification_no", name: "Identification number" },
	{ id: "idUploaderFile", name: "Means of identification" }
  ];
  return arr;
}