const argv = require("yargs")
  .options({
    b: {
      alias: "base",
      type: "number",
      demandOption: true,
    },
    l: {
      alias: 'listar',
      type: 'boolean',
      default: false,
    }
  } )
  .check((argv, options) => {
    if (isNaN(argv.b)) throw "La base tiene que ser numero";
    return true;
  }).argv;

  module.exports = argv;