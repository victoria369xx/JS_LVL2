'use strict';
//одинарные кавычки заменяются на двойные
const text =  `They said, 'We can't come to the party on Friday.'
The postman said, 'I'll deliver this letter tomorrow.'
    'You are affraid, aren't you?', she noticed.`
const regExp = new RegExp (`'`,`g`);
console.log(text.replace(regExp, `"`));

// конструкции aren't не меняются
const text2 =  `They said, 'We can't come to the party on Friday.'
The postman said, 'I'll deliver this letter tomorrow.'
    'You are affraid, aren't you?', she noticed.`
const regExp2 = /\B'/g; 
console.log(text2.replace(regExp2, `"`));





