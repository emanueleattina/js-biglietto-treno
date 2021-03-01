//numero di km da percorrere ed età del passeggero
//prezzo del viaggio 0,21€ al km
// ai <18 sconto del 20%
// ai >65 sconto del 40%

var nome
var km
var eta
var prezzoParz
var prezzoTot
var scontoPerc
var scontoEffettivo

nome = prompt("Come ti chiami?");
console.log(nome);

km = prompt("Ciao " + nome + ", per quanti km devi viaggiare?");
console.log(km);

eta = prompt("Bene " + nome + ", quanti anni hai?");
console.log(eta);

if (eta < 18)
{
  scontoPerc = 20;
  prezzoParz = km * 0.21;
  scontoEffettivo = (prezzoParz * scontoPerc) / 100;
  prezzoTot = prezzoParz - scontoEffettivo;

  document.getElementById('prezzo').innerHTML = "Bene " + nome + "!<br>Il prezzo del tuo viaggio è di " + prezzoParz + "€, ma dato che hai meno di 18 anni è stato applicato uno sconto del " + scontoPerc + "%. Pagherai un totale di " + prezzoTot.toFixed(2) + "€.";
} 
else if (eta >= 65)
{
  scontoPerc = 40;
  prezzoParz = km * 0.21;
  scontoEffettivo = (prezzoParz * scontoPerc) / 100;
  prezzoTot = prezzoParz - scontoEffettivo;

  document.getElementById('prezzo').innerHTML = "Bene " + nome + "!<br>Il prezzo del tuo viaggio è di " + prezzoParz + "€, ma dato che hai più di 65 anni è stato applicato uno sconto del " + scontoPerc + "%. Pagherai un totale di " + prezzoTot.toFixed(2) + "€.";
}
else
{
  prezzoParz = km * 0.21;
  prezzoTot = prezzoParz;

  document.getElementById('prezzo').innerHTML = "Bene " + nome + "!<br>Il prezzo del tuo viaggio è di " + prezzoTot.toFixed(2) + "€.<br>Purtroppo non rientri nell'età per una scontistica, ripassa fra " + (65 - eta) + " anni o torna indietro nel tempo di " + (eta - 18) + " anni."
}