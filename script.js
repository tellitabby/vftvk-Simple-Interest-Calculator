///CHecking the input value, so it 0 or more
function inputValidation()
{
    var principal = document.getElementById("principal");
    if (principal.value<=0){
        alert("Enter a positive number");
        principal.focus();
        return false;
    }
    return true;
}

/// Calculating the interest rate that based on the year, input year and rate => writing out (my own modified) text
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = (principal * years * rate) /100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML = "<br/> By depositing <mark>" + principal+"</mark>, <br/> with the interest rate <mark>" + rate+"</mark>%. <br/>You will receive <mark>" + interest + "</mark> <br/> in year" + year + "</mark>...";
}

/// Displaying the results. 
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        