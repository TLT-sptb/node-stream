const fs = require('fs');

const { Transform } = require('stream');
const rs = fs.createReadStream('./file.txt');

const newFile = fs.createWriteStream('./newFile.txt');

 const upperCase = new Transform({
    transform(chunk, enconding, callback){
         callback(null, chunk.toString().toUpperCase());
     }
 })
rs.pipe(upperCase).pipe(newFile);