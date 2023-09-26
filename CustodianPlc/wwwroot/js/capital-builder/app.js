const prevBtn = document.getElementById("btn-prev");
const nextBtn = document.getElementById("btn-next");

nextBtn.addEventListener("click", increaseCurrentStep);
prevBtn.addEventListener("click", decreaseCurrentStep);

const svs = new productService.Esusu(document.getElementById("root"));
let activeStep;

activeStep = 1;
svs.show();

function increaseCurrentStep() {
  const isValid = svs.validateStep();

  if (isValid) {
    if (activeStep >= 1 && activeStep < 3) {
      svs.setNewStep(++activeStep);
      svs.show();
      if (activeStep === 3) {
        nextBtn.innerText = "Submit";
        nextBtn.type = "submit";
        nextBtn.style.backgroundColor = "#900000";
        nextBtn.style.color = white
      }
      return;
    }
  }
}

function decreaseCurrentStep() {
  if (activeStep > 1 && activeStep <= 3) {
    svs.setNewStep(--activeStep);
    svs.show();
    return;
  }

}
