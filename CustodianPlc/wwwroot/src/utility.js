import swal from 'sweetalert';

export const Utility = (() => {

    function showAlert(label) {
        swal(`${label} is required`, {
            icon: "error",
        });
    }

    function validateStep1() {
        // Define validation checks for each field
        const fieldsToValidate = [
            { id: "title", label: "Title" },
            { id: "firstname", label: "First Name" },
            { id: "middlename", label: "Middlename" },
            { id: "surname", label: "Surname" },
            { id: "date_of_birth", label: "Date of Birth" },
            { id: "gender", label: "Gender" },
            { id: "email", label: "Email" },
            { id: "telephone", label: "Mobile No." },
            { id: "startDate", label: "Insurance start date" },
            { id: "identification_type", label: "Identification Type" },
            { id: "identification_no", label: "Identification Number" },
            { id: "idUploaderFile", label: "Means of Identification" }
        ];

        for (const field of fieldsToValidate) {
            const value = document.getElementById(field.id).value;

            if (!value) {
                showAlert(field.label);
                return false;
            }
        }
        console.log("step 1 valdation successful");
        return true;
    }

    function validateStep2() {
        const fieldsToValidate = [
            { id: "premium", label: "Amount to save (Premium)" },
            { id: "payment_frequency_code", label: "Payment Frequency" },
            { id: "policy_term", label: "Policy Term (No. of years)" },
        ];

        for (const field of fieldsToValidate) {
            const value = document.getElementById(field.id).value;

            if (!value) {
                showAlert(field.label);
                return false;
            }
        }
        console.log("step 2 valdation successful");
        return true;
    }

    return {
        validateStep1: validateStep1,
        validateStep2: validateStep2,
    };
})();
