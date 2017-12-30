var baumkonfig;
(function (baumkonfig) {
    function loadInfo() {
        baumkonfig.baeume.push({ preis: 19.90, sorte: "Nordmanntanne" });
        baumkonfig.baeume.push({ preis: 19.90, sorte: "Fichte" });
        baumkonfig.baeume.push({ preis: 99.90, sorte: "Edeltanne" });
        baumkonfig.baeume.push({ preis: 19.90, sorte: "Kiefer" });
        baumkonfig.halterungen.push({ preis: 14.90, farbe: "grün" });
        baumkonfig.halterungen.push({ preis: 14.90, farbe: "schwarz" });
        baumkonfig.schmuck.push({ preis: 0.90, unterkat: "Kerze" });
        baumkonfig.schmuck.push({ preis: 9.90, unterkat: "Lichterkette" });
        baumkonfig.schmuck.push({ preis: 0.90, unterkat: "Kugel", farbe: "rot" });
        baumkonfig.schmuck.push({ preis: 0.90, unterkat: "Kugel", farbe: "gold" });
        baumkonfig.schmuck.push({ preis: 0.90, unterkat: "Kugel", farbe: "blau" });
        baumkonfig.schmuck.push({ preis: 0.90, unterkat: "Kugel", farbe: "grün" });
        baumkonfig.schmuck.push({ preis: 0.50, unterkat: "Anhänger" });
        baumkonfig.schmuck.push({ preis: 4.90, unterkat: "Lametta", farbe: "rot" });
        baumkonfig.schmuck.push({ preis: 4.90, unterkat: "Lametta", farbe: "gold" });
        baumkonfig.schmuck.push({ preis: 4.90, unterkat: "Lametta", farbe: "blau" });
        baumkonfig.schmuck.push({ preis: 4.90, unterkat: "Lametta", farbe: "grün" });
        console.log(baumkonfig.schmuck);
    }
    baumkonfig.loadInfo = loadInfo;
})(baumkonfig || (baumkonfig = {}));
//# sourceMappingURL=Produktinformationen.js.map