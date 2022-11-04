
// Opdracht 2 - Elementen in de DOM plaatsen
// Tip: wanneer we meerdere waardes uit een array willen terugbrengen tot één getal of één string, gebruik je hier gewoon een oude vertrouwde for-loop voor!

// Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
// Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.
const amountTvSold = inventory.map((inventory) => {
    return inventory.sold;
})

const totalTvSold = amountTvSold.reduce((amountTvSold, a) => amountTvSold + a, 0);
console.log(totalTvSold);

const totalSoldTvEl = document.getElementById('total-sold-tv')
totalSoldTvEl.textContent = totalTvSold

// Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
// Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.

const originStock = inventory.map((inventory) => {
    return inventory.originalStock;
})

const sumOriginStock = originStock.reduce((originStock, a) => originStock + a, 0);
console.log(sumOriginStock);

const originalStockEl = document.getElementById('original-stock')
originalStockEl.textContent = sumOriginStock

// Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.

const recentStock = sumOriginStock - totalTvSold

const recentStockEl = document.getElementById('recent-stock')
recentStockEl.textContent = recentStock