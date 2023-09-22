export function createPersonalInformationStep(callback, formElement) {
  const stepOneHTML = ` <div class="row setup-content" id="step-1" style="display: flex;">
                <div class="col-md-12">
                    <h3 class="text-center fontn">Personal Information</h3>
                    <div class="smart-forms">
                        <div class="frm-row">
                            <div class="colm colm4">
                                <div class="section">
                                    <label for="title" class="field-label">Select</label>
                                    <label class="field select">
                                        <select id="title" name="title" required="">
                                            <option selected="" value="">Title</option>
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
                                    <label for="fullname" class="field-label">Surname</label>
                                    <label class="field">
                                        <input type="text" value="" name="surname" id="surname" class="gui-input" placeholder="Surname" required="">
                                    </label>
                                </div>
                            </div>
                            <div class="colm colm4">
                                <div class="section">
                                    <label for="firstname" class="field-label">First Name</label>
                                    <label class="field">
                                        <input type="text" value="" name="firstname" id="firstname" class="gui-input" placeholder="firstname" required="">
                                    </label>
                                </div>
                            </div>
                            <div class="colm colm4">
                                <div class="section">
                                    <label for="date" class="field-label">Date of Birth</label>
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
                                        <select id="gender" name="gender" required="">
                                            <option value="">Select Gender...</option>
                                            <option value="Male"> Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                        <i class="arrow double"></i>
                                    </label>
                                </div>
                            </div>
                            <div class="colm colm4">
                                <div class="section">
                                    <div class="section">
                                        <label for="email" class="field-label">Email</label>
                                        <label class="field">
                                            <input type="email" name="email" id="email" value="" class="gui-input" placeholder="Email" required="">
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="colm colm4">
                                <div class="section">
                                    <label for="phone" class="field-label">Mobile no.</label>
                                    <label class="field">
                                        <input type="tel" name="telephone" id="telephone" value="" maxlength="11" class="gui-input phone_mask" placeholder="0xxxxxxxxxx" required="">
                                    </label>
                                </div>
                            </div>
                            <div class="colm colm4">
                                <div class="section">
                                    <label for="address" class="field-label">Address</label>
                                    <label class="field">
                                        <input type="text" name="address" id="address" class="gui-input" placeholder="address" value="" required="">
                                    </label>
                                </div>
                            </div>
                            <div class="colm colm4">
                                <div class="section">
                                    <label for="state" class="field-label">State</label>
                                    <label class="field select">
                                        <select name="state" id="state" required="">
                                            <option value="lagos">LAGOS</option>

                                            <option value="abuja">ABUJA FCT</option>

                                            <option value="abia">ABIA</option>

                                            <option value="adamawa">ADAMAWA</option>

                                            <option value="akwa_ibom">AKWA IBOM</option>

                                            <option value="anambra">ANAMBRA</option>

                                            <option value="bauchi">BAUCHI</option>

                                            <option value="bayelsa">BAYELSA</option>

                                            <option value="benue">BENUE</option>

                                            <option value="borno">BORNO</option>

                                            <option value="rivers">CROSS RIVERS</option>

                                            <option value="delta">DELTA</option>

                                            <option value="ebonyi">EBONYI</option>

                                            <option value="edo">EDO</option>

                                            <option value="ekiti">EKITI</option>

                                            <option value="enugu">ENUGU</option>

                                            <option value="gombe">GOMBE</option>

                                            <option value="imo">IMO</option>

                                            <option value="jigawa">JIGAWA</option>

                                            <option value="kaduna">KADUNA</option>

                                            <option value="kano">KANO</option>

                                            <option value="kastina">KATSINA</option>

                                            <option value="kebbi">KEBBI</option>

                                            <option value="kogi">KOGI</option>

                                            <option value="kwara">KWARA</option>

                                            <option value="nassarawa">NASSARAWA</option>

                                            <option value="niger">NIGER</option>

                                            <option value="ogun">OGUN</option>

                                            <option value="ondo">ONDO</option>

                                            <option value="osun">OSUN</option>

                                            <option value="oyo">OYO</option>

                                            <option value="plateau">PLATEAU</option>

                                            <option value="river">RIVERS</option>

                                            <option value="sokoto">SOKOTO</option>

                                            <option value="taraba">TARABA</option>

                                            <option value="yobe">YOBE</option>

                                            <option value="zamfara">ZAMFARA</option>
                                        </select>
                                        <i class="arrow double"></i>
                                    </label>
                                </div>
                            </div>

                            <div class="colm colm4">
                                <div class="section">
                                    <label for="occupation" class="field-label">Occupation</label>
                                    <label class="field">
                                        <input type="text" name="occupation" id="occupation" class="gui-input" value="" placeholder="Enter your occupation" required="">
                                    </label>
                                </div>
                            </div>

                            <div class="colm colm4">
                                <div class="section">
                                    <label for="identification_type" class="field-label">Identification Type</label>
                                    <label class="field select">
                                        <select class="form-control" required="required" id="identification_type" name="identification_type"><option value="" selected="selected">Select One</option><option value="Driver's Licence">Driver's Licence</option><option value="International Passport">International Passport</option><option value="National ID. Card">National ID. Card</option></select>
                                        <i class="arrow double"></i>
                                    </label>
                                </div>
                            </div>

                            <div class="colm colm4">
                                <div class="section">
                                    <label for="identification_no" class="field-label">Identification Number</label>
                                    <label class="field">
                                        <input type="text" name="identification_no" value="" id="identification_no" class="gui-input" placeholder="Enter identification number" required="required">
                                    </label>
                                </div>
                            </div>

                            <div class="colm colm12">
                                <div class="section">
                                    <label for="file1" class="field-label">
                                        Upload means of Identification -
                                        <span class="small-text fine-grey">(ONLY JPG : PNG : PDF - 500KB MAX)</span>
                                    </label>
                                    <label class="field prepend-icon file">
                                        <span class="button btn-primary">Choose File</span>
                                        <input class="gui-file" name="idUploaderFile" id="idUploaderFile" onchange="validateFile(this, '#idUploaderFileText', 512000)" type="file" required="required">
                                        <input class="gui-input" id="idUploaderFileText" placeholder="no file selected" readonly="" type="text">
                                        <span class="field-icon"><i class="fa fa-upload"></i></span>
                                    </label>
                                </div>
                            </div>

                        </div>
                    </div>
                    <button class="btn btn-primary btn-class pull-right" id="house-holder-next-first" type="button">
                        Next
                    </button>
                </div>
            </div>`
  formElement.insertAdjacentHTML('beforeend', stepOneHTML);
}

export function getFirstStepValidationButton() {
  const button = document.getElementById('house-holder-next-first');
  return button
}

export function getUploadedImageInput() {
  const imageInput = document.getElementById('idUploaderFile');
  return imageInput;
}

export function getPersonalInformationValidationArray() {
  const arr = [
    { id: "title", name: "Title" },
    { id: "firstname", name: "Firstname" },
    { id: "surname", name: "Surname" },
    { id: "date_of_birth", name: "Date of birth" },
    { id: "gender", name: "Gender" },
    { id: "email", name: "Email" },
    { id: "telephone", name: "Mobile No" },
    { id: "address", name: "Address" },
    { id: "state", name: "State" },
    { id: "occupation", name: "Occupation" },
    { id: "identification_type", name: "Identification type" },
    { id: "identification_no", name: "Identification number" },
    { id: "idUploaderFile", name: "Means of identification" }
  ];
  return arr;
}