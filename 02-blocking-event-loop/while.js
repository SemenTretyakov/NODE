let isRunning = true;

setTimeout(() => (isRunning = false), 0);
process.nextTick(() => console.log('Next Tick'));

while (isRunning) {
    console.log('While loop is running...');
}
