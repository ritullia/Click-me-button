/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
console.log("veikia")


const clickBtn = document.getElementById('btn__element');

console.log(clickBtn)

clickBtn.addEventListener('click', (() => {
    console.log("u clicked")
}))