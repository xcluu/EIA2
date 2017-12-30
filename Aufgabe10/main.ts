namespace baumkonfig {
    export let baeume: InfoBaum[] = [];
    export let halterungen: InfoHalterung[] = [];
    export let schmuck: InfoSchmuck[] = [];

    window.addEventListener("load", init);

    function init(): void {
        loadInfo();

        addSelects();
    }


}