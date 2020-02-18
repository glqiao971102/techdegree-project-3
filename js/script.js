$('#name').focus();


//”Job Role” section
$('#other-title').hide();
$('#title').on("change", () => {
    if($('#title option:selected').val() != "other")
    {
        
        $('#other-title').slideUp();

    }else{

        $('#other-title').slideDown();
    }
});