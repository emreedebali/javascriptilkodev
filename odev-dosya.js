let infoName =prompt("Adınızı Giriniz") 

function showTime() {
    
    let info = document.querySelector("#myName")

    info.innerHTML = infoName

    let myClock = document.querySelector("#myClock")
    const date = new Date();
    const days = [
    "Pazar",    
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
    ];     
    myClock.innerHTML =  
    `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${days[date.getDay()]}`;

}
     

     setInterval(showTime, 1000);


     
    