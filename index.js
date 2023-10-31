// Code your solution in this file!

function distanceFromHqInBlocks(someValue) {
    let distance = Math.abs(42 - someValue);
    return distance;
}

function distanceFromHqInFeet(someValue) {
    let distance = distanceFromHqInBlocks(someValue) * 264;
        return distance;
}

function distanceTravelledInFeet(start, end) {
   let distance = Math.abs(start - end) * 264;
        return distance;
}

function calculatesFarePrice(start, end) {
    let distance = distanceTravelledInFeet(start, end);
    let price = 0;
    if (distance <= 400) {
        return price = 0;
    } else if (distance > 400 && distance <= 2000) {
        return price = (distance - 400)* 0.02;
    }  else if (distance > 2000 && distance <= 2500) {
        return price = 25;
    }  else (distance > 2500) 
        return "cannot travel that far";
    
}