// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./kiln.js";


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

// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list