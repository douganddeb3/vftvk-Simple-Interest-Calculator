function compute()
{
    
    var principal = parseFloat(document.getElementById("principal").value);
    if(principal<= 0 || principal==NaN){
        alert("Amount must be greater than 0.");
        document.getElementById("principal").focus();
    }
    var rate = document.getElementById("rate").value;
    var years = parseInt(document.getElementById("years").value);
    var interest = principal * years * parseFloat(rate) /100;
    var year = new Date().getFullYear()+parseInt(years);
    var result= document.getElementById("result");
    var balance=principal + interest;
    result.innerHTML=`If you deposit ${principal},<br/>
    at an interest rate of <span class="number">${rate}%</span>,<br/>
    you will receive an amount of $<span class="number">${interest.toFixed(2)}</span>, <br/>
    in the year ${year}.<br/>
    Your balance in <span class="number">${year}</span><br/>
    will be $<span class="number">${balance}.</span>`;
    
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText= `${rateval}%`;
}
        