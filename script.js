        // Vanilla JS Interactions 
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Simple Checkout/Lead Generation Alert System
        function handleCheckout(planName, price) {
            // In a real app, this would route to Razorpay, Instamojo, or a form.
            alert(`You selected the ${planName} at ₹${price}.\n\nIn a live environment, this would redirect you to a payment gateway (like Razorpay) or open a quick signup form.`);
        }

        // Contact Form Submission Handler
        function handleFormSubmit(event) {
            event.preventDefault();
            alert("Thank you! Your message has been sent successfully. We will get back to you shortly.");
            event.target.reset(); // Clear the form fields
        }
    