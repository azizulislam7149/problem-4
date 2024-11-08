
function checkDigitsInName(name) {
   if(typeof name !== 'string'){
    return 'invalid input'
   }
let nameArr = name.split('');
for(let char of nameArr){
    if(!isNaN(char)){
        return true;
    }
}
return false;
}
console.log(checkDigitsInName('Raj123'))

console.log(checkDigitsInName('e1mu3'))

console.log(checkDigitsInName('Suman'))
console.log(checkDigitsInName('n9ayeem'))
console.log(checkDigitsInName('Name2024'))
console.log(checkDigitsInName('!@#'))
console.log(checkDigitsInName(["Raj"]))

