$(document).ready(function () {
    // to remove checked value
    $('#checkbox').prop('checked', true)

    // check box -- get value 
    $('#checkbox').click(function (e) {
        // create variable to store checkbox value
        var is_published = $(this).is(":checked");
        console.log(is_published)

        $.ajax ({
            type: "POST",
            url: "",
            data: is_published,
            success: function (data) {

            },
            error: function (xhr, status, error) {
                console.log(shr)
            }
        })
    })


})