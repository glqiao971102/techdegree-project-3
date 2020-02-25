//the name input is ready for a user type when the page reload
$('#name').focus();


//”Job Role” section
// create a html input field, but hide it, once the user choose the Other in the selection
// and then only it show 
$('#other-title').hide();
//the change event is for check the option of select, if the option is 'other' the 'hide' input will show 
$('#title').on("change", () => {
    if($('#title option:selected').val() != "other")
    {
        //effect for  hide the input
        $('#other-title').slideUp();

    }else{
        //effect for show the input
        $('#other-title').slideDown();
    }
});

//”T-Shirt Info” section
//hide the All color option first when that is no any T-shirt theme is select. And show the new option
$('#color').hide();
$('#color').html('<option>Please select a T-shirt theme</option>');
$('#color').show();


$('#design').on("change", () => {
    //when the user is select any theme, I hide the new option which is 'Please select a T-shirt theme'
    //if the user choose the Theme is JS puns, show the 3 color
    if($('#design option:selected').text() == "Theme - JS Puns")
    {
        
        $('#color').hide();
        $('#color').html('<option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option><option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option> <option value="gold">Gold (JS Puns shirt only)</option> ');
        $('#color').show();
        
    // else if the user choose the Theme is I ♥ JS, it show the 3 color    
    }else if($('#design option:selected').text() == "Theme - I ♥ JS"){
        $('#color').hide();
        $('#color').html('<option value="tomato">Tomato (I &#9829; JS shirt only)</option><option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option><option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option> ');
        $('#color').show();
    }// when the user is choose other than this 2 option, the color option go back and show the 'Please select a T-shirt theme'
    else {

        $('#color').hide();
        $('#color').html('<option>Please select a T-shirt theme</option>');
        $('#color').show();

    }
});


//”Register for Activities” section
const checkboxes = $('.activities label input')

//this event is to add the class which is call 'selected'
//if the user check the selected checkbox, it will add the class 'selected'
//else if the user uncheck the checkbox, it will remove the class
$(".addClass").prop("checked", false);
$(".addClass").click(function () {

        if ($(this).is(":checked")) {

            //checked
            $(this).addClass("selected");

        } else {
            //unchecked
            $(this).removeClass("selected");
        }
// this is to show the total price of the all checked checkbox       
        let totalPrice = 0
        for(let i = 0; i < checkboxes.length; i ++){
            
// only if the checkbox's class name is 'addClass selected'
// then only add the total cost to the totalPrice Variable
            
            if(checkboxes[i].className == 'addClass selected'){
    
                totalPrice += parseInt(checkboxes[i].getAttribute('data-cost'))
                
            }
    
            
        }
//I manual add the html tag and show the totalprice of the all checkedbox
        $('.totalPrice').html(`<p>Total Price: ${totalPrice}</p>`)

    })


//”Register for Activities” section part 2
// this is to disable the check option when the one of the checked in same time is checked
checkboxes.on('change', e => {

    
    // when the js-frameworks is checked, the other same time check box which is 'express' will be disabled
    if ($('input[name="js-frameworks"]').is(':checked')){

        $('input[name="express"]').attr('disabled', true)
    // the else is when the js-frameworks in unchecked, it allow the 'express' function again
    }else {

        $('input[name="express"]').attr('disabled', false)

    }

    // the other if else also same function
    // Please correct me and suggest me the other solution, I think I am doing DRY programming here....
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
//I hide 113 line in the html file to make the credit card option is select by default
// the paypal and bitcoin explaination is hide at first
$('#paypal').hide()
$('#bitcoin').hide()

//This event is to hide the option and show the user selected
$('#payment').on("change", () => {
    
    //this is to only show the all credit card input, and hide the paypal and bitcoin
    if($('#payment option:selected').text() == "Credit Card")
    {   
        $('#credit-card').show()
        $('#paypal').hide()
        $('#bitcoin').hide()
        
    }
    //this is to only show the all paypal explain, and hide the credit card and bitcoin
    else if($('#payment option:selected').text() == "PayPal"){
        
        $('#paypal').show()
        $('#credit-card').hide()
        $('#bitcoin').hide()

    //this is to only show the all paypal bitcoin, and hide the credit card and explain
    }else if($('#payment option:selected').text() == "Bitcoin"){
        
        $('#bitcoin').show()
        $('#paypal').hide()
        $('#credit-card').hide()
        
    }
});

//this function is to check the email input value is on correct format or not, for example 'glqiao971102@gmail.com'
function isValidEmail(email) {

    return /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);
  

}

//this function is to check the first credit card input value is on correct format or not, it only allow the user the enter the digit which is 13 - 16 length
function isValidCredit(credit) {

    return /[0-9]{13}|[0-9]{16}/.test(credit)

}

//this function is to check the second credit card which is zip code input value is on correct format or not, it only allow the user the enter digit which is 5 length
function isValidZip(zip) {

    return /[0-9]{5}/.test(zip)

}

//this function is to check the third credit card which is cvv input value is on correct format or not, it only allow the user the enter digit which is 3 length
function isValidCVV(cvv) {

    return /[0-9]{3}/.test(cvv)

}


//this is to check whether the user is type the correct input value in the name, email, credit card, activity register
//when the user does not input correct value, it will prevent the submit button the submit the form 
//the wrong input will show the error message and have the red color border
$('button').on('click', e =>{

    

    const nameInput = $('#name').val();
    const emailInput = $('#mail').val();
    const creditCardInput = $('#cc-num').val()
    const zipInput = $('#zip').val()
    const cvvInput = $('#cvv').val()

    //this is for the name input, which no allow user to empty the input
    if (nameInput == '') {

        e.preventDefault();
        $("#name").css("border-color", "red");
        $('#name').next().html('<span class="temporary-error-name" style="color:red"><b>Please provide a proper name<b><span>')
        
        
    }else{

        $("#name").css("border-color", "green");
        $('.temporary-error-name').remove()

    }
    
    //this is for the email input, which is combine with isValidEmail(email) function
    if(!isValidEmail(emailInput) || emailInput === '') {

        e.preventDefault();
        $("#mail").css("border-color", "red");
        $('#mail').next().html('<span class="temporary-error-email" style="color:red"><b>Please provide a proper email<b><span>')

    }else{

        $("#mail").css("border-color", "green");
        $('.temporary-error-email').remove()

    }

    //this is for the activity register checkbox , which make the user must select at least 1 cource
    if($('.selected').length <= 0) {

        e.preventDefault();
        $(".activities").css("border-color", "red");
        $('.activetiesLegend').next().html('<span class="temporary-error-selected" style="color:red"><b>Please at least choose 1 module<b><span>')

    }else {

        $(".activities").css("border-color", "green");
        $('.temporary-error-selected').remove()
    }
    
    //this is for the credit card first input, which check the isValidCredit(credit) function
    if($('#payment option:selected').text() == "Credit Card" && !isValidCredit(creditCardInput)) {

        e.preventDefault();
        $("#cc-num").css("border-color", "red");
        $('#cc-num').attr('placeholder', 'Please type 13 - 16 digits')


    }else{

        $("#cc-num").css("border-color", "green");
        $('#cc-num').attr('placeholder', '')

    }
    
    //this is for the credit card second input, which check the isValidZip(zip) function
    if($('#payment option:selected').text() == "Credit Card" && !isValidZip(zipInput)) {

        e.preventDefault();
        $("#zip").css("border-color", "red");
        $('#zip').attr('placeholder', 'Your Postcode ')


    }else {

        $("#zip").css("border-color", "green");
        $('#zip').attr('placeholder', '')
    }
    
    //this is for the credit card third input, which check the isValidCVV(cvv) function
    if($('#payment option:selected').text() == "Credit Card" && !isValidCVV(cvvInput)) {

        e.preventDefault();
        $("#cvv").css("border-color", "red");
        $('#cvv').attr('placeholder', '3 digits CVV ')



    }else{
        
        $("#cvv").css("border-color", "green");
        $('#cvv').attr('placeholder', '')
        
    
    }
    
    //when the input is correct format, it allow the button to send the form as default


})