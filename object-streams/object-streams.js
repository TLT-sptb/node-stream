const { Transform } = require('stream');
const { stringify } = require('ndjson');

const Name = Transform({
    objectMode: true,
    transform: ({forname, surname}, enconding, callback) =>{
        callback(null, {name: forname + " " + surname});
    },
});

Name.pipe(stringify()).pipe(process.stdout);
Name.write({forname: "John", surname: "Doe"});
Name.write({forname: "Jane", surname: "Doe"});