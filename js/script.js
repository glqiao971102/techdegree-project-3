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
    
    

})

//"Payment Info" section
$('#paypal').hide()
$('#bitcoin').hide()

$('#payment').on("change", () => {
    
    if($('#payment option:selected').text() == "Credit Card")
    {   
        $('#credit-card').show()
        $('#paypal').hide()
        $('#bitcoin').hide()
        
    }
    else if($('#payment option:selected').text() == "PayPal"){
        
        $('#paypal').show()
        $('#credit-card').hide()
        $('#bitcoin').hide()
    }else if($('#payment option:selected').text() == "Bitcoin"){
        
        $('#bitcoin').show()
        $('#paypal').hide()
        $('#credit-card').hide()
        
    }
});


function isValidEmail(email) {

    return /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);
  

}

function isValidCredit(credit) {

    return /[0-9]{13}|[0-9]{16}/.test(credit)

}

function isValidZip(zip) {

    return /[0-9]{5}/.test(zip)

}

function isValidCVV(cvv) {

    return /[0-9]{3}/.test(cvv)

}



$('button').on('click', e =>{

    

    const nameInput = $('#name').val();
    const emailInput = $('#mail').val();
    const creditCardInput = $('#cc-num').val()
    const zipInput = $('#zip').val()
    const cvvInput = $('#cvv').val()

    if (nameInput == '') {

        e.preventDefault();
        $("#name").css("border-color", "red");
        $('#name').next().html('<span class="temporary-error-name" style="color:red"><b>Please provide a proper name<b><span>')
        
        
    }else{

        $("#name").css("border-color", "green");
        $('.temporary-error-name').remove()

    }
    
    if(!isValidEmail(emailInput) || emailInput === '') {

        e.preventDefault();
        $("#mail").css("border-color", "red");
        $('#mail').next().html('<span class="temporary-error-email" style="color:red"><b>Please provide a proper email<b><span>')

    }else{

        $("#mail").css("border-color", "green");
        $('.temporary-error-email').remove()

    }
    
    if($('.selected').length <= 0) {

        e.preventDefault();
        $(".activities").css("border-color", "red");
        $('.activetiesLegend').next().html('<span class="temporary-error-selected" style="color:red"><b>Please at least choose 1 module<b><span>')

    }else {

        $(".activities").css("border-color", "green");
        $('.temporary-error-selected').remove()
    }
    
    if($('#payment option:selected').text() == "Credit Card" && !isValidCredit(creditCardInput)) {

        e.preventDefault();
        $("#cc-num").css("border-color", "red");
        $('#cc-num').attr('placeholder', 'Please type 13 - 16 digits')


    }else{

        $("#cc-num").css("border-color", "green");
        $('#cc-num').attr('placeholder', '')

    }
    
    if($('#payment option:selected').text() == "Credit Card" && !isValidZip(zipInput)) {

        e.preventDefault();
        $("#zip").css("border-color", "red");
        $('#zip').attr('placeholder', 'Your Postcode ')


    }else {

        $("#zip").css("border-color", "green");
        $('#zip').attr('placeholder', '')
    }
    
    if($('#payment option:selected').text() == "Credit Card" && !isValidCVV(cvvInput)) {

        e.preventDefault();
        $("#cvv").css("border-color", "red");
        $('#cvv').attr('placeholder', '3 digits CVV ')



    }else{
        
        $("#cvv").css("border-color", "green");
        $('#cvv').attr('placeholder', '')
        
    
    }
    
    

        

    

    // if  ( !isValidEmail(emailInput) ) {

    //     e.preventDefault();
    //     alert('Please type correct email')
    // }
    


})