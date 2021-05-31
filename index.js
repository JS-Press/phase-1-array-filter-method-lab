// Code your solution here

function findMatching(drivers, name){
   
    
    const newDrivers = drivers.filter(function(person){return person.toLowerCase() === name.toLowerCase()});
    return newDrivers;
}

function fuzzyMatch(drivers, nameBit){
    const fuzzyDrivers = drivers.filter(function(person){
        return person.toLowerCase().indexOf(nameBit.toLowerCase()) !== -1
    });
    return fuzzyDrivers;
}

function matchName(drivers,name){
    const newDrivers = drivers.filter(function(step){drivers[step] === name})
    return newDrivers;
}





// const fuzzyDrivers = drivers.filter(function(person){
//     return person.toLowerCase().indexOf(nameBit.toLowerCase()) !== -1
// });