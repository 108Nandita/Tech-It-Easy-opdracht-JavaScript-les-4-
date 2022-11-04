//Opdracht 4 -Functies
// Maak deze gehele opdracht eerst alsof je het voor één tv doet. We gaan één tv weergeven in het volgende format:

// Philips 43PUS6504/12 - 4K TV
// €379,-
// 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)
// Opdracht 4a: Maak een herbruikbare functie die een string genereert voor de naam van één tv en deze teruggeeft in het format [merk] [type] - [naam] zoals Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV.
//

function nameTv (tv){
    return `${tv.brand} ${tv.type} - ${tv.name}`;
}

nameTv(inventory[1])

// const nameTvArray = inventory.map((tv) => {
  //  return nameTv(tv.brand, tv.type, tv.name)
//    })
//console.log(nameTvArray)
// Opdracht 4b: Maak een herbruikbare functie die de prijs van één tv als parameter verwacht (zoals 379 of 159) teruggeeft in het format €379,- of €159,-.
//

function priceTv (price){
    return `€${price},-`;
}

// Opdracht 4c: Maak een herbruikbare functie die een string genereert voor alle beschikbare schermgroottes van één tv. De functie geeft dit terug in het format [schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm) etc. Als een tv maar één schermgrootte heeft ([32]) wordt de output 32 inch (81 cm). Wanneer een tv vier schermgroottes heeft ([43, 50, 55, 58]) wordt de output 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm). Let op: om één string te genereren uit een array van schermgroottes zul je een for-loop voor moeten gebruiken.
//

function inchCmTv (inputArray){
    let output = '';

    for (let i = 0; i < inputArray.length; i++) {
        const sizeInInches = inputArray[i];
        const sizeInCm = inputArray[i] * 2.54;

        output = output + `${sizeInInches} inch (${sizeInCm})cm`

    if ( i < inputArray.length - 1){
        output = `${output} |`;
     }
    }

    return output;
 }

// Opdracht 4d: Schrijf een script die de informatie van de Philips 43PUS6504/12 tv weergeeft op de pagina zoals onderstaand voorbeeld. Gebruik de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.
//
// Philips 43PUS6504/12 - 4K TV
// €379,-
// 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)

const tvInfo = document.getElementById(`tv-info`)

tvInfo.innerHTML = `   
    
    <h3>${nameTv(inventory[3])}</h3>
    <h4>${priceTv(inventory[3].price)}</h4>
    <p>${inchCmTv(inventory[3].availableSizes)}</p>
`;


// Opdracht 4e: Maak een herbruikbare functie die de informatie van alle tv's weergeeft op de pagina. Gebruik hiervoor de map-methode in combinatie met de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.

function listOfStock (arrayTv) {
const tvPresentStock = document.getElementById(`present-stock`);
const modelsTvPresentStock = arrayTv.map((tv_model) => {
   return`
<li>
   <h3>${nameTv(tv_model)}</h3>
    <h4>${priceTv(tv_model.price)}</h4>
    <p>${inchCmTv(tv_model.availableSizes)}</p>
    <br>
 </li>
`;
});
tvPresentStock.innerHTML =`${modelsTvPresentStock}`;
}

listOfStock(inventory)





