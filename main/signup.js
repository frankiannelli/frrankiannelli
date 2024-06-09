window.onload = function() {
  alert("Welcome to the Flying Taxi Co. - Newsletter Signup");
};

document.querySelector('form').onsubmit = function(event) {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    if (firstName === '' || lastName === '') {
        alert('Both name fields are required.');
        event.preventDefault(); // Prevent form from submitting
    }
};