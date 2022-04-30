const chalk = require('chalk') //load npm packages
const yargs = require('yargs')

const notes = require('./notes.js')

//const command = process.argv[2]

//console.log(process.argv)
//console.log(yargs.argv)

//if (command === 'add') {
  //  console.log('Adding note!')
//} else if (command === 'remove') {
  //  console.log('Removing note!')
//}
//customize yargs version
yargs.version('1.1.0')

//create add command
yargs.command({
    command: 'add', //name of command
    describe: 'Add a new note', //command is supposed to do.
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
       notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'Remove',
    describe: 'Remove a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'list a new note',
    handler: function () {
         notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'read a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.readNote(argv.title)
    }
})
//console.log(yargs.argv)
yargs.parse()