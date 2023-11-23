// This is a comment
const accountId = 144553
let accountEmail = "tom@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"  // SUGGESTION: Avoid creating variables without const and let keywords.
let accountState;  // FACT: You can add semi-colon in the end, it is not compulsory in JavaScript.
/*
FACT: If you declare a variable without defining it, then JavaScript assigns it with value: undefined.
*/

// accountId = 2  // RULE: You cannot override a constant variable.
accountCity = "Bangalore"

console.log(accountId)

/*
SUGGESTION:
1.
Prefer not to use keyword var.
- because of issue in block scope and functional scope.
2.
Use const and let only.
3.
Although you can create a variable without const and let keywords but that is not advisable to use.
*/

console.table([accountId, accountEmail, accountPassword, 
    accountCity, accountState])


