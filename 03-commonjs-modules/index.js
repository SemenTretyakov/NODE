const { myName, myHobbies, myFavoriteNumber } = require('./multiple-exports');
const {
    myName: myOtherName,
    myFriendsName,
    myGreatHobbies,
} = require('./export-and-import');
const greetingFn = require('./my-modules/single-exports.js');

console.log(myName);
console.log(myHobbies);
console.log(myFavoriteNumber);

myHobbies.push('climbing');

greetingFn(myName);

console.log(myOtherName);
console.log(myFriendsName);
console.log(myGreatHobbies);
