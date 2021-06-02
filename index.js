// Code your solution here

function findMatching(drivers, name){
   
    
    const newDrivers = drivers.filter(function(person){return person.toLowerCase() === name.toLowerCase()});
    return newDrivers;
}

function fuzzyMatch(driverArray, name) {
    return driverArray.filter(person => person[0].toLowerCase() === name[0].toLowerCase())

}

function matchName(driverArray, name) {
    return driverArray.filter(person => person.name === name)

}





// const fuzzyDrivers = drivers.filter(function(person){
//     return person.toLowerCase().indexOf(nameBit.toLowerCase()) !== -1
// });