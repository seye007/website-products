function errorMessage(error) {
  Swal.fire({
    icon: 'error',
    confirmButtonText: 'OK',
    text: error
  });
}

function validateField(field, fieldName) {
  if (field.value.trim() === "") {
    errorMessage(fieldName + " is required");
    return false;
  }
  return true;
}


export function ValidateArray(arr) {
  let isValid = true;
  arr.reverse().forEach((fieldInfo) => {
	const fieldElement = document.getElementById(fieldInfo.id);
	if (!validateField(fieldElement, fieldInfo.name)) {
	  isValid = false;
	}
  });

  return isValid;
}

/*---------------------------------------------------------------
| FILE VALIDATION METHOD:
|----------------------------------------------------------------
| Validates if the file is of the right format and size.
| If yes: Preview is shown.
| If no: Alert goes off telling the user the input error.
|--------------------------------------------------------------*/

export function validateFile(fileDOM, fileTextDOM, fileSize = 2097152) {
  var url = fileDOM.value;
  var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();

  if (fileDOM.files && fileDOM.files[0] && fileDOM.files[0].size <= fileSize) {
	if (ext == "gif" || ext == "png" || ext == "jpeg" || ext == "jpg" || ext == "pdf") {
	  fileTextDOM.value = fileDOM.value;
	  var type = '<img class="img-thumbnail" src="" id="salert_img_preview"  style="max-height:300px;max-width:400px;" />';

	  if (ext == "pdf") {
		type = '<iframe src="" id="salert_img_preview" width="400px" height="450px"></iframe>';
	  }

	  var reader = new FileReader();
	  reader.onload = function (e) {
		document.getElementById('salert_img_preview').src = e.target.result;
		// console.log(e.target.result);
	  };
	  reader.readAsDataURL(fileDOM.files[0]);

	  // Show the preview using sweetalert!
	  swal({
		title: 'Preview',
		html: type
	  });
	} else {
	  fileTextDOM.value = '';
	  fileDOM.value = '';
	  swal({
		type: 'error',
		title: 'File format not supported',
		html: '<hr><strong>You can only upload image and pdf files</strong>'
	  });
	}
  } else {
	fileTextDOM.value = '';
	fileDOM.value = '';
	swal({
	  type: 'error',
	  title: 'Upload size limit exceeded',
	  html: '<hr><strong>Upload size limit is ' + getPrettyFileSize(fileSize) + '</strong>'
	});
  }
}
// DONE WITH FILE VALIDATION

var getPrettyFileSize = function (fileSize, key = 0) {
  var postfix = ['B', 'KB', 'MB', 'GB', 'TB'];
  if (fileSize < 1024) {
    return fileSize + ' ' + postfix[key];
  } else {
    key++;
    fileSize = (fileSize / 1024);
    return getPrettyFileSize(fileSize, key);
  }
}


export function getCurrentDate() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}