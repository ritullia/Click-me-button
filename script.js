/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
console.log("veikia")


const clickBtn = document.getElementById('btn__element');

let count = 0

function countClicks() {

    count++;

    let countClick = document.getElementById('btn__state');

    countClick.innerHTML = count;
}

clickBtn.addEventListener('click', countClicks)