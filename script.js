function convertToCZK(amount, currencyCode) {
    // Kurzy měn
    const exchangeRates = {
        EUR: 24.47,
        GBP: 28.09,
        USD: 24.81,
        BTC: 478637
    };

    // Kontrola, jestli je kód měny v seznamu podporovaných měn
    const rate = exchangeRates[currencyCode];
    if (rate === undefined) {
        return null;
    }

    // Převod a zaokrouhlení výsledku
    const result = Math.round(amount * rate);
    return `${result} CZK`;
}

// Test funkce
document.body.innerHTML += convertToCZK(25, 'EUR');  // Očekávaný výstup: "612 CZK"
document.body.innerHTML += "<br>" + convertToCZK(50, 'GBP');  // Očekávaný výstup: "1405 CZK"
document.body.innerHTML += "<br>" + convertToCZK(100, 'USD'); // Očekávaný výstup: "2481 CZK"
document.body.innerHTML += "<br>" + convertToCZK(0.01, 'BTC'); // Očekávaný výstup: "4786 CZK"
document.body.innerHTML += "<br>" + convertToCZK(30, 'JPY');   // Očekávaný výstup: null