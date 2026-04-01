document.addEventListener('DOMContentLoaded', () => {
    const appointmentForm = document.getElementById('appointmentForm');
    const modal = document.getElementById('myModal');
    const closeBtn = document.querySelector('.close');
    // here i will explain step by step how each line work

    //This will hide modal by default when the page loads
    if (modal) {
        modal.style.display = "none";
    }

    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault();

            //Then it get the input values
            const nameInput = document.getElementById('name').value;
            const emailInput = document.getElementById('email').value;
            const timeSlotSelect = document.getElementById('time-slot');
            const selectedText = timeSlotSelect.options[timeSlotSelect.selectedIndex].text;

            // this is to validate the form inputs, if any of the fields are empty, it will show an alert and stop the form submission. though adding required attribute in html will also do the same job but this is an extra validation to ensure that the user fills out all necessary information before proceeding.
            if (nameInput.trim() === "") {
                alert("Please enter your name.");
                return;
            }
            if (emailInput.trim() === "") {
                alert("Please enter your email.");
                return;
            }
            if (timeSlotSelect.value === "") {
                alert("Please select a preferred time slot.");
                return;
            }

            // this part inject the modal with the user's name and the selected time slot. It uses tthe wtitten template below to create a personalized message that will be displayed in the modal. The querySelector method is used to find the h2 and p elements inside the modal content, which are then updated with the appropriate text.
            // Note: We use querySelector to find the h2 and p inside the modal content
            const modalTitle = modal.querySelector('h2');
            const modalBody = modal.querySelector('p');

            modalTitle.textContent = `Hi ${nameInput}`;
            modalBody.textContent = `We have received your message, and we'll attend to you in the ${selectedText}.`;

            // this would display the modal by setting its display style to block. remember that the intial value is display: none, so it changes to display block. This makes the modal visible on the screen, allowing the user to see the confirmation message after submitting the form.
            modal.style.display = "block";

            // this simply eset the form
            appointmentForm.reset();
        });
    }

    // when the user click the × ,the modal will be closed by setting its display style back to none. This allows the user to dismiss the modal after reading the confirmation message.
    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.style.display = "none";
        }
    }

    // this part closes the modal if the user clicks anywhere outside of the modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

function redirect() {
    window.location.href = "product.html";
    
}