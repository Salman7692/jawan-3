salman = [{ company: "Toshiba", model: "core i3", price: "$278", ram: 6, rom: 12 },
{ company: "Toshiba", model: "core i7", price: "$408", ram: 4, rom: 22 },
{ company: "Toshiba", model: "quad core", price: "$230", ram :7, rom: 22 },
{ company: "Dell", model: "pentium 4", price: "$38", ram: 6, rom: 7 },
{ company: "Dell", model: "core i12", price: "$978", ram: 6, rom: 12 },
{ company: "Dell", model: "core i9", price: "$1078", ram: 8, rom: 120 },
{ company: "hp", model: "core i7", price: "$178", ram: 9, rom: 183 },
{ company: "hp", model: "core i12", price: "$178", ram: 6, rom: 29 },
{ company: "hp", model: "core 2 duo", price: "$122", ram: 4, rom: 160 }]


let x = salman.map(function (e) {
    return (e.company);})

b = [...new Set(x)];
b.map(function (e, i) {
    document.getElementById("name").innerHTML += `<option value="${e}">${e}</option>`;})

function sal() {
    let x = document.getElementById("name").value;
    document.getElementById("models").innerHTML = ""
    document.getElementById("models").disabled = false;
    salman.filter(function (e) {
        if (e.company == x) {
            document.getElementById("models").innerHTML += `<option value="${e.model}">${e.model}</option>`;}})}

function khan() {
    let a = document.getElementById("name").value;
    let b = document.getElementById("models").value;
    salman.filter(function (e) {
        if (e.company == a && e.model == b) {
            document.getElementById("para").innerHTML =`Company name=${a} , model name =${b}, ram=${e.rom} , rom=${e.rom} , price=${e.price}` ;}})}