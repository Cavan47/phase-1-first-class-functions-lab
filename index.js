const returnFirstTwoDrivers = function(drivers){
    const driversCopy = [drivers];
    return [driversCopy[0][0], driversCopy[0][1]];
    
}

const returnLastTwoDrivers = function(drivers){
    const driversCopy = [drivers];
    return [driversCopy[0][2], driversCopy[0][3]];
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(x){

   return function (y){
        return x * y;
   }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, firstOrLast){
   const driverCopy = [drivers];
    if (firstOrLast == returnFirstTwoDrivers){
        return [driverCopy[0][0], driverCopy[0][1]];
    }else if (firstOrLast == returnLastTwoDrivers){
        return [driverCopy[0][2], driverCopy[0][3]];
}
}
