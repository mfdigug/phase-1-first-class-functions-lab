// Code your solution in this file!
//function returnFirstTwoDrivers(){}

const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(2);
}


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier){
    return function fareMultiplier(fare){
        return multiplier * fare;
   };  
};

const fareDoubler = createFareMultiplier(2);


const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, callback){
    
    return callback(drivers)
}


/*

selectDifferentDrivers() — This function takes two arguments, an array of the names of Scuber's drivers and either the returnFirstTwoDrivers() or returnLastTwoDrivers() function. Based on these two arguments, selectDifferentDrivers() will return either the first two drivers or the last two drivers.
*/