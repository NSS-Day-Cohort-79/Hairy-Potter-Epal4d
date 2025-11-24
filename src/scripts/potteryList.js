export const potteryList = (usePottery) => {
    let potteryListHTML = ""
        for (pottery of usePottery) {
            potteryListHTML +=`
            <section class="pottery id= "pottery-${pottery.id}">
                <h2 class="potter__shape">${pottery.shape}</h2>
                <div class= "pottery__properties">
                    Item weighs ${pottery.weight} grams and is ${pottery.height} cm in height
                </div>
                <div class="pottery__price">Price is ${pottery.price}</div>
                </article>
            `
        }
    return potteryListHTML
}