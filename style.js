document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("feedbackForm");
    const submitBtn = document.getElementById("submitBtn");
    const confirmationPopup = document.getElementById("confirmationPopup");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        if (validateForm()) {
            submitBtn.disabled = true;
            setTimeout(function() {
                form.reset();
                showPopup();
                submitBtn.disabled = false;
            }, 1500);
        }
    });

    function validateForm() {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const product = document.getElementById("product").value;
        const rating = document.getElementById("rating").value;
        const comments = document.getElementById("comments").value;

        if (!name || !email || !product || !rating || !comments) {
            alert("Please fill out all fields.");
            return false;
        }

        return true;
    }

    function showPopup() {
        confirmationPopup.classList.remove("hidden");
        setTimeout(function() {
            hidePopup();
        }, 3000); // Hide popup after 3 seconds
    }

    function hidePopup() {
        confirmationPopup.classList.add("hidden");
    }
});