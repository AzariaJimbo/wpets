$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.users-table').DataTable({
        responsive: true
    });
    $('select').formSelect();

    // modal
    $('#delete-modal').modal({
        opacity: 0.8,
        endingTop: '35%'
    });
    $('#edit-modal').modal();

    // to remove checked value
    //$('#checkbox').prop('checked', true)
    // check-box -- 
    $('.check-box').click(function (e) {
        // create variable to store checkbox value
        var is_published = $(this).is(":checked");
        var id = $(this).val();

        // send data via ajax
        $.ajax({
            method: "POST",
            url: "adminAction",
            data: {
                published: is_published,
                record_id: id
            },
            success: function (data) {
                console.log(data)
            }
        })
    })
    
    // delete
    $('.delete-btn').click(function (e) {
        // delete-btn
        console.log($(this).val())

        $.ajax({
            method: "POST",
            url: "delete",
            data: {id: $(".id-text").val()},
            success: function (data) {
                console.log(data)
            }
        })
    })
})