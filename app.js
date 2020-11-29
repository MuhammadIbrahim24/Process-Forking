const { fork } = require('child_process');

let start = function() {
    let obj = {
        name : 'John',
        age : 18
    }
    let process1 = fork('./trigger.js');
    process1.send(obj);

    obj = {
        name : 'Jane',
        age : 15
    }

    let process2 = fork('./trigger.js');
    process2.send(obj);

    process2.on('message', (msg) => {
        console.log(msg);
    })
}

start();