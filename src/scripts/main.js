
var countDownDate = new Date("jun 4, 2024, 15:00:00").getTime();


var x = setInterval(function () {

    
    var now = new Date().getTime();

    
    var distance = countDownDate - now;

    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("bdaycountdown").innerHTML = days + " dias " + hours + " horas "
        + minutes + " minutos " + seconds +" segundos";


    if (distance < 0) {
        clearInterval(x);
        document.getElementById("bdaycountdown").innerHTML = "É HOJEEEEEE";
    }
}, 1000);