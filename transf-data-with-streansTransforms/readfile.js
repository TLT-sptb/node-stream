const fs = require('fs');
const rs = fs.createReadStream('./file.txt');

rs.on('readable', () => {
    let data = rs.read();
    while(data !== null){
        console.log('Read Chunk: ', data);
        data = rs.read();
    }
});
rs.on('end', () => {
    console.log('No more data.');
});
