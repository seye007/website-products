/*using CustodianProduct.MVC.Attributes;
using CustodianProduct.MVC.Models;
using Microsoft.AspNetCore.Http;
using System;
using System.ComponentModel.DataAnnotations;

namespace CustodianPlc.Models
{
	public class SafetyPlusVm : PersonalVm
  {
    [RegularExpression("[a-zA-Z]{1,25}", ErrorMessage="Company name must be letters only.")]
    [Required(ErrorMessage="Company name is required")]
    public string CompanyName { get; set; }
    [Required(ErrorMessage="Start date is Required")]
    public string StartDate { get; set; }

    [Required(ErrorMessage="Policy period is required")]
    public string PolicyPeriod { get; set; }

    [Required(ErrorMessage="Unit is required")]
    public string Units { get; set; }

    [Required(ErrorMessage="Please calculate premium")]
    public string Premium { get; set; }

    [Required(ErrorMessage="Beneficiary identification type is required")]
    public string BeneficiaryIdentificationType { get; set; }

    [Required(ErrorMessage= "Beneficiary identification number is required")]
    public string BeneficiaryIdentificationNumber { get; set; }

    [Required(ErrorMessage= "Company address is required")]
    public string CompanyAddress { get; set; }

    [Required(ErrorMessage= "Beneficiary name is required")]
    [RegularExpression("[a-zA-Z]{1,25}", ErrorMessage= "Beneficiary name must be letters only.")]
    public string BeneficiaryName { get; set; }

    [Required(ErrorMessage="Beneficiary date of birth is required")]
    public DateTime BeneficiaryDateOfBirth { get; set; }

    [Required(ErrorMessage= "Beneficiary gender is required")]
    public string BeneficiaryGender { get; set; }

    [Required(ErrorMessage= "Beneficiary Means of Identification is required")]
    [ImageSizeValidation("Beneficiary Means of Identification size should not be more than 500KB")]
    [ImageFormatValidation("Beneficiary Means of Identification file format not supported")]
    public IFormFile BeneficiaryMeansOfIdentification { get; set; }

    [Required(ErrorMessage="Beneficairy relationship is required")]
    [RegularExpression("[a-zA-Z]{1,25}", ErrorMessage= "Beneficairy relationship must be letters only.")]
    public string BeneficairyRelationship { get; set; }

  }
}*/