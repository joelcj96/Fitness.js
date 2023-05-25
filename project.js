
function loginForm () {
  const form = document.querySelector('.login-form');

  let fullname = form.fullname.value.trim();
  let email = form.email.value;
  let password = form.password.value;
  return;
}

const submit = document.querySelector('submit')

  // Great i am done with the login submission form, let me now move on with my Contact Us form



  // Function to handle form submission
function submitForm(event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Perform basic form validation
  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields");
    return;
  }


  // Reset form fields after submission
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";

// Display success message
  alert("Submitted successfully!"); 
}


let form = document.getElementById("contact-form");
form.addEventListener("submit", submitForm);
