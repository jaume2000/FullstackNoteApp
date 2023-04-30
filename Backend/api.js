require('./mongo')
require('dotenv').config()

const Note = require('./models/Note')
const express = require("express")
const cors = require("cors")

const books = [
{
    id: 1,
    title: "1984",
    author: "George Orwell",
    description: "A dystopian novel set in a totalitarian society where the government has total control over every aspect of citizens' lives.",
},
{
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description: "A novel set in the southern United States during the Great Depression, focusing on the trial of a black man who is falsely accused of raping a white woman.",
},
{   id: 3,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description: "A classic novel about the relationships and social customs of the English gentry during the late 18th and early 19th centuries.",
},
{
    id: 4,
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    description: "A humorous science fiction series that follows the misadventures of an unwitting human and his alien friend as they travel through space.",
},
{
    id: 5,
    title: "Brave New World",
    author: "Aldous Huxley",
    description: "A dystopian novel set in a future world where humans are genetically engineered and conditioned to be content with their assigned roles in society.",
},
{
    id: 6,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description: "A novel set in the 1920s that explores the themes of love, wealth, and the American Dream.",
},
{
    id: 7,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    description: "An epic fantasy trilogy that follows the journey of a hobbit and his companions to destroy a powerful ring that could bring about the end of the world.",
},
{
    id: 8,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    description: "A novel about a teenage boy who is expelled from his prep school and struggles to find his place in the world.",
},
{
    id: 9,
    title: "The Chronicles of Narnia",
    author: "C.S. Lewis",
    description: "A series of seven fantasy novels set in the magical land of Narnia, following the adventures of various characters including talking animals and humans.",
},
{
    id: 10,
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    description: "A novel that explores the history of the Buendía family over the course of seven generations in the fictional town of Macondo.",
},
{
    id: 11,
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    description: "A novel about a young man who sells his soul in exchange for eternal youth and beauty, and the consequences of his actions.",
},
{
    id: 12,
    title: "Moby-Dick",
    author: "Herman Melville",
    description: "A novel that tells the story of a sailor's obsessive quest to hunt down a giant white whale, and the themes of obsession, revenge, and the struggle between man and nature.",
},
{
    id: 13,
    title: "The Odyssey",
    author: "Homer",
    description: "An epic poem that tells the story of the Greek hero Odysseus and his ten-year journey home after the fall of Troy.",
},
{
    id: 14,
    title: "The Adventures of Huckleberry Finn",
    author: "Mark Twain",
    description: "A novel that follows the adventures of a young boy and a runaway slave as they travel down the Mississippi River.",
},
{
    id: 15,
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    description: "A novel that explores the psychology of a young man who murders an old pawnbroker and her sister, and the moral and ethical implications of his actions.",
},
{
    id: 16,
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    description: "A novel that explores the lives and relationships of three brothers in 19th-century Russia, and the themes of morality, religion, and free will.",
},
{
    id: 17,
    title: "The Sun Also Rises",
    author: "Ernest Hemingway",
    description: "A novel set in the years following World War I, following a group of expatriates as they travel from Paris to Pamplona to watch the running of the bulls.",
},
{
    id: 18,
    title: "Frankenstein",
    author: "Mary Shelley",
    description: "A novel about a scientist who creates a sentient creature in his laboratory, and the moral and ethical implications of his actions.",
},
{
    id: 19,
    title: "The Sound and the Fury",
    author: "William Faulkner",
    description: "A novel that explores the lives and relationships of the Compson family, focusing on the mental decline of one of the sons, Benjy.",
},
{
    id: 20,
    title: "Beloved",
    author: "Toni Morrison",
    description: "A novel about a former slave who is haunted by the memory of her daughter, who she killed to keep her from being captured and returned to slavery.",
},
{
    id: 21,
    title: "The Stranger",
    author: "Albert Camus",
    description: "A novel about a man who kills an Arab on a beach in Algeria, and the existential questions raised by his trial and punishment.",
},
{
    id: 22,
    title: "The Grapes of Wrath",
    author: "John Steinbeck",
    description: "A novel that tells the story of a family of tenant farmers who are forced to leave their Oklahoma home during the Great Depression and migrate to California in search of work.",
},
{
    id: 23,
    title: "Heart of Darkness",
    author: "Joseph Conrad",
    description: "A novella that explores the psychological and moral implications of imperialism, as a British sailor travels up the Congo River in search of a renegade ivory trader.",
},
{
    id: 24,
    title: "The Scarlet Letter",
    author: "Nathaniel Hawthorne",
    description: "A novel set in 17th-century Puritan New England, focusing on the life of Hester Prynne, who is forced to wear a scarlet letter 'A' after having a child out of wedlock.",
}
];
let app = express()

app.use(cors());

app.get("/api/notes_retarded", (req, res) =>{
    setTimeout( () => {Note.find({}).then(result=>res.json(result))}, 3000) //Enviamos la respuesta de la api en 3 segundos
})

app.get("/api/notes", (req, res) =>{
    Note.find({}).then(result=>res.json(result))
})

app.use((req,res)=>{
    res.json({
        error: "No se conoce esta ruta",
        ruta: req.url,
        body: req.body
    })
})
console.log("Listening on port 3002")
app.listen(process.env.PORT);
