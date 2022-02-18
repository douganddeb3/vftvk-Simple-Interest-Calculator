
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText= `${rateval}%`;
}
function compute()
{
    
    var principal = parseFloat(document.getElementById("principal").value);
    var prin=document.getElementById("principal");
    var rate = document.getElementById("rate").value;
    var years = parseInt(document.getElementById("years").value);
    var interest = principal * years * parseFloat(rate) /100;
    var year = new Date().getFullYear()+parseInt(years);
    var result= document.getElementById("result");
    var balance=principal + interest;
    if(principal<= 0 || prin.value.length==0){
        alert("Amount must be greater than 0.");
        document.getElementById("principal").focus();
        result.innerHTML="";
    }else{
    result.innerHTML=`If you deposit <span class="number">$${principal.toFixed(2)}</span>,<br/>
    at an interest rate of <span class="number">${rate}%</span>,<br/>
    you will receive an amount of <span class="number">$${interest.toFixed(2)}</span>, <br/>
    in the year ${year}.<br/>
    Your balance in <span class="number">${year}</span><br/>
    will be <span class="number">$${balance.toFixed(2)}.</span>`;
    }
}
        