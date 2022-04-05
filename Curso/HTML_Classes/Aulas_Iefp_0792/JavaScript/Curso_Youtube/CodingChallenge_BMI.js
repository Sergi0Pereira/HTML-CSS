var weightJ= 65;
var weightM= 95;
var heightJ= 1.65;
var heightM=1.95;


var bmi_j = weightJ/ (heightJ*heightJ);
var bmi_m = weightM/ (heightM*heightM);

var higherBmi= bmi_m > bmi_j;

console.log(bmi_j , bmi_m);
console.log("Is Mark\´s BMI higher than John\´s? " + higherBmi)