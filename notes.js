const fs = require('fs')
const chalk = require('chalk')
//const { title } = require('process')

const getNotes = function () {
    return 'Your notes...'
}
//function responsible adding a note
const addNote = function (title, body) {
    const notes = loadNotes()
    //const duplicateNotes = notes.filter(function (note) {
    //    return note.title == title
    //})
    //check that title is already in use. Prevent duplicate note is not added.
    const duplicateNote = notes.find((note) => note.title == title)
    
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!')

    }else {
        console.log('Note title already Present')
    }


   

}

const removeNote = function (title) {
    const notes = loadNotes()
    const notesToKeep = notes.filter(function (note){
        return note.title !== title
    })

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note Removed!'))
        saveNotes(notesToKeep)

    }else{
        console.log(chalk.red.inverse('No Note Found'))
        

    }


}
const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.red.inverse('Your Notes'))

    notes.forEach((note)=> {
        console.log(note.title)

        
    })

          
}
const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)

    }else{
        console.log(chalk.red.inverse('Note not found'))

    }

}

    
//savenotes function: save the data whatever data is passed in.
    const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)

}

const loadNotes = function () {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

    } catch (e) {
        return [] //gives you empty array

    }    
    
   
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote

} 
//properties: function