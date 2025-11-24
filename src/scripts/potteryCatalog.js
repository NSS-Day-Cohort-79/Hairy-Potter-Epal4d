//define variable with value of an empty array 
    const potteryToSell = [];

export const toSellOrNotToSell  = (firedPotteryObject) =>{
    if(firedPotteryObject.cracked === false){
        // if weight >= 6
        if(firedPotteryObject.weight >= 6){
            //add price property = 40
            firedPotteryObject.price = 40
        }
        // if weight < 6 add price property = 20
        if(firedPotteryObject.weight < 6 ) {
            firedPotteryObject.price = 20
            //if not cracked add object to potterToSell array
            
        }
        potteryToSell.push(firedPotteryObject)
    
    }
    return firedPotteryObject

}

export const usePottery = () => structuredClone(potteryToSell)