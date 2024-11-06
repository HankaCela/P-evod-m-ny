const rateCZkEur = 24.47;
const rateCZkGbp = 28.09;
const rateCZkUsd = 24.81;
const rateCZkBtc = 478637;

const convertToCZK = (amount, currency) => {
  if (currency.toUpperCase() === "EUR") {
    return Math.round(amount * rateCZkEur);
  } else if (currency.toUpperCase() === "GBP") {
    return Math.round(amount * rateCZkGbp);
  } else if (currency.toUpperCase() === "USD") {
    return Math.round(amount * rateCZkUsd);
  } else if (currency.toUpperCase() === "BTC") {
    return Math.round(amount * rateCZkBtc);
  } else return null;
};

document.body.innerHTML += `<h2>Převod 25 EUR do CZK</h2>`;
document.body.innerHTML += `${convertToCZK(25, "EUR")} CZK`;

document.body.innerHTML += `<h2>Převod 25 GBP do CZK</h2>`;
document.body.innerHTML += `${convertToCZK(25, "GBP")} CZK`;

document.body.innerHTML += `<h2>Převod 25 USD do CZK</h2>`;
document.body.innerHTML += `${convertToCZK(25, "USD")} CZK`;

document.body.innerHTML += `<h2>Převod 25 BTC do CZK</h2>`;
document.body.innerHTML += `${convertToCZK(25, "BTC")} CZK`;