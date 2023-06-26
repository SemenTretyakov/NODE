try {
    const fs = require('fs');
    fs.writeFileSync('./first.txt', 'File first text');
    console.log('File first.txt was written');
    fs.appendFileSync('./first.txt', '\nOne more line');
    console.log('Appended text to the first.txt file');
    fs.renameSync('./first.txt', './renamed.txt');
    console.log('File was renamed');
} catch (err) {
    console.log(err);
}
