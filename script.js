export function calculateCircumference(radius) {
    return 2 * Math.PI * radius;
  }

  export function firstSunday () {
    for (var year = 2014; year <= 2050; year++) {
      var d = new Date(year, 0, 1);
      if (d.getDay() === 0) {
        console.log('The first day of ' + year + ' is a Sunday');
      }
    }
  }
  
  firstSunday();


