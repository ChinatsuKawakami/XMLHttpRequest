

var currencyUSD="USD";
var currencyEURO="EUR";
var btnU = document.querySelector("#btnU");
var btnE = document.querySelector("#btnE");
var priceEdis = document.querySelector("#priceEur");
var priceUdis = document.querySelector("#priceUsd");
var url = "https://api.coindesk.com/v1/bpi/currentprice.json";


if(btnU != null){
btnU.addEventListener("click",function(){

var XH = new XMLHttpRequest();
XH.onreadystatechange = function(){

    if(XH.readyState == 4 && XH.status == 200){
        var resText = XH.responseText;
        var data = JSON.parse(resText);
        var priceU = data.bpi[currencyUSD].rate;
       
       
        priceUdis.innerHTML = priceU +" "+currencyUSD;
        
    }
}

XH.open("GET",url);
XH.send();
})
}

if(btnE != null){
btnE.addEventListener("click",function(){
   
   
    var XH = new XMLHttpRequest();
    XH.onreadystatechange = function(){
    
        if(XH.readyState == 4 && XH.status == 200){
            var resText = XH.responseText;
            var data = JSON.parse(resText);
            var priceE = data.bpi[currencyEURO].rate;
    
           
            priceEdis.innerHTML = priceE + " " + currencyEURO;
        }
    
    }

    
XH.open("GET",url);
XH.send();

})
}