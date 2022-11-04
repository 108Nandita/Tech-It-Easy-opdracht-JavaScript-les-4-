// Opdracht 3a: Gebruik een array-methode om alle tv merken (zoals Philips, NIKKEI, etc.) in een lijst op de pagina weer te geven. Zorg ervoor dat dit ook zou werken als we 200 tv's in onze array zouden hebben staan. Dat er dubbele namen in zitten, is niet erg.

const tvBrand = inventory.map((brand) => {
    return brand.brand;
    })

console.log(tvBrand)

//const nameOfBrandEl = document.getElementById('name-of-brand')
//nameOfBrandEl.textContent = tvBrand

const tableField = document.getElementById('table-field')

inventory.map((tv) => {
    return tableField.innerHTML += ` 
        <tr>
            <td id="name-of-brand">${ tv.brand }</td>
        </tr>
    `
})

//Opdracht 3b: Schrijf de code uit 3a om naar een functie die een array met tv-objecten verwacht. Het is handig om onze scripts als functies op te zetten, zodat we ze gemakkelijk kunnen hergebruiken. Tip: vergeet deze functie -declaratie niet aan te roepen!
// Opdracht 4 -Functies

function brandTV (array){
return array.map((tv) => tv.brand)
}
console.log(brandTV(inventory))