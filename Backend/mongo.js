const mongoose = require("mongoose")
require('dotenv').config()
//const {Schema} = mongoose

const connectionString = process.env.MONGO_DB_URI

//Hacemos la coneión
mongoose.connect(connectionString).then(() =>{
    console.log("Database connected")
}).catch((err) =>{
    console.log(err)
})



//#region Leyendo Notas
/*
Note.find({}).then((res)=>{
    console.log(res)
    mongoose.connection.close()
})
*/
//#endregion




//#region Creando Notas
/*
const note = new Note({
    title: "Jaume, el creador de APIs",
    author: "Jaume",
    description: "Estamos aprendiendo a usar mongoose junto con express, Jaume ha creado esta API para poder aprender!",
    import: true
})

note.save().then((result)=>{
    console.log("Nota creada!")
    console.log(result)
    //Es importante cerrar la conexión una vez la operación ha terminado
    mongoose.connection.close()
}).catch(err=>console.log(err))
*/

//#endregion