// Imports
const { Command } = require("commander")

// Declaration
const commander = new Command()

// Config
commander.option("--mode <mode>", "Modo de trabajo", "production")

commander.parse()

console.log("Options: ", commander.opts())
console.log("Remaining arguments: ", commander.args);

// Export
module.exports = { 
    commander
}