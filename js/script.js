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

//”T-Shirt Info” section

$('#color').hide();
$('#color').html('<option>Please select a T-shirt theme</option>');
$('#color').show();

$('#design').on("change", () => {
    
    if($('#design option:selected').text() == "Theme - JS Puns")
    {
        
        $('#color').hide();
        $('#color').html('<option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option><option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option> <option value="gold">Gold (JS Puns shirt only)</option> ');
        $('#color').show();
        
        
    }else if($('#design option:selected').text() == "Theme - I ♥ JS"){
        $('#color').hide();
        $('#color').html('<option value="tomato">Tomato (I &#9829; JS shirt only)</option><option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option><option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option> ');
        $('#color').show();
    }else {

        $('#color').hide();
        $('#color').html('<option>Please select a T-shirt theme</option>');
        $('#color').show();

    }
});