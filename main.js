function handleSubmit(event) {
    event.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;

    const gender = [];
    if (document.getElementById('male').checked) {
      gender.push('Male');
    }
    if (document.getElementById('female').checked) {
      gender.push('Female');
    }

    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobileNumber = document.getElementById('mobile-number').value;

    const popupMessage = `Selected values:
First Name: ${firstName}
Last Name: ${lastName}
Date of Birth: ${dob}
Country: ${country}
Gender: ${gender.join(', ')}
Profession: ${profession}
Email: ${email}
Mobile Number: ${mobileNumber}`;

    alert(popupMessage);
    resetForm();
  }

  function resetForm() {
    document.getElementById('survey-form').reset();
  }