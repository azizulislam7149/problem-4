

function sendNotification(email) {
// if(email.split(' ').indexOf('@') === -1 ){
//     return 'invalid input';

// }
// else{
//     return 'valid input'
// }
if(email.split('').includes('@') === false){
    return 'invalid input'
}
let emailArr = email.split('@');
let notification = `${emailArr[0]} send you an email from ${emailArr[1]}`
return notification

}
console.log(sendNotification('zihad@gmail.com'));
console.log(sendNotification('farhan34@yahoo.com'));
console.log(sendNotification('nadim.naem5@outlook.com'));

console.log(sendNotification('fahim234.hotmail.com'));
console.log(sendNotification('sadia8icloud.com'));

