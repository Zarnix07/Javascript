const accountId = 25369
let accountEmail = "hiteshrana@gmail.com"
var accountPassword = "8520147"
accountCity = "Bhubaneswar"
let accountState;

// accountId = 2541 // not allowed

/*
Prefer not to use var 
because of the issue in block scope and fuctional scope
*/

accountEmail = "ranahitesh@gmail.com"
accountPassword = "9632580"
accountCity = "Bengaluru"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])