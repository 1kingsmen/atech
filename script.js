
    




        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission
        
            const submitButton = document.getElementById('submit-button');
            const loader = submitButton.querySelector('.loader');
        
            // Show loader and disable the button
            submitButton.disabled = true;
            loader.style.display = "inline-block";
            submitButton.style.color = "transparent"; // Hide button text
        
            // Collect form data
            let formData = {
                name: document.getElementById('name').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value,
                business: document.getElementById('business').value,
                message: document.getElementById('message').value
            };
        
            // Use EmailJS to send the form data
            emailjs.send('service_tb0q0an', 'template_0lqkpor', formData)
                .then(function(response) {
                    console.log("SUCCESS!", response.status, response.text);
                    window.location.href = "success.html"; // Redirect on success
                }, function(error) {
                    alert("Failed to send message. Please try again.");
                    console.log("FAILED...", error);
                })
                .finally(function() {
                    // Hide loader and re-enable the button after submission
                    submitButton.disabled = false;
                    loader.style.display = "none";
                    submitButton.style.color = "#fff"; // Show button text again
                });
        });