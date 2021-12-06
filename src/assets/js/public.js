jQuery(document).ready(function ($) {
	
	$('#phonenumber, #cardnumber, #expirydate, #cvv').keypress(function(event) {
        var keycode = event.which;
        if (!(event.shiftKey == false && (keycode == 43 || keycode == 46 || keycode == 8 || keycode == 37 || keycode == 39 || (keycode >= 48 && keycode <= 57)))) {
            event.preventDefault();
        }
    });

	//Input validation text only
	$('#yourname, #nameoncard').bind('keyup blur', function () {
		var node = $(this);
		node.val(node.val().replace(/[^A-Za-z ']/g, ''));
	});

    $(".submit-payment").click(function() {
        var form = $("#personal-info");
        form.validate({
            errorElement: 'span',
            errorClass: 'help-block',
            rules: {
                yourname: {
                    required: true,
                },
                phonenumber: {
                    required: true,
                    minlength: 9,
                    maxlength: 14,
                },
                emailaddress: {
                    required: true,
                    email: true
                },
                cardnumber: {
                    required: true,
                },
                expirydate: {
                    required: true,
                    minlength: 4,
                    maxlength: 4,
                },
                cvv: {
                    required: true,
                    minlength: 3,
                    maxlength: 3,
                },
                nameoncard: {
                    required: true,
                },
            },
        });
    });
});