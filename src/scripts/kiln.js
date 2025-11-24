//Define and export firePottery that takes Pottery object as input 
export const firePottery = (potteryObject, kilnTemp) => {
    potteryObject.fired = true
    if (kilnTemp > 2200){
        potteryObject.cracked = true
    } else {
        potteryObject.cracked = false
    } 
return potteryObject
}