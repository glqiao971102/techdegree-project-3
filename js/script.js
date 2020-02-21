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


//”Register for Activities” section
const checkboxes = $('.activities label input')

$(".addClass").prop("checked", false);
$(".addClass").click(function () {

        if ($(this).is(":checked")) {

            //checked
            $(this).addClass("selected");

        } else {
            //unchecked
            $(this).removeClass("selected");
        }
        
        let totalPrice = 0
        for(let i = 0; i < checkboxes.length; i ++){
            
            
            if(checkboxes[i].className == 'addClass selected'){
    
                totalPrice += parseInt(checkboxes[i].getAttribute('data-cost'))
                
            }
    
            
        }

        $('.totalPrice').html(`<p>Total Price: ${totalPrice}</p>`)

    })

checkboxes.on('change', e => {

    const clicked = e.target;
    let clickedName = clicked.getAttribute('name');
    
    if ($('input[name="js-frameworks"]').is(':checked')){

        $('input[name="express"]').attr('disabled', true)

    }else {

        $('input[name="express"]').attr('disabled', false)

    }

    if ($('input[name="express"]').is(':checked')){

        $('input[name="js-frameworks"]').attr('disabled', true)

    }else {

        $('input[name="js-frameworks"]').attr('disabled', false)

    }

    if ($('input[name="js-libs"]').is(':checked')){

        $('input[name="node"]').attr('disabled', true)

    }else {

        $('input[name="node"]').attr('disabled', false)

    }

    if ($('input[name="node"]').is(':checked')){

        $('input[name="js-libs"]').attr('disabled', true)

    }else {

        $('input[name="js-libs"]').attr('disabled', false)

    }
    

    
    //$(clicked).attr('disabled', true)


    

    console.log(clicked)
    console.log(clickedName)
    
    

})
