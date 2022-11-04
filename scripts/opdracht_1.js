//Opdracht 1 - Array Methoden
//Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de console.

const tvType = inventory.map((inventory) => {
    return inventory.type;
})

console.log(tvType);

//Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn. Log de uitkomst in de console.

const soldOut = inventory.filter((inventory) => {
    if ( ( inventory.originalStock - inventory.sold ) <= 0)
        return true
})

console.log(soldOut)

//Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken. Log de uitkomst in de console.

const ambiLight = inventory.filter((inventory) => {
    return inventory.options.ambiLight === true
})

console.log(ambiLight)

//Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de console.

const arrayPrice = inventory.map((inventory) => {
    return inventory.price;
})

const sortedPrice = arrayPrice.sort((a, b) => a - b);

console.log(sortedPrice)

