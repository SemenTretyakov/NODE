const { myName, myHobbies } = require('./multiple-exports');

const myFriendsName = 'Danya';

module.exports.myName = myName;
module.exports.myFriendsName = myFriendsName;
module.exports.myGreatHobbies = myHobbies;
