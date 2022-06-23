const fs = require("fs");

const createFile = async (base = 5, listar) => {
  try {
    let salida = "";

    for (i = 0; i < 10; i++) {
      salida += `${base} x ${i + 1} = ${base * (i + 1)} \n`;
    }

    if(listar) console.log(salida);

    fs.writeFileSync(`tabla-${base}.txt`, salida);

    return "Archivo creado";
  } catch (err) {
    return err;
  }
};

module.exports.createFile = createFile;
