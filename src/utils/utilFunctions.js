 const theDates = [
    '2022-08-27T01:11:13.000Z',
    '2020-09-27T01:11:13.000Z',
   
]

// export const getGreaterDate = (date, dateArray) => {
//     let checkdate = new Date(date);
//     dateArray.forEach(element => {
//       ( ( new Date(date)) < (new Date(element)) )? checkdate = new Date(date) : checkdate = new Date(element)
//     });
//     console.log(checkdate)

//     return checkdate;
// }


export const getGreaterDate = (date, dateArray) => {
    let checkdate = '';
    dateArray.filter(item => {
        if( ( new Date(date)) > (new Date(item)) ){
              return checkdate = new Date(date)
         }else{
             return checkdate = new Date(item)
         }
    })
    console.log(checkdate)

    return checkdate;
}

getGreaterDate('2020-10-27T01:10:13.000Z', theDates)


// the function is supposed to take an date and an array of date
//it will compare the date with every other date in the array and return the bigger date 
// I try to use filter but it does work really