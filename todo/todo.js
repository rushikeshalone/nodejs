const fs = require('fs')
const { json } = require('stream/consumers')
const filePath = "./task.js"

const LoadTask = async ()=>{
    try {

        const DataBuffer = await fs.readFileSync(filePath)
        const dataJson = await DataBuffer.toString()
        return JSON.parse(dataJson)
        
    } catch (error) {
        return []
    }
}

const saveTasks = (tasks) =>{
   const  DataJson =  JSON.stringify(tasks)
   fs.writeFileSync(filePath,DataJson);
}

const addTask= async (task) =>{
  const  Tasks = await LoadTask()
  console.log("Rushi",Tasks)
  Tasks.push({task})
  saveTasks(Tasks)  
  console.log("Task Added ",task)
}

const removeTask = () =>{

}
const command = process.argv[2]
const argement = process.argv[3]
console.log(command)

if(command ==='add'){
   addTask(argement)
}else if(command ==='list'){
listTask()
}else if(command ==='remove'){
removeTask(parseInt(argement))
}else{
console.log("command not Found !")
}

