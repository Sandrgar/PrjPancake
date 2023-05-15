let numero = 0;
const intervallo = setInterval(somma, 5);

function somma() {
    numero += 1234567;
    document.querySelector(".statNumber").innerHTML = numero.toLocaleString();
    if (numero > 200605320) {
        clearInterval(intervallo);
    }
    setInterval(() => {
        numero += 1
        document.querySelector(".statNumber").innerHTML = numero.toLocaleString();
    }, 7000);


}

