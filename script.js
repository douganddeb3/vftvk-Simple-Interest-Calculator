
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
        result.innerHTML="";
        alert("Amount must be greater than 0.");
        document.getElementById("principal").focus(); 
        return;  
    }else{
    result.innerHTML=`<span class="roww">If you deposit </span><span class="number">$${principal.toFixed(2)}</span>,<br/>
    <span class="roww">at an interest rate of </span><span class="number">${rate}%</span>,<br/>
    <span class="roww">you will receive an amount of </span> <span class="number">$${interest.toFixed(2)}</span>, <br/>
    <span class="roww">in the year </span><span class="number">${year}.</span><br/>
    <span class="roww">Your balance in </span><span class="number">${year}</span><br/>
    <span class="roww">will be <span><span class="number">$${balance.toFixed(2)}.</span>`;
    }
}
        