import { EventEmitter } from 'events';
// import { setTimeout } from 'timers/promises';

const myEmitter = new EventEmitter();

const timeoutListener = (secondsQty) => {
    console.log(`Timeout event in ${secondsQty} seconds!`);
};

myEmitter.on('timeout', timeoutListener);

setTimeout(() => myEmitter.emit('timeout', 1), 1000);
setTimeout(() => myEmitter.emit('timeout', 2), 2000);

myEmitter.once('singleEvent', () => {
    console.log('Single event occured');
});

setTimeout(() => myEmitter.emit('singleEvent'), 500);
setTimeout(() => myEmitter.emit('singleEvent'), 1500);

setTimeout(() => myEmitter.off('timeout', timeoutListener), 3000);
setTimeout(() => myEmitter.emit('timeout', 4), 4000);
