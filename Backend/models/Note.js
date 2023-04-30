const {Schema,model} = require("mongoose")

/*
Creamos el modelo. Esto funciona a nivel de aplicación, no a nivel de base de datos. Esto quiere decir que si vuelves al
Studio 3T y creas un objeto con una forma diferente, entonces podrás hacerlo. Pero si intentas hacerlo aquí, mongoose no te dejará.
*/
const noteSchema = new Schema({
    title: String,
    author: String,
    description: String,
    important: Boolean
})

noteSchema.set('toJSON', {
    transform: (document, returnedObj)=>{
        returnedObj.id = returnedObj._id
        delete returnedObj._id
        delete returnedObj.__v
    }

})

/*
Note es nuestra Colección! Podemos crear datos, leerlos, actualizarlos, etc. Como si hicieras db.notes.find(...) en Studio 3T
Date cuenta que aquí es importante usar el signular, mientras que en Studio 3T es importante usar el plural.
*/
const Note = model('Note', noteSchema)

module.exports = Note