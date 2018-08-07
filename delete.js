function ageCalculator (name, yearOfBirth, currentYear) {
  return name + ' is';
  var age = (currentYear - yearOfBirth);
  return age + 's' + 'old.'
}

console.log(ageCalculator("bobby", 1990, 2018))
