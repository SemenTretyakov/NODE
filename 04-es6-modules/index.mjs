import { season, temperature } from './names-exports.mjs';
import { isRaining, himididty } from './inline-exports.mjs';
import getDataNew from './default-exports.mjs';
import DEFAULT_SERVER_fromData, {
    PASSWORD as MyPassword,
    USERNAME as MyUserName,
} from './mixed-exports.mjs';

console.log(season);
console.log(temperature);

console.log(isRaining);
console.log(himididty);

getDataNew('https://jsonplaceholder.typicode.com/posts/5')
    .then((post) => console.log(post))
    .catch((error) => console.log(error));

console.log(DEFAULT_SERVER_fromData);
console.log(MyPassword);
console.log(MyUserName);
