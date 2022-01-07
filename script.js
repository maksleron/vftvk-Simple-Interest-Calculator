function compute() {
    //Get the input values and calculate the interest output value
    var principal = parseFloat(document.getElementById("principal").value);
    var stop_flag = validateAmount(principal);
    if (stop_flag == false) {
        var rate = parseFloat(document.getElementById("rate").value);
        var years = parseInt(document.getElementById("years").value);
        var interest = principal * years * rate / 100;
        var yearInTheFuture = new Date().getFullYear() + years;
        //Create the Interest output message
        document.getElementById("result").innerHTML = "Interest : If you deposit <mark>" + principal + "</mark>,<br/>" +
            "at an interest rate of <mark>" + rate + "</mark>,<br/>" +
            "You will receive an amount of <mark>" + interest + "</mark>,<br/> " +
            "in the year <mark>" + yearInTheFuture + "</mark>";
        }
}

//Update the rate value format
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

//Check for positive values
function validateAmount(principal) {
    var biggerThanZero = parseInt(principal) > 0;
    var stop_flag;
    var stop_flag = false;
    if (!biggerThanZero) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        stop_flag = true;
    }
    return stop_flag;

}