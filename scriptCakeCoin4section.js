const container = document.querySelector('.mainBuyCakeContainer');
container.addEventListener('mouseover', startEvent);

function startEvent() {

    // ------Circulating supply script

    let circSupply = 0;
    const interval = setInterval(increment, 7);

    function increment() {
        circSupply += 1234567;
        document.querySelector(".circSupply").innerText = circSupply.toLocaleString();
        if (circSupply > 200605320) {
            clearInterval(interval);
        }
    }

    setInterval(() => {
        circSupply += 13
        document.querySelector(".circSupply").innerText = circSupply.toLocaleString();
    }, 5000);



    // ------Total supply script

    let totalSupply = 0;
    const interval2 = setInterval(increment2, 6);

    function increment2() {
        totalSupply += 1234567;
        document.querySelector(".totalSupply").innerText = totalSupply.toLocaleString();
        if (totalSupply > 385671342) {
            clearInterval(interval2);
        }
    }



    // ------Burned to date script

    let burnedToDate = 0;
    const interval3 = setInterval(increment3, 5);

    function increment3() {
        burnedToDate += 2345678;
        document.querySelector(".burnedToDate").innerText = burnedToDate.toLocaleString();
        if (burnedToDate > 826186824) {
            clearInterval(interval3);
        }
    }

    container.removeEventListener('mouseover', startEvent);
}

