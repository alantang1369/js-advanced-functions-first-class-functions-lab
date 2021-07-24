// Code your solution in this file!
const returnFirstTwoDrivers = function(array){
    let result = [];
    for (let i= 0; i<2; i++){
        result.push(array[i])
    };
    return result;
}

const returnLastTwoDrivers = function(array){
    let result = [];
    for ( let i = array.length -1 ; i> array.length -3; i--){
        result.unshift(array[i])
    }
    return result;
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num){
    return function(fare){
        return fare * num
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(array, f){
    return f(array)
}