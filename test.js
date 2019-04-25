const TAX_RATE = 0.08;
// const PHONE_PRICE = 99.99;

const ACCESSORY_PRICE = 9.99;
var balance = prompt("Какой баланс карты?");
var limit = prompt("Какой лимит растрат?");
var expences=0;

function calculateFullAmount(price, accessoryPrice, tax){
    return ( price * tax ) + price + accessoryPrice + ( accessoryPrice * tax );  
}
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min) ;

  }


while (limit >= expences ){
    const PHONE_PRICE = getRandomArbitrary(100, 1000);
    var FULL_PRICE = calculateFullAmount(PHONE_PRICE, ACCESSORY_PRICE, TAX_RATE);
    if(limit - expences < FULL_PRICE){
        break;
    }
    balance = balance - FULL_PRICE;
    expences= expences + FULL_PRICE; 
    console.log(`Куплен телефон. Цена телефона: ${PHONE_PRICE} USD.
        Цена чехла: ${ACCESSORY_PRICE} USD. ИТОГО:${FULL_PRICE.toFixed(2)} USD.  `); 

}
console.log('---------------------------------------------------------------------');
console.log(`Остаток на счету: ${balance} USD. Остаток лимита ${limit-expences} USD`);