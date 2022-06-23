const { createFile } = require("./helpers/multiplicar");
const argv = require("./helpers/yargs");

console.clear();
console.log(argv);

createFile(argv.b, argv.l)
  .then((archivo) => console.log(archivo))
  .catch((err) => console.log(err));
