document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const fullName = document.getElementById('fullName').value;
    const aadharNumber = document.getElementById('aadharNumber').value;
    const phoneNumber = document.getElementById('phoneNumber').value;

    // Simple validation
    if (fullName && aadharNumber.length === 12 && phoneNumber.length === 10) {
        alert('An OTP has been sent to ' + phoneNumber + '. Please verify.');
        document.getElementById('otpSection').style.display = 'block'; // Show OTP input
    } else {
        alert('Please enter valid credentials.');
    }
});

function signUp() {
    alert('Redirecting to Sign Up page (this can be implemented).');
}

function verifyOTP() {
    const otp = document.getElementById('otp').value;
    // Simulate OTP verification (you can implement real OTP logic)
    if (otp) {
        window.location.href = 'verify.html'; // Redirect to the verification page
    } else {
        alert('Please enter a valid OTP.');
    }
}