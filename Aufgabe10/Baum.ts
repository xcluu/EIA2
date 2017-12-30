namespace baumkonfig {
    interface IntBaum {
        sorte: string;
    }

    class Baum extends Ware implements IntBaum {
        sorte: string;

        constructor(sorte: string) {
            super();
            this.sorte = sorte;
        }
    }
}