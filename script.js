$(document).ready(function() {

$("#register-form").validate(
    {
        rules:{
            name:
            {
                required:true,
                minlength:3,
                maxlength:50,
            },
            email:
            {
                required: true, 
                email:true  
            },
           
           
            phone:
            {
                required:true,
                minlength:10,
                maxlength:14
            },

            age:
            {
                required: true,
                number: true, // Ensure it's a number
                min: 18,      // Minimum age
                max: 120      // Maximum age
            },
            gender:
            {
                required:true,
                minlength:4,
                maxlength:15
            },
            address:
            {
                required:false,
                maxlength:50
            }
           
        },

        messages:{
            name:
            {
                required:"name is required",
                minlength:"name should have 3 chars",
               maxlength:"name should not exeed 50 chars" 
            },
            email:{
                required:"email is required",
                email:"your email address must be in the format of name@domain.com"
            },
           
            phone:
            {
                required:"phone number is required",
                minlength:"phone number should have 10 chars",
                maxlength:"phone number should not exeed 14 chars"
            },
            age:
            {
                required: "Please enter your age.",
                number: "Please enter a valid number.",
                min: "Age must be at least 18.",
                max: "Age must be below 120."
            },
            gender:
            {
                required:"gender is requred",
                minlength:"gender must have 4 chars",
                maxlength:"gender should not exeed 15 chars"
            },
            address:
            {
                maxlength:"address should not exeed 50 chars"
            }
    },
    submitHandler: function(form) {
        // On successful validation, you can submit the form
        $("#error-message").text("Form submitted successfully.");
        form.submit(); // This line will submit the form
    },
    invalidHandler: function(event, validator) {
        // When the form is invalid
        let errors = validator.numberOfInvalids();
        if (errors) {
            let message = "Please correct the following " + errors + " field(s):";
            $("#error-message").text(message);
        }}
});
});