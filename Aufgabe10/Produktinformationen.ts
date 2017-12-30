namespace baumkonfig {

    export interface InfoBaum {
        preis: number;
        sorte: string;
    }

    export interface InfoSchmuck {
        preis: number;
        unterkat: string;
        farbe?: string;
    }

    export interface InfoHalterung {
        preis: number;
        farbe: string;
    }

    export function loadInfo(): void {
        baeume.push({preis: 19.90, sorte: "Nordmanntanne"});
        baeume.push({preis: 19.90, sorte: "Fichte"});
        baeume.push({preis: 99.90, sorte: "Edeltanne"});
        baeume.push({preis: 19.90, sorte: "Kiefer"});

        halterungen.push({preis: 14.90, farbe: "grün"});
        halterungen.push({preis: 14.90, farbe: "schwarz"});

        schmuck.push({preis: 0.90, unterkat: "Kerze"});
        schmuck.push({preis: 9.90, unterkat: "Lichterkette"});
        schmuck.push({preis: 0.90, unterkat: "Kugel", farbe: "rot"});
        schmuck.push({preis: 0.90, unterkat: "Kugel", farbe: "gold"});
        schmuck.push({preis: 0.90, unterkat: "Kugel", farbe: "blau"});
        schmuck.push({preis: 0.90, unterkat: "Kugel", farbe: "grün"});
        schmuck.push({preis: 0.50, unterkat: "Anhänger"});
        schmuck.push({preis: 4.90, unterkat: "Lametta", farbe: "rot"});
        schmuck.push({preis: 4.90, unterkat: "Lametta", farbe: "gold"});
        schmuck.push({preis: 4.90, unterkat: "Lametta", farbe: "blau"});
        schmuck.push({preis: 4.90, unterkat: "Lametta", farbe: "grün"});

        console.log(schmuck);
    }
}