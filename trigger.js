process.on('message', (msg) => {
    stratTrigger(msg);
    process.send(0);
})

stratTrigger = function (msg) {
    console.log(`Process Id: ${process.pid}`);
    console.log(`PID: ${process.pid} -- Message: `,msg);
}