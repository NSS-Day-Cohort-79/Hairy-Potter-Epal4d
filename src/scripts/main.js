// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./kiln.js";
import { toSellOrNotToSell } from "./potteryCatalog.js";
import { usePottery } from "./potteryCatalog.js"

const sellPotteryArray = usePottery

// Make 5 pieces of pottery at the wheel
const mug = makePottery("Mug", 2, 4);
const platter = makePottery("Platter", 8, 1);
const bowl = makePottery("Bowl", 3, 3);
const vase = makePottery("Vase", 5, 9);
const plate = makePottery("Plate", 6, 2);


// Fire each piece of pottery in the kiln
const firedMug = firePottery(mug, 1750);
const firedPlatter = firePottery(platter, 2250);
const firedBowl = firePottery(bowl, 2100);
const firedVase = firePottery(vase, 2400);
const firedPlate = firePottery(plate, 1950);

console.log(firedMug)
console.log(firedPlatter)
console.log(firedBowl)
console.log(firedVase)
console.log(firedPlate)

// Determine which ones should be sold, and their price
 const checkMug = toSellOrNotToSell(firedMug)
 console.log(checkMug)

 const checkPlatter = toSellOrNotToSell(firedPlatter)
 console.log(checkPlatter)

 const checkBowl = toSellOrNotToSell(firedBowl)
 console.log(checkBowl)

 const checkVase = toSellOrNotToSell(firedVase)
 console.log(checkVase)

 const checkPlate = toSellOrNotToSell(firedPlate)
 console.log(checkPlate)


// Invoke the component function that renders the HTML list