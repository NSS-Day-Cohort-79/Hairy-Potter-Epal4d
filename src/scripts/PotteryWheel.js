//define variable to have value of primary key for each piece of potter initial value of 1
let potteryId = 1;
//define and export makePottery (shape,weight,height) parameters that returns shape weight height and id-increment
export const makePottery = (shape,weight,height) => {

    const pottery = {
        shape: shape,
        weight: weight,
        height: height,
        id: potteryId++
    };
    return pottery 
}