// informazioni passeggero

var yourDistance = parseInt(prompt("Quanti km devi percorrere?"));
console.log("Km da percorrere:", yourDistance, "km");
var yourAge = parseInt(prompt("Quanti anni hai?"));
console.log("Età del passeggero:", yourAge, "anni");

var discount_20;
var discount_40;
var ticketPrice;

//dichiarazione costanti

const PRICEFORKM = 0.21;
const DISC_20 = 0.2;
const DISC_40 = 0.4;

//calcolo prezzo biglietto

if (yourAge >= 18 && yourAge <= 65) {
  ticketPrice = (yourDistance * PRICEFORKM).toFixed(2);
  //console.log("Prezzo Biglietto - Tariffa Piena: ", ticketPrice, "euro.");
  document.getElementById("ticket-price").innerHTML =
    "Prezzo Biglietto - Tariffa Piena: " + ticketPrice + " euro.";
} else if (yourAge < 18) {
  discount_20 = (yourDistance * PRICEFORKM * DISC_20).toFixed(2);
  ticketPrice = (yourDistance * PRICEFORKM - discount_20).toFixed(2);
  //console.log("Prezzo Biglietto - Tariffa Under 18: ", ticketPrice, "euro.");
  document.getElementById("ticket-price").innerHTML =
    "Prezzo Biglietto - Tariffa Under 18: " + ticketPrice + " euro.";
} else if (yourAge > 65) {
  discount_40 = (yourDistance * PRICEFORKM * DISC_40).toFixed(2);
  ticketPrice = (yourDistance * PRICEFORKM - discount_40).toFixed(2);
  //console.log("Prezzo Biglietto - Tariffa Over 65: ", ticketPrice, "euro.");
  document.getElementById("ticket-price").innerHTML =
    "Prezzo Biglietto - Tariffa Over 65: " + ticketPrice + " euro.";
}

//inizio dati su HTML

//info passeggero

document.getElementById("distance").innerHTML =
  "Km da percorrere: " + yourDistance + " km";

document.getElementById("age").innerHTML =
  "Età passeggero: " + yourAge + " anni";

//fine dati su HTML
