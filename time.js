/*
1 rotation

4 quarters

4 leap years

*1
*year

4 seasons

12 months

365 days



1
day

24 hours
    
**/

//function divide by 4 
const divide4 = (year) => {
    for (let year = 2021; year < 2022; year--){
        if (year%4===0 && year > -500){ console.log(year) }
        
    }
}
console.log(divide4(2022))