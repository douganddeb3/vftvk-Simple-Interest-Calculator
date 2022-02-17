function compute()
{
    
    var principal = parseFloat(document.getElementById("principal").value);
    if(principal<= 0){
        alert("Amount must be greater than 0.");
        document.getElementById("principal").focus();
    }
    var rate = document.getElementById("rate").value;
    var years = parseInt(document.getElementById("years").value);
    var interest = principal * years * parseFloat(rate) /100;
    var year = new Date().getFullYear()+parseInt(years);
    var result= document.getElementById("result");
    result.innerHTML=`If you deposit ${principal},<br/>
    at an interest rate of ${rate}%,<br/>
    you will receive an amount of ${interest.toFixed(2)}, <br/>
    in the year ${year}.`;
    result.style.color= 'red';
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText= `${rateval}%`;
}
        