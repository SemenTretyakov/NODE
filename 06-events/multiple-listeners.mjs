import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

myEmitter.on('myEvent', () => {
    console.log('First event listener');
});

myEmitter.on('myEvent', () => {
    console.log('Second event listener');
});

console.log(myEmitter.getMaxListeners());
setTimeout(() => myEmitter.emit('myEvent'), 1000);

myEmitter.on('otherEvent', () => console.log('Other event'));

console.log(myEmitter.eventNames());