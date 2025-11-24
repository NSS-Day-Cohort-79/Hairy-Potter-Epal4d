import { usePottery } from "./potteryCatalog.js"

const potteryCatalog = usePottery()

export const potteryList = (potteryCatalog) => {
    let potteryListHTML = ""
        for (const pottery of potteryCatalog) {
            potteryListHTML +=`
            <section class="pottery id= "pottery-${pottery.id}">
                <h2 class="potter__shape">${pottery.shape}</h2>
                <div class= "pottery__properties">
                    Item weighs ${pottery.weight} grams and is ${pottery.height} cm in height
                </div>
                <div class="pottery__price">Price is $${pottery.price}</div>
                </article>
            `
        }
    return potteryListHTML
}