





//var numbers =[23,14,27,30,1,3,3,9,100,255,191];

//var filterNumbers = numbers.filter(function (num) {
   // return num<27;
//})
//console.log(filterNumbers);


var cities=["nairobi","cairo","capetown","tunis","newyork","newark",];
const findCity=function (citiesData,query) {
    return citiesData.filter(function (city) {
        return city.toLowerCase().includes(query);
        
    });
    
};
console.log(findCity(cities,"n"));