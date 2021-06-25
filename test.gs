
function td() {
  console.log(functions.date(1999, 11, 2))
  console.log(functions.datedif(functions.date(1999,7,16),functions.date(1999,7,24), "d"))
  console.log(functions.datedif(functions.date(2014,1,1),functions.date(2015,1,1), "m"))
  console.log(functions.datevalue("2012-1-23"))
  console.log(functions.day("2012-1-23"))
  console.log(functions.day("2/28/1968"))
  console.log(functions.days("7/24/1969", "7/16/1969"))
  console.log(functions.days("2/28/2016", "2/28/2017"))
  console.log(customFunctions('days',"2/28/2016", "2/28/2017" ))
}


function ta() {
  console.log(Object.keys(functions))
  console.log(functions.flatten([[1, 2, 3], [4, 5, 6]], [7, 8, 9], 'a', 99))
  console.log(functions.array_constrain([[1, 2, 3], [4, 5, 6], [7.8, 9]], 2, 1))
  console.log(functions.frequency([[100, 101, 99, 200, 300, 301, 400, 50]], [[100], [200], [300]]))
  console.log(functions.growth([15.53, 19.99, 20.43, 21.10, 25.93, 30, 30, 34.01, 36.47], [1, 2, 3, 4, 5, 6, 7, 8, 9], [10, 11, 12]))
  console.log(functions.growth([15.53, 19.99, 20.43, 21.10, 25.93, 30, 30, 34.01, 36.47], [1, 2, 3, 4, 5, 6, 7, 8, 9], [10, 11, 12], 0))
  console.log(functions.linest([5, 8.5, 10, 11.2, 14, 16, 16.8, 18.55, 20], [1, 2.5, 3.1, 4, 4.7, 5.3, 6, 7.1, 9]))
  console.log(functions.trend([15.53, 19.99, 20.43, 21.10, 25.93, 30, 30, 34.01, 36.47], [1, 2, 3, 4, 5, 6, 7, 8, 9], [10, 11, 12]))
  console.log(functions.logest([7, 8.9, 10.56, 12.33, 14, 15.9, 18.4, 23.7, 38.66], [1.1, 2, 3.2, 4, 4.9, 5.1, 6, 7.2, 8.8]))
  console.log(functions.transpose([[1, 2, 3], [4, 5, 6]]))
  console.log(functions.sumproduct([[3, 2, 1], [4, 5, 6]]))
}
