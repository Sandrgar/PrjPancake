// Calculating Supply

let circSupply = 0;
const intervallo = setInterval(somma, 5);

function somma() {
    circSupply += 1234567;
    document.querySelector(".circSupply").innerHTML = circSupply.toLocaleString();
    if (circSupply > 200605320) {
        clearInterval(intervallo);
    }
}

setInterval(() => {
    circSupply += 13
    document.querySelector(".circSupply").innerHTML = circSupply.toLocaleString();
}, 5000);



// Total supply

let totalSupply = 0;
const intervallo2 = setInterval(somma2, 5);

function somma2() {
    totalSupply += 1234567;
    document.querySelector(".totalSupply").innerHTML = totalSupply.toLocaleString();
    if (totalSupply > 385671342) {
        clearInterval(intervallo2);
    }
}



// // Burned to date

let burnedToDate = 0;
const intervallo3 = setInterval(somma3, 5);

function somma3() {
    burnedToDate += 2345678;
    document.querySelector(".burnedToDate").innerHTML = burnedToDate.toLocaleString();
    if (burnedToDate > 826186824) {
        clearInterval(intervallo3);
    }
}

