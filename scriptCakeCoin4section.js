let numero = 0;
const intervallo = setInterval(somma, 40);

function somma() {
    numero += 12530266;
    document.querySelector(".statNumber").innerHTML = numero.toLocaleString();
    if (numero === 250605320) {
        clearInterval(intervallo);
    }
    setInterval(() => {
        numero += 1
        document.querySelector(".statNumber").innerHTML = numero.toLocaleString();
    }, 7000);


}

