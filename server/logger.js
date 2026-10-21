const fs = require('fs');
const path = require('path');
const os = require('os');

const EventEmmiter = require('events') 

class Logger extends EventEmmiter {
    log(message){
        this.emit('message',{message})

    }
}


const logger = new Logger()
const LogFile = './eventlog.txt'

const LogTOFile =(event) =>{
    const LogMessage = `${new Date().toISOString()} - ${event.message} \n`
    fs.appendFileSync(LogFile,LogMessage)
}

logger.on('message',LogTOFile)
setInterval(() => {
const memoryUsage = (os.freemem()/os.totalmem()) * 100
logger.log(`Memoryusage :- ${memoryUsage.toFixed(2)} <br></br>`)
}, 3000);

logger.log('Application Started')
logger.log(`application occure Event`)
