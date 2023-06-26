const fs = require('fs');
let isRunning = true;

setTimeout(() => (isRunning = false), 10);
process.nextTick(() => console.log('Next Tick'));

function setImmediatePromise() {
    return new Promise((resolve, reject) => {
        setImmediate(() => resolve());
        // resolve();
    });
}

async function whileLoop() {
    while (isRunning) {
        console.log('While loop is running...');
        await setImmediatePromise();
    }
}

whileLoop().then(() => console.log('While loop ended'));

const getData = async (url) => {
    const result = await fetch(url);
    const json = await result.json();
    return json;
};

url = 'https://jsonplaceholder.typicode.com/posts';

const posts = getData(url);
console.log(JSON.parse(posts));
