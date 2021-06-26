


//phone number restriction
function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    var filter = /(?:\d{1}\s)?\(?(\d{3})\)?-?\s?(\d{3})-?\s?(\d{4})/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

//credit card restriction
function validateCredit(creditNum){
    var a = document.getElementById(creditNum).value;
    var filter = /(\d{4}[-. ]?){4}|\d{4}[-. ]?\d{6}[-. ]?\d{5}/;
    if(filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

//date 
function disableDates(datee) {
    // Sunday is Day 0, disable all Sundays
    if (datee.getDay() === 0)
        return [false];
    return [true];
}
  

$(document).ready(function(){

    $("#tele").on("change", function(){
        if (!validatePhone("tele")){
            alert("Wrong format for phone number");
            $("#tele").val("(xxx xxx xxxx)");
            $("#tele").addClass("error");
        }
        else {
            $("#tele").removeClass("error");
        }
    });

    $("#credit").on("change", function(){
        if (!validateCredit("credit")){
            alert("Wrong format for credit card number");
            $("#credit").val("(xxxx xxxx xxxx xxxx)");
            $("#credit").addClass("error");
        }
        else {
            $("#credit").removeClass("error");
        }
    });


 



   
   


});